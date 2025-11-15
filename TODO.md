# TODO - Circular Protocol TypeScript SDK

## Testing Structure Issues

### Current State
- ❌ **Duplicate test directories**: Both `__tests__/` and `tests/` exist
- ❌ **Duplicate test files**: `index.test.ts` exists in both directories
- ❌ **Missing test files** mentioned in AGENTS.md:
  - `helpers.test.ts` - Test cryptographic and encoding helpers
  - `preprocessing.test.ts` - Test auto-preprocessing (hexFix, stringToHex, etc.)
  - `overloads.test.ts` - Test method overload resolution

### Files Found
```
__tests__/
└── index.test.ts           # Unit tests (mocks fetch)

tests/
├── circularProtocolAPI.test.js  # Legacy from circular-js-npm
├── index.test.ts                # Duplicate unit tests
├── integration.test.ts          # Integration tests (EXISTS!)
└── e2e.test.ts                  # E2E tests (EXISTS!)
```

### Completed Actions ✅

#### 1. ✅ Consolidated Test Directories
- Moved `tests/integration.test.ts` → `__tests__/integration.test.ts`
- Moved `tests/e2e.test.ts` → `__tests__/e2e.test.ts`
- Removed duplicate `tests/index.test.ts`
- Kept `tests/circularProtocolAPI.test.js` for legacy reference
- Using `__tests__/` directory (Jest convention)

#### 2. ✅ Created Missing Test Files

**`__tests__/helpers.test.ts`** (250 lines)
- ✅ Test `hexFix()` - strip 0x prefix
- ✅ Test `stringToHex()` - UTF-8 to hex encoding
- ✅ Test `hexToString()` - hex to UTF-8 decoding
- ✅ Test `signMessage()` - ECDSA signing
- ✅ Test `verifySignature()` - signature verification
- ✅ Test `getPublicKey()` - derive public from private key
- ✅ Test `hashString()` - SHA256 hashing
- ✅ Test `getFormattedTimestamp()` - timestamp format
- ✅ Test configuration methods (NAG URL/Key)
- ✅ Test error handling

**`__tests__/preprocessing.test.ts`** (312 lines)
- ✅ Test auto-preprocessing in positional param overloads
- ✅ Test auto-preprocessing in request object overloads
- ✅ Test hexFix applied to blockchain/address/ID/nodeID
- ✅ Test stringToHex applied to project/request
- ✅ Test version auto-injection in all methods
- ✅ Test timestamp auto-generation
- ✅ Test voucher code '0x' stripping
- ✅ Test combined preprocessing (multiple steps)
- ✅ Test edge cases (empty strings, just "0x")

**`__tests__/overloads.test.ts`** (380 lines)
- ✅ Test positional param resolution for all 24 methods
- ✅ Test request object resolution for all 24 methods
- ✅ Test TypeScript type inference works correctly
- ✅ Test both calling styles produce identical requests
- ✅ Test preprocessing in both calling styles
- ✅ Test edge cases (optional params, version defaulting)

#### 3. ✅ Jest Configuration Already Correct

`jest.config.cjs` already points to `__tests__/`:

```javascript
testMatch: [
  "**/__tests__/**/*.ts",
  "**/?(*.)+(spec|test).ts"
]
```

#### 4. ✅ Updated package.json Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest __tests__/",
    "test:integration": "jest integration.test.ts",
    "test:e2e": "jest e2e.test.ts",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Next Steps (User Action Required)

Since node/npm are not available in the Claude Code environment, please run these commands locally:

```bash
# Run all tests
npm test

# Run only unit tests
npm run test:unit

# Run with coverage
npm run test:coverage

# Run type check
npm run type-check

# Run linter
npm run lint

# Build the project
npm run build
```

---

## Other TODOs

### Documentation
- [x] AGENTS.md created with architecture documentation
- [x] CHANGELOG.md updated with v1.0.9 changes
- [x] CONTRIBUTING.md updated with new workflow
- [x] README.md updated with dual API examples
- [ ] AGENTS.md - Fix test organization section (DONE above)

### Code Quality
- [ ] Run full test suite after consolidation
- [ ] Run type-check: `npm run type-check`
- [ ] Run linter: `npm run lint`
- [ ] Run build: `npm run build`
- [ ] Verify both CJS and ESM outputs work

### Future Enhancements
- [ ] Add request retry logic with exponential backoff
- [ ] Add response caching with TTL
- [ ] Add WebSocket support for real-time updates
- [ ] Add batch operations for multiple requests
- [ ] Browser compatibility testing
- [ ] Rate limiting protection

---

## Priority Order

1. **High Priority - Fix Test Structure**
   - Consolidate `__tests__/` and `tests/` directories
   - Remove duplicates
   - Update jest config

2. **Medium Priority - Add Missing Tests**
   - Create `helpers.test.ts`
   - Create `preprocessing.test.ts`
   - Create `overloads.test.ts`

3. **Low Priority - Future Enhancements**
   - See list above

---

*Last Updated: 2025-11-15*
