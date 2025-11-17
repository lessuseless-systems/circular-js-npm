/**
 * Circular Protocol TypeScript SDK E2E Tests
 * Generated from Nickel E2E test specifications
 *
 * These tests run against REAL NAG endpoints.
 * They only execute when required environment variables are present.
 *
 * Required ENV vars (read operations):
 * - CIRCULAR_TEST_ADDRESS: Test wallet address (must exist on blockchain)
 *
 * Required ENV vars (write operations):
 * - CIRCULAR_PRIVATE_KEY: Private key for signing transactions (32-byte hex)
 *
 * Optional ENV vars:
 * - CIRCULAR_NAG_URL: NAG endpoint URL (default: https://nag.circularlabs.io/NAG.php?cep=)
 * - CIRCULAR_TEST_BLOCKCHAIN: Blockchain network (default: 0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2)
 * - CIRCULAR_API_KEY: Optional API key
 * - CIRCULAR_E2E_TIMEOUT: Request timeout in ms (default: 30000)
 *
 * Run read-only tests with:
 *   CIRCULAR_TEST_ADDRESS=0x... npm run test:e2e
 *
 * Run write operation tests with:
 *   CIRCULAR_PRIVATE_KEY=... npm run test:e2e
 *   ⚠️  WARNING: This will create real transactions on the blockchain!
 *
 * Or skip if ENV vars not present:
 *   npm run test:e2e  # Will skip all tests
 */

import { CircularProtocolAPI } from '../src/index'

// Check for read-only test environment variables
const READ_ENV_VARS = ['CIRCULAR_TEST_ADDRESS']
const missingReadEnvVars = READ_ENV_VARS.filter(v => !process.env[v])

// Check for write test environment variables
const WRITE_ENV_VARS = ['CIRCULAR_PRIVATE_KEY']
const missingWriteEnvVars = WRITE_ENV_VARS.filter(v => !process.env[v])

const hasReadEnv = missingReadEnvVars.length === 0
const hasWriteEnv = missingWriteEnvVars.length === 0

if (!hasReadEnv && !hasWriteEnv) {
  console.log('⏭️  Skipping all E2E tests - missing required environment variables')
  console.log('\nFor read-only tests:')
  console.log('  CIRCULAR_TEST_ADDRESS=0x... npm run test:e2e')
  console.log('\nFor write operation tests:')
  console.log('  CIRCULAR_PRIVATE_KEY=... npm run test:e2e')
  console.log('  ⚠️  WARNING: Write tests create real blockchain transactions!')
  process.exit(0)
}

