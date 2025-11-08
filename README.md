# Circular Protocol API - TypeScript/JavaScript SDK

[![npm version](https://img.shields.io/npm/v/circular-protocol-api.svg)](https://www.npmjs.com/package/circular-protocol-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)

> Official API specification for Circular Protocol blockchain operations and wallet management

Official TypeScript/JavaScript SDK for interacting with Circular Protocol blockchain networks. Provides a type-safe, promise-based API for wallet operations, transactions, smart contracts, assets, and more.

**Version:** 2.0.0-alpha.1

## Features

- 🔒 **Fully Type-Safe** - Zero `any` types, complete TypeScript definitions
- 📦 **Dual Module Support** - Both CommonJS and ES Modules
- 🚀 **Promise-Based** - Modern async/await API
- 🎯 **24 API Methods** - Complete coverage of Circular Protocol operations
- ✅ **Runtime Validation** - Request/response validation
- 📝 **Auto-Generated** - Generated from canonical Nickel specifications
- 🧪 **Fully Tested** - Comprehensive unit and integration tests

## Installation

```bash
# npm
npm install circular-protocol-api

# yarn
yarn add circular-protocol-api

# pnpm
pnpm add circular-protocol-api
```

## Quick Start

```typescript
import { CircularProtocolAPI } from 'circular-protocol-api';

// Initialize the API client
const api = new CircularProtocolAPI({
  nodeUrl: 'https://your-node-url.com',
  blockchain: 'your-blockchain-id',
});

// Check if a wallet exists
const walletExists = await api.checkWallet({
  Address: '0x1234567890abcdef...',
});

console.log('Wallet exists:', walletExists.Result);

// Get wallet information
const wallet = await api.getWallet({
  Address: '0x1234567890abcdef...',
});

console.log('Wallet balance:', wallet.Response.Balance);
```

## API Reference

Complete API documentation for all 24 methods:

### Wallet Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `checkWallet` | Check if wallet exists | POST |
| `getWallet` | Get wallet information | POST |
| `getLatestTransactions` | Get latest transactions for wallet | POST |
| `getWalletBalance` | Get wallet balance for specific asset | POST |
| `getWalletNonce` | Get wallet nonce | POST |
| `registerWallet` | Register wallet on blockchain | POST |

### Transaction Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `sendTransaction` | Submit transaction to blockchain | POST |
| `getTransactionbyID` | Find transaction by ID | POST |
| `getTransactionbyNode` | Find transactions by node ID | POST |
| `getTransactionbyAddress` | Find transactions by address | POST |
| `getTransactionbyDate` | Find transactions by date range | POST |
| `getPendingTransaction` | Get pending transaction by ID | POST |

### Block Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `getBlock` | Get specific block | POST |
| `getBlockRange` | Get range of blocks | POST |
| `getBlockCount` | Get blockchain height | POST |
| `getAnalytics` | Get blockchain analytics | POST |

### Asset Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `getAssetList` | List all assets on blockchain | POST |
| `getAsset` | Get specific asset information | POST |
| `getAssetSupply` | Get asset supply information | POST |
| `getVoucher` | Retrieve voucher information | POST |

### Smart Contract Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `testContract` | Test smart contract execution | POST |
| `callContract` | Call smart contract function | POST |

### Domain Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `getDomain` | Resolve domain to wallet address | POST |

### Network Operations

| Method | Description | HTTP Method |
|--------|-------------|-------------|
| `getBlockchains` | List available blockchains | POST |

## Usage Examples

### Check Wallet Exists

```typescript
const result = await api.checkWallet({
  Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
});

if (result.Result === 'true') {
  console.log('Wallet exists on the blockchain');
}
```

### Get Wallet Information

```typescript
const wallet = await api.getWallet({
  Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
});

console.log('Balance:', wallet.Response.Balance);
console.log('Nonce:', wallet.Response.Nonce);
console.log('Public Key:', wallet.Response.PublicKey);
```

### Send Transaction

```typescript
const txResult = await api.sendTransaction({
  Transaction: {
    From: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    To: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
    Amount: '1000000',
    Nonce: 1,
    Timestamp: '2024:11:07-15:30:00',
    Signature: '0x...',
  },
});

console.log('Transaction ID:', txResult.Response.TransactionID);
```

### Get Transaction by ID

```typescript
const tx = await api.getTransactionbyID({
  ID: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
});

console.log('Transaction:', tx.Response);
```

### Get Asset Information

```typescript
const asset = await api.getAsset({
  AssetName: 'MyToken',
});

console.log('Asset supply:', asset.Response.TotalSupply);
console.log('Asset decimals:', asset.Response.Decimals);
```

## Configuration Options

```typescript
interface CircularProtocolConfig {
  nodeUrl: string;           // Your Circular Protocol node URL
  blockchain: string;        // Blockchain identifier
  timeout?: number;          // Request timeout in ms (default: 30000)
  retries?: number;          // Retry attempts (default: 3)
  version?: string;          // API version (default: "2.0.0-alpha.1")
}
```

## Error Handling

All API methods throw typed errors for better error handling:

```typescript
try {
  const wallet = await api.getWallet({ Address: 'invalid-address' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Invalid address format:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
```

## TypeScript Support

This package is written in TypeScript and includes complete type definitions:

```typescript
import type {
  WalletInfo,
  Transaction,
  BlockInfo,
  AssetInfo,
} from 'circular-protocol-api';

// All types are fully documented and type-safe
const wallet: WalletInfo = await api.getWallet({ Address: '0x...' });
```

## Requirements

- Node.js >= 16.0.0
- TypeScript >= 5.0 (if using TypeScript)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © Danny De Novi

## Support

- 📧 Email: support@circular.com
- 🐛 Issues: [GitHub Issues](https://github.com/circular-protocol/circular-protocol-ts/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/circular-protocol/circular-protocol-ts/discussions)

## Related Projects

- [circular-protocol-py](https://github.com/circular-protocol/circular-protocol-py) - Python SDK
- [circular-canonical](https://github.com/circular-protocol/circular-canonical) - Canonical API specifications

---

**Generated from canonical Nickel specifications** | [View Source](https://github.com/circular-protocol/circular-canonical)