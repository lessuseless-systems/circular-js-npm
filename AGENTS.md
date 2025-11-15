# Circular Protocol TypeScript SDK - Architecture Guide

This document describes the internal architecture, design patterns, and implementation details of the Circular Protocol TypeScript SDK. It's intended for contributors, maintainers, and AI agents working with the codebase.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Architecture Overview](#architecture-overview)
3. [Class Structure](#class-structure)
4. [Request Flow](#request-flow)
5. [Method Overload Pattern](#method-overload-pattern)
6. [Auto-Preprocessing System](#auto-preprocessing-system)
7. [Error Handling Strategy](#error-handling-strategy)
8. [Type System](#type-system)
9. [Testing Strategy](#testing-strategy)
10. [Build System](#build-system)
11. [Extensibility](#extensibility)

---

## Design Philosophy

### Core Principles

1. **JavaScript Compatibility**: The SDK must match the API surface of the JavaScript implementation (circular-js-npm) for easy migration
2. **TypeScript Safety**: Leverage TypeScript's type system for compile-time safety and better IDE support
3. **Developer Experience**: Make common operations simple while supporting advanced use cases
4. **Zero Surprises**: Behavior should match JavaScript implementation except where TypeScript patterns improve the API

### Design Decisions

- **Class-based API** instead of functional: Better for TypeScript, enables state management (NAG URL, API keys, error tracking)
- **Method overloads** for dual API styles: Support both positional params (JS-style) and request objects (TS-style)
- **Auto-preprocessing** for convenience: Automatically normalize hex values, convert strings, inject version
- **Hardcoded version** for simplicity: Matches JS implementation, simpler than configuration
- **Throws on HTTP errors, returns Result codes otherwise**: Distinguishes transport errors from business logic errors

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     CircularProtocolAPI                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              24 API Methods (Overloaded)                │ │
│  │  checkWallet, getWallet, sendTransaction, etc.         │ │
│  └────────────────┬───────────────────────────────────────┘ │
│                   │                                           │
│  ┌────────────────▼───────────────────────────────────────┐ │
│  │           Auto-Preprocessing Layer                      │ │
│  │  hexFix, stringToHex, version injection, etc.          │ │
│  └────────────────┬───────────────────────────────────────┘ │
│                   │                                           │
│  ┌────────────────▼───────────────────────────────────────┐ │
│  │              _makeRequest (HTTP Layer)                  │ │
│  │  Handles fetch, headers, error handling                │ │
│  └────────────────┬───────────────────────────────────────┘ │
│                   │                                           │
└───────────────────┼───────────────────────────────────────────┘
                    │
            ┌───────▼──────┐
            │  NAG API     │
            │  (REST/JSON) │
            └──────────────┘
```

---

## Class Structure

### CircularProtocolAPI Class

```typescript
export class CircularProtocolAPI {
  // Configuration
  private readonly version: string = '1.0.8'
  private nagURL: string = 'https://nag.circularlabs.io/NAG.php?cep='
  private nagKey: string = ''
  private readonly headers: Record<string, string>

  // State
  private lastError: string = ''

  // Core methods
  private async _makeRequest(endpoint: string, data: any): Promise<any>

  // 24 API methods (all overloaded)
  // 15 helper methods (public)
  // 1 convenience method (registerWallet)
}
```

### Organization

Methods are organized into logical groups:
- **Wallet Operations** (5 methods): checkWallet, getWallet, getWalletBalance, getWalletNonce, getLatestTransactions
- **Transaction Operations** (6 methods): sendTransaction, getPendingTransaction, getTransactionbyID, etc.
- **Block Operations** (4 methods): getBlock, getBlockRange, getBlockCount, getAnalytics
- **Smart Contract Operations** (2 methods): testContract, callContract
- **Asset Operations** (4 methods): getAssetList, getAsset, getAssetSupply, getVoucher
- **Domain Operations** (1 method): getDomain
- **Network Operations** (1 method): getBlockchains
- **Convenience Methods** (1 method): registerWallet

---

## Request Flow

### Typical Request Flow

```
User calls method
    ↓
Method overload resolution
    ↓
Positional params converted to request object (if needed)
    ↓
Auto-preprocessing applied:
  - hexFix(blockchain, address, ID, etc.)
  - stringToHex(project, request)
  - Version injection
  - Timestamp generation (for contracts)
  - Special handling (voucher code stripping)
    ↓
Request object passed to _makeRequest
    ↓
HTTP POST to NAG endpoint
    ↓
Response parsed as JSON
    ↓
Result object returned { Result: number, Response: any }
```

### Example Flow (checkWallet)

```typescript
// User calls
await api.checkWallet('MainNet', '0x123abc...')

// Method resolves to positional overload
// Converts to:
{
  Blockchain: 'MainNet',    // After hexFix: 'MainNet'
  Address: '123abc...',     // After hexFix: '123abc' (0x removed)
  Version: '1.0.8'          // Auto-injected
}

// Sent to:
POST https://nag.circularlabs.io/NAG.php?cep=Circular_CheckWallet_

// Returns:
{
  Result: 200,
  Response: { exists: true, address: '...' }
}
```

---

## Method Overload Pattern

### Pattern Structure

Every API method follows this pattern:

```typescript
// Positional parameters signature (matches JS)
async methodName(param1: string, param2: string, ...): Promise<MethodResponse>;

// Request object signature (TypeScript-idiomatic)
async methodName(req: MethodRequest): Promise<MethodResponse>;

// Implementation handles both
async methodName(
  param1OrReq: string | MethodRequest,
  param2?: string,
  ...
): Promise<MethodResponse> {
  // Discriminate based on first parameter type
  const req = typeof param1OrReq === 'string'
    ? {
        // Build request from positional params
        Param1: this.preprocess(param1OrReq),
        Param2: this.preprocess(param2!),
        Version: this.version
      }
    : {
        // Preprocess request object
        ...param1OrReq,
        Param1: this.preprocess(param1OrReq.Param1),
        Param2: this.preprocess(param1OrReq.Param2),
        Version: param1OrReq.Version || this.version
      };

  return this._makeRequest('Endpoint', req);
}
```

### Benefits

1. **Backward compatibility**: JavaScript users can migrate without changing code
2. **Type safety**: TypeScript users get full IDE autocomplete and type checking
3. **Flexibility**: Choose the style that fits your use case
4. **Single implementation**: No code duplication

---

## Auto-Preprocessing System

### Preprocessing Functions

| Function | Applied To | Purpose |
|----------|-----------|---------|
| `hexFix()` | blockchain, address, ID, nodeID | Remove '0x' prefix if present |
| `stringToHex()` | project, request (contracts) | Convert UTF-8 strings to hex encoding |
| `getFormattedTimestamp()` | Timestamp (contracts) | Generate UTC timestamp in YYYY:MM:DD-hh:mm:ss format |
| Version injection | All requests | Add `Version: '1.0.8'` field |
| Code stripping | Voucher codes | Remove '0x' prefix from voucher codes |

### Preprocessing Rules

1. **Always apply to positional params**: Ensures consistent behavior
2. **Also apply to request objects**: Even when using request objects, preprocessing ensures consistency
3. **Preserve user-provided Version if present**: Allows override in request object pattern
4. **Non-destructive**: Original parameters not modified, only processed values sent to API

### Example: Smart Contract Methods

```typescript
// testContract auto-preprocessing:
testContract('blockchain', 'from', 'project code string')
  ↓
{
  Blockchain: hexFix('blockchain'),
  From: hexFix('from'),
  Project: stringToHex('project code string'),
  Timestamp: getFormattedTimestamp(),
  Version: '1.0.8'
}
```

---

## Error Handling Strategy

### Error Categories

1. **HTTP/Network Errors**: Fetch failures, timeouts, non-200 status codes
   - **Action**: Throw exception
   - **Rationale**: Transport errors are exceptional conditions

2. **API Business Logic Errors**: Result codes (200, 404, 500, etc.)
   - **Action**: Return in response object
   - **Rationale**: Matches JavaScript behavior, allows handling based on Result code

3. **Internal SDK Errors**: Programming errors, invalid states
   - **Action**: Throw exception
   - **Rationale**: Indicates bug in SDK or incorrect usage

### Error Handling Implementation

```typescript
private async _makeRequest(endpoint: string, data: any) {
  try {
    const response = await fetch(url, options);

    // HTTP errors → throw
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const result = await response.json();

    // Return all results, even non-200 Result codes
    // Let caller handle based on Result field
    return result;

  } catch (error) {
    // Network/fetch errors → throw
    if (error instanceof TypeError) {
      throw new Error('API request failed: ' + error.message);
    }
    throw error;
  }
}
```

### Error Tracking

```typescript
private lastError: string = '';

GetError(): string {
  return this.lastError;
}

private handleError(error: any): void {
  this.lastError = error instanceof Error
    ? error.message
    : String(error);
}
```

---

## Type System

### Interface Structure

Every API method has:
1. **Request interface**: Defines required fields for API call
2. **Response interface**: Defines expected response structure

```typescript
// Request
export interface checkWalletRequest {
  Blockchain: string;
  Address: string;
  Version: string;
}

// Response
export interface checkWalletResponse {
  Result: number;
  Response: {
    exists: boolean;
    address: string;
  };
}
```

### Type Hierarchy

```
All responses extend:
{
  Result: number;      // HTTP-style status code
  Response: T;         // Method-specific data
}
```

### Type Exports

All types are exported for consumer use:
```typescript
import type {
  checkWalletRequest,
  checkWalletResponse,
  getWalletRequest,
  // ... all other types
} from 'circular-protocol-api';
```

---

## Testing Strategy

### Three-Layer Approach

```
Unit Tests (Fast)
├── Mock fetch API
├── Test request building
├── Test response parsing
├── Test error handling
└── No external dependencies

Integration Tests (Medium)
├── Local mock server
├── Test method interactions
├── Test preprocessing pipeline
└── No credentials required

E2E Tests (Slow)
├── Live NAG API
├── Real blockchain operations
├── Requires credentials
└── Can be skipped in CI
```

### Test Organization

```
__tests__/
├── index.test.ts           # Unit tests
├── helpers.test.ts         # Helper function tests
├── preprocessing.test.ts   # Preprocessing logic tests
├── overloads.test.ts       # Method overload resolution tests
├── integration.test.ts     # Integration tests
└── e2e.test.ts            # End-to-end tests
```

### Test Patterns

```typescript
describe('checkWallet', () => {
  it('should build correct request with positional params', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ Result: 200, Response: {...} })
    });

    await api.checkWallet('MainNet', '0xtest');

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('CheckWallet'),
      expect.objectContaining({
        body: expect.stringContaining('"Address":"test"') // hexFix applied
      })
    );
  });
});
```

---

## Build System

### Build Process

```
TypeScript Source (src/index.ts)
    ↓
TypeScript Compiler
    ↓
├─→ Type Definitions (lib/index.d.ts)
│
├─→ Webpack (CJS)
│   └─→ lib/index.cjs
│
└─→ Webpack (ESM)
    └─→ lib/index.js
```

### Build Configuration

```json
{
  "scripts": {
    "build": "npm run build:cjs && npm run build:esm",
    "build:cjs": "webpack --config webpack.config.cjs.js",
    "build:esm": "webpack --config webpack.config.esm.js"
  }
}
```

### Webpack Configuration Highlights

**CommonJS** (webpack.config.cjs.js):
```javascript
{
  output: {
    filename: 'index.cjs',
    libraryTarget: 'commonjs2'
  }
}
```

**ESM** (webpack.config.esm.js):
```javascript
{
  output: {
    filename: 'index.js',
    libraryTarget: 'module',
    module: true
  },
  experiments: {
    outputModule: true
  }
}
```

### Package Exports

```json
{
  "main": "./lib/index.js",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "require": "./lib/index.cjs"
    }
  }
}
```

---

## Extensibility

### Adding a New API Method

1. **Define interfaces** (src/index.ts):
```typescript
export interface newMethodRequest {
  Blockchain: string;
  Param1: string;
  Version: string;
}

export interface newMethodResponse {
  Result: number;
  Response: { /* ... */ };
}
```

2. **Add method with overloads**:
```typescript
async newMethod(blockchain: string, param1: string): Promise<newMethodResponse>;
async newMethod(req: newMethodRequest): Promise<newMethodResponse>;
async newMethod(
  blockchainOrReq: string | newMethodRequest,
  param1?: string
): Promise<newMethodResponse> {
  const req = typeof blockchainOrReq === 'string'
    ? {
        Blockchain: this.hexFix(blockchainOrReq),
        Param1: this.preprocess(param1!),
        Version: this.version
      }
    : {
        ...blockchainOrReq,
        Blockchain: this.hexFix(blockchainOrReq.Blockchain),
        Param1: this.preprocess(blockchainOrReq.Param1),
        Version: blockchainOrReq.Version || this.version
      };
  return this._makeRequest('NewMethod', req);
}
```

3. **Add tests**:
```typescript
describe('newMethod', () => {
  it('should work with positional params', async () => { /* ... */ });
  it('should work with request object', async () => { /* ... */ });
  it('should apply preprocessing', async () => { /* ... */ });
});
```

4. **Update documentation**:
   - Add to README.md API reference
   - Add to CHANGELOG.md
   - Add JSDoc comments

### Custom Preprocessing

To add custom preprocessing for specific parameters:

```typescript
private customPreprocess(value: string): string {
  // Custom logic
  return processedValue;
}

// Use in method:
async someMethod(...): Promise<...> {
  const req = {
    ...
    SpecialField: this.customPreprocess(input),
    ...
  };
}
```

### Extending Configuration

To add new configuration options:

```typescript
export class CircularProtocolAPI {
  private myNewOption: string = 'default';

  constructor(nagUrl?: string, nagKey?: string, options?: {
    myNewOption?: string;
  }) {
    // ...
    if (options?.myNewOption) {
      this.myNewOption = options.myNewOption;
    }
  }

  setMyNewOption(value: string): void {
    this.myNewOption = value;
  }

  getMyNewOption(): string {
    return this.myNewOption;
  }
}
```

---

## Development Workflow

### Typical Development Cycle

```
1. Make changes to src/index.ts
2. Run tests: npm test
3. Fix any type errors: npm run type-check
4. Fix linting: npm run lint
5. Build: npm run build
6. Verify outputs in lib/
7. Update CHANGELOG.md
8. Commit with conventional commit message
```

### Pre-Release Checklist

- [ ] All tests pass
- [ ] Type check passes
- [ ] Lint passes
- [ ] Build succeeds (both CJS and ESM)
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json
- [ ] Git tag created
- [ ] Documentation updated

---

## Performance Considerations

### Request Batching

Currently, the SDK makes individual requests. For high-volume scenarios, consider:
```typescript
async batchRequest(requests: Array<{endpoint: string, data: any}>): Promise<any[]> {
  return Promise.all(
    requests.map(r => this._makeRequest(r.endpoint, r.data))
  );
}
```

### Caching

For frequently accessed data:
```typescript
private cache = new Map<string, {data: any, timestamp: number}>();

async getCached(key: string, ttl: number, fetcher: () => Promise<any>) {
  const cached = this.cache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }
  const data = await fetcher();
  this.cache.set(key, {data, timestamp: Date.now()});
  return data;
}
```

---

## Security Considerations

### API Key Handling

- Never log API keys
- Store in environment variables
- Pass via constructor, not hardcode

### Input Validation

- hexFix prevents injection via malformed hex
- stringToHex ensures proper encoding
- Type system prevents many common errors

### Signature Verification

```typescript
// Always verify signatures before trusting data
const isValid = api.verifySignature(
  publicKey,
  message,
  signature
);
if (!isValid) {
  throw new Error('Invalid signature');
}
```

---

## Future Improvements

### Planned Features

1. **WebSocket support** for real-time updates
2. **Request retry logic** with exponential backoff
3. **Response caching** with TTL
4. **Batch operations** for multiple requests
5. **Browser compatibility** testing and polyfills
6. **Rate limiting** protection
7. **Request queueing** for high-volume scenarios

### Breaking Changes (v2.0)

Potential breaking changes for next major version:
- Remove double-nested Response types
- Make version configurable
- Add generic error types
- Support custom serialization

---

## Appendix: Endpoint Mapping

| SDK Method | NAG Endpoint | Notes |
|------------|--------------|-------|
| checkWallet | Circular_CheckWallet_ | |
| getWallet | Circular_GetWallet_ | |
| getWalletBalance | Circular_GetWalletBalance_ | |
| getWalletNonce | Circular_GetWalletNonce_ | |
| getLatestTransactions | Circular_GetLatestTransactions_ | |
| sendTransaction | Circular_AddTransaction_ | Alias for addTransaction |
| getPendingTransaction | Circular_GetPendingTransaction_ | |
| getTransactionbyID | Circular_GetTransactionbyID_ | |
| getTransactionbyNode | Circular_GetTransactionbyNode_ | |
| getTransactionbyAddress | Circular_GetTransactionbyAddress_ | |
| getTransactionbyDate | Circular_GetTransactionbyDate_ | |
| getBlock | Circular_GetBlock_ | |
| getBlockRange | Circular_GetBlockRange_ | |
| getBlockCount | Circular_GetBlockHeight_ | Note: endpoint name differs |
| getAnalytics | Circular_GetAnalytics_ | |
| testContract | Circular_TestContract_ | |
| callContract | Circular_CallContract_ | |
| getAssetList | Circular_GetAssetList_ | |
| getAsset | Circular_GetAsset_ | |
| getAssetSupply | Circular_GetAssetSupply_ | |
| getVoucher | Circular_GetVoucher_ | |
| getDomain | Circular_ResolveDomain_ | Note: endpoint name differs |
| getBlockchains | Circular_GetBlockchains_ | |

---

*This architecture guide is maintained alongside the SDK code. Last updated: 2025-11-15*
