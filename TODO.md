# TypeScript SDK - TODO

## Missing Utility Methods

Add the following utility/configuration methods to match Python and Dart SDKs:

### Configuration Methods
- [x] `setNagUrl(url: string): void` - Update NAG endpoint URL at runtime
- [x] `getNagUrl(): string` - Get current NAG endpoint URL
- [x] `setNagKey(key: string): void` - Update NAG API key at runtime
- [x] `getNagKey(): string` - Get current NAG API key
- [x] `setHeader(key: string, value: string): void` - Set custom HTTP headers
- [x] `getVersion(): string` - Get SDK version

### Error Handling Methods
- [x] `getError(): string` - Get last error message from SDK

### Lifecycle Methods
- [x] `dispose(): void` - Clean up resources (HTTP client, etc.)

### Additional Utility Methods
- [x] `setNode(address: string): void` - Set primary node address for querying blockchain
- [x] `handleError(result: object): void` - Handle API error responses

## Notes
- TypeScript now has 49 public methods (aligned with other SDKs)
- Python has 42 public methods
- Dart has 46 public methods
- All utility methods have been successfully implemented with comprehensive JSDoc documentation

## Completed - 2025-11-16
All missing utility methods have been implemented and fully documented.
