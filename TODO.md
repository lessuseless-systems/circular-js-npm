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

### Recommended Actions

#### 1. Consolidate Test Directories
**Option A: Use `__tests__/` (Jest convention)**
```bash
# Move tests from tests/ to __tests__/
mv tests/integration.test.ts __tests__/
mv tests/e2e.test.ts __tests__/
# Remove duplicate
rm tests/index.test.ts
# Keep or remove legacy JS test
rm tests/circularProtocolAPI.test.js  # or keep for reference
```

**Option B: Use `tests/` (explicit)**
```bash
# Move from __tests__/ to tests/
mv __tests__/index.test.ts tests/
rmdir __tests__/
```

#### 2. Create Missing Test Files

After consolidation, create:

**`__tests__/helpers.test.ts`** (or `tests/helpers.test.ts`)
- Test `hexFix()` - strip 0x prefix
- Test `stringToHex()` - UTF-8 to hex encoding
- Test `hexToString()` - hex to UTF-8 decoding
- Test `signMessage()` - ECDSA signing
- Test `verifySignature()` - signature verification
- Test `getPublicKey()` - derive public from private key
- Test `hashString()` - SHA256 hashing
- Test `getFormattedTimestamp()` - timestamp format

**`__tests__/preprocessing.test.ts`**
- Test auto-preprocessing in positional param overloads
- Test auto-preprocessing in request object overloads
- Test hexFix applied to blockchain/address/ID
- Test stringToHex applied to project/request
- Test version auto-injection
- Test voucher code '0x' stripping

**`__tests__/overloads.test.ts`**
- Test positional param resolution for all 24 methods
- Test request object resolution for all 24 methods
- Test TypeScript type inference works correctly
- Test both calling styles return same results

#### 3. Update Jest Configuration

Ensure `jest.config.cjs` points to correct test directory:

```javascript
module.exports = {
  testMatch: [
    '**/__tests__/**/*.test.ts',  // or
    '**/tests/**/*.test.ts'        // depending on choice
  ],
  // ...
};
```

#### 4. Update package.json Scripts

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
