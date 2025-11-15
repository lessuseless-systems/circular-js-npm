# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.9] - 2025-11-15

### Breaking Changes
- **Auto-preprocessing**: All methods now automatically apply `hexFix()` to blockchain/address/ID parameters and `stringToHex()` to string content (project, request). This improves DX by accepting both '0x'-prefixed and non-prefixed values.
- **Version field auto-injected**: The `Version` field is now automatically added to all requests. Remove it from your request objects when using the request object pattern.
- **Voucher code preprocessing**: `getVoucher()` now automatically strips '0x' prefix from codes.

### Added
- **Method overloads for all 24 API methods**: Every API method now supports both positional parameters (matching JavaScript SDK) and request objects (TypeScript-idiomatic)
  - Positional params: `api.checkWallet('blockchain', 'address')`
  - Request object: `api.checkWallet({ Blockchain: '...', Address: '...' })`
- **sendTransaction method**: Added missing `sendTransaction()` method with 9 positional parameters matching JavaScript implementation
- **SendTransactionResponse interface**: Added missing type definition

### Fixed
- **getDomain endpoint**: Fixed incorrect endpoint name from 'GetDomain' to 'ResolveDomain'
- **getBlockCount endpoint**: Fixed incorrect endpoint name from 'GetBlockCount' to 'GetBlockHeight'
- **registerWallet**: Now properly calls `sendTransaction()` with correct parameters
- **Webpack configuration**: Fixed regex patterns (`/\.ts$/` instead of string) and `path.resolve()` calls in both CJS and ESM configs
- **Version property**: Added hardcoded `version = '1.0.8'` property to class

### Improved
- **Developer Experience**: API surface now matches JavaScript implementation exactly while maintaining TypeScript type safety
- **Automatic normalization**: Hex values, timestamps, and string encoding handled automatically
- **Type safety**: Full TypeScript support with method overloads preserving both flexibility and type checking

### Technical Details
- Auto-preprocessing applies to all methods:
  - `hexFix()` for blockchain, address, ID, nodeID parameters
  - `stringToHex()` for project and request parameters in smart contract methods
  - Special handling for voucher codes (strips '0x' prefix)
  - Automatic timestamp generation for contract methods
  - Automatic version injection for all requests

## [1.0.8] - 2025-11-14

### Added
- Initial TypeScript SDK release for Circular Protocol blockchain
- Complete API client with 24 blockchain operations:
  - **Wallet Operations**: checkWallet, getWallet, getWalletBalance, getWalletNonce, getLatestTransactions, registerWallet
  - **Transaction Operations**: sendTransaction, getPendingTransaction, getTransactionbyID, getTransactionbyNode, getTransactionbyAddress, getTransactionbyDate
  - **Block Operations**: getBlock, getBlockRange, getBlockCount, getAnalytics
  - **Asset Operations**: getAssetList, getAsset, getAssetSupply, getVoucher
  - **Smart Contract Operations**: testContract, callContract
  - **Network Operations**: getBlockchains
  - **Domain Operations**: getDomain (resolve domains to wallet addresses)
- Async/await Promise-based API with TypeScript types
- Comprehensive error handling (returns Result codes, does NOT throw)
- HTTP timeout support (configurable, default 30s)
- Custom header support for authentication and API keys
- Configurable NAG endpoint URL
- Full test suite:
  - Unit tests with mocked fetch client
  - Integration tests with local mock server
  - E2E tests (optional, ENV-gated) against live API
- Complete documentation with usage examples
- GitHub Actions CI/CD workflow
- Dual module support: CommonJS and ESM
- Webpack bundling configuration
- Jest testing framework

### Developer Experience
- TypeScript type definitions for all methods and responses
- Backwards compatible with circular-js v1.0.8
- Clean, idiomatic TypeScript code
- Comprehensive inline documentation
- Resource cleanup with dispose() method

### Package Metadata
- Published to npm as `@circular-protocol/sdk`
- MIT License
- Node.js 16+ and browser support
- Zero runtime dependencies
- Type declaration files included

[1.0.8]: https://github.com/lessuseless-systems/circular-ts/releases/tag/v1.0.8