describe('E2E Tests - Real NAG Endpoints', () => {
  let api: CircularProtocolAPI

  beforeAll(() => {
    const nagUrl = process.env.CIRCULAR_NAG_URL || 'https://nag.circularlabs.io/NAG.php?cep='
    const apiKey = process.env.CIRCULAR_API_KEY || null

    api = new CircularProtocolAPI(nagUrl, apiKey)

    console.log('🌐 Running E2E tests against:', nagUrl)
    if (hasReadEnv) {
      console.log('📍 Test address:', process.env.CIRCULAR_TEST_ADDRESS)
    }
    if (hasWriteEnv) {
      console.log('🔑 Private key: ***REDACTED***')
    }
    console.log('⛓️  Blockchain:', process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2')
    console.log('')
  })

  // Read-only E2E tests (require CIRCULAR_TEST_ADDRESS)
  if (hasReadEnv) {
    describe('Wallet API E2E Tests (Read-Only)', () => {
  test('E2E: Check if test wallet exists on blockchain', async () => {
    const request = {
      Address: process.env.CIRCULAR_TEST_ADDRESS || '',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.checkWallet(request)

    expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Check if test wallet exists on blockchain')
  }, 30000)

  test('E2E: Get latest transactions for wallet', async () => {
    const request = {
      Address: process.env.CIRCULAR_TEST_ADDRESS || '',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getLatestTransactions(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get latest transactions for wallet')
  }, 30000)

  test('E2E: Retrieve wallet details from blockchain', async () => {
    const request = {
      Address: process.env.CIRCULAR_TEST_ADDRESS || '',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getWallet(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Retrieve wallet details from blockchain')
  }, 30000)

  test('E2E: Get wallet balance from blockchain', async () => {
    const request = {
      Address: process.env.CIRCULAR_TEST_ADDRESS || '',
      Asset: 'CIRX',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getWalletBalance(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get wallet balance from blockchain')
  }, 30000)

  test('E2E: Get wallet nonce from blockchain', async () => {
    const request = {
      Address: process.env.CIRCULAR_TEST_ADDRESS || '',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getWalletNonce(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get wallet nonce from blockchain')
  }, 30000)
    })

    describe('Transaction API E2E Tests (Read-Only)', () => {
  test('E2E: Get pending transactions', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getPendingTransaction(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get pending transactions')
  }, 30000)

  test('E2E: Get transactions by wallet address', async () => {
    const request = {
      Address: process.env.CIRCULAR_TEST_ADDRESS || '',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getTransactionbyAddress(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get transactions by wallet address')
  }, 30000)

  test('E2E: Get transactions by date range', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      EndDate: '2024-12-31',
      StartDate: '2024-01-01',
      Version: '1.0.8'
    }

    const result = await api.getTransactionbyDate(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get transactions by date range')
  }, 30000)

  test('E2E: Get transaction by transaction ID', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      TransactionID: '0x0000000000000000000000000000000000000000000000000000000000000000',
      Version: '1.0.8'
    }

    const result = await api.getTransactionbyID(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get transaction by transaction ID')
  }, 30000)

  test('E2E: Get transactions by node ID', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      NodeID: 'node-0001',
      Version: '1.0.8'
    }

    const result = await api.getTransactionbyNode(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get transactions by node ID')
  }, 30000)
    })

    describe('Asset API E2E Tests (Read-Only)', () => {
  test('E2E: Get specific asset information', async () => {
    const request = {
      AssetName: 'CIRX',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getAsset(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get specific asset information')
  }, 30000)

  test('E2E: Get list of all assets on blockchain', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getAssetList(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get list of all assets on blockchain')
  }, 30000)

  test('E2E: Get asset supply information', async () => {
    const request = {
      AssetName: 'CIRX',
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getAssetSupply(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get asset supply information')
  }, 30000)

  test('E2E: Get voucher details', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8',
      VoucherID: 'test-voucher-id'
    }

    const result = await api.getVoucher(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get voucher details')
  }, 30000)
    })

    describe('Network API E2E Tests (Read-Only)', () => {
  test('E2E: Retrieve list of available blockchains', async () => {
    const request = {
      Version: '1.0.8'
    }

    const result = await api.getBlockchains(request)

expect(result.Result).toBe(200)
expect(Array.isArray(result.Response.Blockchains)).toBe(true)

    console.log('  ✅ E2E: Retrieve list of available blockchains')
  }, 30000)
    })

    describe('Block API E2E Tests (Read-Only)', () => {
  test('E2E: Get blockchain analytics and statistics', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getAnalytics(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get blockchain analytics and statistics')
  }, 30000)

  test('E2E: Retrieve specific block by number', async () => {
    const request = {
      BlockNumber: 1,
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getBlock(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Retrieve specific block by number')
  }, 30000)

  test('E2E: Get current block count from blockchain', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Version: '1.0.8'
    }

    const result = await api.getBlockCount(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Get current block count from blockchain')
  }, 30000)

  test('E2E: Retrieve range of blocks', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      EndBlock: 10,
      StartBlock: 1,
      Version: '1.0.8'
    }

    const result = await api.getBlockRange(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Retrieve range of blocks')
  }, 30000)
    })

    describe('Domain API E2E Tests (Read-Only)', () => {
  test('E2E: Resolve domain name to wallet address', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      Domain: 'test.circular',
      Version: '1.0.8'
    }

    const result = await api.getDomain(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Resolve domain name to wallet address')
  }, 30000)
    })

    describe('Contract API E2E Tests (Read-Only)', () => {
  test('E2E: Test smart contract execution (simulation)', async () => {
    const request = {
      Blockchain: process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2',
      ContractAddress: '0x0000000000000000000000000000000000000000000000000000000000000000',
      Method: 'testMethod',
      Parameters: '{}',
      Version: '1.0.8'
    }

    const result = await api.testContract(request)

expect(result.Result).toBeDefined()

    console.log('  ✅ E2E: Test smart contract execution (simulation)')
  }, 30000)
    })
  } else {
    describe('Read-Only E2E Tests', () => {
      test.skip('Skipped - CIRCULAR_TEST_ADDRESS not set', () => {})
    })
  }

  // Write operation E2E tests (require CIRCULAR_PRIVATE_KEY)
  if (hasWriteEnv) {
    describe('⚠️  Write Operations E2E Tests (LIVE BLOCKCHAIN)', () => {
      console.warn('⚠️  WARNING: Write operation tests will create REAL transactions on the blockchain!')
      console.warn('⚠️  Ensure you are using a test blockchain and test funds.')

test('E2E Write: Register a new wallet on the blockchain', async () => {
  // Derive address and public key from private key
  const privateKey = process.env.CIRCULAR_PRIVATE_KEY!
  const publicKey = api.getPublicKey(privateKey)
  const address = api.hashString(publicKey)

  // Format timestamp
  const now = new Date()
  const timestamp = now.toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/-/g, ':').substring(0, 19)

  const blockchain = process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2'

      // Build registerWallet request
      const accountName = `E2E-Test-Wallet-${Date.now()}`
      const signaturePayload = blockchain + accountName + publicKey
      const signature = api.signMessage(signaturePayload, privateKey)
  
      const request = {
        Blockchain: blockchain,
        AccountName: accountName,
        PublicKey: publicKey,
        Signature: signature,
        Version: '1.0.8'
      }
  
      console.log('  📝 Registering wallet:', accountName)
      const result = await api.registerWallet(request)
  
  expect(result.Result).toBe(200)
  expect(result.Response.WalletAddress).toBeDefined()
  expect(typeof result.Response.WalletAddress === 'string' && /^(0x)?[0-9a-fA-F]+$/.test(result.Response.WalletAddress)).toBe(true)
  expect(result.Response.TransactionID).toBeDefined()
  
      console.log('  ✅ Wallet registered successfully')
      console.log('  📍 Wallet Address:', result.Response?.WalletAddress)
      console.log('  🔗 Transaction ID:', result.Response?.TransactionID)
}, 60000)

test('E2E Write: Certify data on the blockchain (C_TYPE_CERTIFICATE)', async () => {
  // Derive address and public key from private key
  const privateKey = process.env.CIRCULAR_PRIVATE_KEY!
  const publicKey = api.getPublicKey(privateKey)
  const from = api.hashString(publicKey)
  const to = from

  // Get properly formatted timestamp
  const timestamp = api.getFormattedTimestamp()

  // Normalize blockchain (remove 0x prefix if present)
  let blockchain = process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2'
  blockchain = api.hexFix(blockchain)

  // Build certificate transaction
  const type = 'C_TYPE_CERTIFICATE'
  const data = `E2E Test Data Certification ${Date.now()}`

  // Build payload with Action and Data (like Python implementation)
  const payloadObj = {
    Action: 'CP_CERTIFICATE',
    Data: data
  }
  const payload = api.stringToHex(JSON.stringify(payloadObj))

  // Get wallet nonce and increment it
  let nonce = '0'
  try {
    const nonceResponse = await api.getWalletNonce(blockchain, from)
    if (nonceResponse.Result === 200) {
      const currentNonce = parseInt(nonceResponse.Response.Nonce)
      nonce = String(currentNonce + 1)
    }
  } catch (error) {
    // Wallet might not be registered, use nonce 0
  }

  // Calculate transaction ID from blockchain + from + to + payload + nonce + timestamp
  const id = api.hashString(blockchain + from + to + payload + nonce + timestamp)

  // Sign the transaction ID
  const signature = api.signMessage(id, privateKey)

  console.log('  📝 Certifying data on blockchain...')

  const result = await api.sendTransaction(
    id,
    from,
    to,
    timestamp,
    type,
    payload,
    nonce,
    signature,
    blockchain
  )

  expect(result.Result).toBe(200)
  // The Response might contain TxID or TransactionID
  const txId = result.Response.TxID || result.Response.TransactionID
  expect(txId).toBeDefined()
  expect(typeof txId === 'string' && /^(0x)?[0-9a-fA-F]+$/.test(txId)).toBe(true)

  console.log('  ✅ Data certified successfully')
  console.log('  🔗 Transaction ID:', txId)
  console.log('  📄 Certified data:', data)
}, 60000)

test('E2E Write: Call smart contract function on blockchain', async () => {
  // Derive address and public key from private key
  const privateKey = process.env.CIRCULAR_PRIVATE_KEY!
  const publicKey = api.getPublicKey(privateKey)
  const address = api.hashString(publicKey)

  // Format timestamp
  const now = new Date()
  const timestamp = now.toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/-/g, ':').substring(0, 19)

  const blockchain = process.env.CIRCULAR_TEST_BLOCKCHAIN || '0x8a20baa40c45dc5055aeb26197c203e576ef389d9acb171bd62da11dc5ad72b2'

      // Build callContract request
      const request = {
        Blockchain: blockchain,
        From: address,
        Address: '0x0000000000000000000000000000000000000000000000000000000000000000',
        Request: '0x74657374',
        Timestamp: timestamp,
        Version: '1.0.8'
      }
  
      console.log('  📝 Calling smart contract function...')
      const result = await api.callContract(request)
  
  expect(result.Result).toBeDefined()
  
      console.log('  ✅ Contract call executed (may have failed if contract does not exist)')
      console.log('  📊 Result:', result.Result)
}, 60000)
    })
  } else {
    describe('Write Operations E2E Tests', () => {
      test.skip('Skipped - CIRCULAR_PRIVATE_KEY not set (write operations require private key)', () => {})
    })
  }
})