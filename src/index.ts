/**
 * Circular Protocol TypeScript SDK
 * Generated from Nickel API specification
 * Version: 2.0.0-alpha.1
 */

// ============================================================================
// Request Interfaces
// ============================================================================

export interface checkWalletRequest {
  Address: string;
  Blockchain: string;
  Version: string;
}

export interface getWalletRequest {
  Address: string;
  Blockchain: string;
  Version: string;
}

export interface getLatestTransactionsRequest {
  Address: string;
  Blockchain: string;
  Version: string;
}

export interface getWalletBalanceRequest {
  Address: string;
  Asset: string;
  Blockchain: string;
  Version: string;
}

export interface getWalletNonceRequest {
  Address: string;
  Blockchain: string;
  Version: string;
}

export interface registerWalletRequest {
  Blockchain: string;
  PublicKey: string;
  Version: string;
}

export interface sendTransactionRequest {
  Blockchain: string;
  From: string;
  ID: string;
  Nonce: string;
  Payload: string;
  Signature: string;
  Timestamp: string;
  To: string;
  Type: string;
  Version: string;
}

export interface getPendingTransactionRequest {
  Blockchain: string;
  ID: string;
  Version: string;
}

export interface getTransactionbyIDRequest {
  Blockchain: string;
  End: string;
  ID: string;
  Start: string;
  Version: string;
}

export interface getTransactionbyNodeRequest {
  Blockchain: string;
  End: string;
  NodeID: string;
  Start: string;
  Version: string;
}

export interface getTransactionbyAddressRequest {
  Address: string;
  Blockchain: string;
  End: string;
  Start: string;
  Version: string;
}

export interface getTransactionbyDateRequest {
  Address: string;
  Blockchain: string;
  EndDate: string;
  StartDate: string;
  Version: string;
}

export interface getBlockRequest {
  BlockNumber: string;
  Blockchain: string;
  Version: string;
}

export interface getBlockRangeRequest {
  Blockchain: string;
  End: string;
  Start: string;
  Version: string;
}

export interface getBlockCountRequest {
  Blockchain: string;
  Version: string;
}

export interface getAnalyticsRequest {
  Blockchain: string;
  Version: string;
}

export interface testContractRequest {
  Blockchain: string;
  From: string;
  Project: string;
  Timestamp: string;
  Version: string;
}

export interface callContractRequest {
  Address: string;
  Blockchain: string;
  From: string;
  Request: string;
  Timestamp: string;
  Version: string;
}

export interface getAssetListRequest {
  Blockchain: string;
  Version: string;
}

export interface getAssetRequest {
  AssetName: string;
  Blockchain: string;
  Version: string;
}

export interface getAssetSupplyRequest {
  AssetName: string;
  Blockchain: string;
  Version: string;
}

export interface getVoucherRequest {
  Blockchain: string;
  Code: string;
  Version: string;
}

export interface getDomainRequest {
  Blockchain: string;
  Domain: string;
  Version: string;
}

export interface getBlockchainsRequest {

}

// ============================================================================
// Response Interfaces
// ============================================================================

export interface checkWalletResponse {
  Response: { address: string; exists: boolean };
  Result: number;
}

export interface getWalletResponse {
  Response: { Address: string; Balance: number; Nonce: number };
  Result: number;
}

export interface getLatestTransactionsResponse {
  Response: Array<{ Amount: number; From: string; ID: string; Timestamp: string; To: string }>;
  Result: number;
}

export interface getWalletBalanceResponse {
  Response: { Asset: string; Balance: number };
  Result: number;
}

export interface getWalletNonceResponse {
  Response: { Nonce: number };
  Result: number;
}

export interface registerWalletResponse {
  Response: { Status: string; TransactionID: string };
  Result: number;
}

export interface sendTransactionResponse {
  Response: { Status: string; TransactionID: string };
  Result: number;
}

export interface getPendingTransactionResponse {
  Response: { From: string; ID: string; Status: string; To: string };
  Result: number;
}

export interface getTransactionbyIDResponse {
  Response: { BlockNumber: number; From: string; ID: string; Timestamp: string; To: string };
  Result: number;
}

export interface getTransactionbyNodeResponse {
  Response: Array<{ BlockNumber: number; ID: string; NodeID: string }>;
  Result: number;
}

export interface getTransactionbyAddressResponse {
  Response: Array<{ BlockNumber: number; From: string; ID: string; To: string }>;
  Result: number;
}

export interface getTransactionbyDateResponse {
  Response: Array<{ From: string; ID: string; Timestamp: string; To: string }>;
  Result: number;
}

export interface getBlockResponse {
  Response: { BlockNumber: number; Hash: string; Timestamp: string; Transactions: Array<{  }> };
  Result: number;
}

export interface getBlockRangeResponse {
  Response: Array<{ BlockNumber: number; Timestamp: string; Transactions: Array<{  }> }>;
  Result: number;
}

export interface getBlockCountResponse {
  Response: { BlockCount: number };
  Result: number;
}

export interface getAnalyticsResponse {
  Response: { BlockHeight: number; TotalAssets: number; TotalTransactions: number; TotalWallets: number };
  Result: number;
}

export interface testContractResponse {
  Response: string;
  Result: number;
}

export interface callContractResponse {
  Response: string;
  Result: number;
}

export interface getAssetListResponse {
  Response: Array<{ AssetName: string }>;
  Result: number;
}

export interface getAssetResponse {
  Response: { AssetName: string; Decimals: number; Owner: string; TotalSupply: number };
  Result: number;
}

export interface getAssetSupplyResponse {
  Response: { CirculatingSupply: number; ResidualSupply: number; TotalSupply: number };
  Result: number;
}

export interface getVoucherResponse {
  Response: { Asset: string; Code: string; Redeemed: boolean; Value: number };
  Result: number;
}

export interface getDomainResponse {
  Response: { Address: string; Domain: string };
  Result: number;
}

export interface getBlockchainsResponse {
  Response: Array<{ Active: boolean; ChainID: string; Name: string }>;
  Result: number;
}

// ============================================================================
// Main API Client
// ============================================================================

/**
 * Circular Protocol API Client
 *
 * Provides typed access to all Circular Protocol blockchain API endpoints.
 *
 * @example
 * ```typescript
 * const api = new CircularProtocolAPI('https://api.circular.network');
 *
 * const result = await api.checkWallet({
 *   Blockchain: 'MainNet',
 *   Address: '0x...',
 *   Version: '2.0.0-alpha.1'
 * });
 * ```
 */
export class CircularProtocolAPI {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly version: string;

  /**
   * Create a new Circular Protocol API client
   *
   * @param baseUrl - Base URL of the API server (default: https://api.circular.example)
   * @param apiKey - Optional API key for authentication
   */
  constructor(baseUrl?: string, apiKey?: string) {
    this.baseUrl = baseUrl || 'https://api.circular.example';
    this.apiKey = apiKey || '';
    this.version = '2.0.0-alpha.1';
  }

  /**
   * Make an HTTP request to the API
   * @private
   */
  private async _makeRequest<T>(endpoint: string, data: object): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`API request failed: ${error.message}`);
      }
      throw error;
    }
  }

  // ============================================================================
  // API Methods
  // ============================================================================

  /**
   * Check if wallet exists
   * Checks whether a wallet address exists on the specified blockchain.
Returns existence status and confirms the address format.
   */
  async checkWallet(req: checkWalletRequest): Promise<checkWalletResponse> {
    return this._makeRequest('/checkWallet', req);
  }

  /**
   * Get wallet information
   * Retrieves complete wallet information including balance and nonce.
Returns all wallet properties including current state on the blockchain.
   */
  async getWallet(req: getWalletRequest): Promise<getWalletResponse> {
    return this._makeRequest('/getWallet', req);
  }

  /**
   * Get latest transactions for wallet
   * Retrieves the latest transactions for a wallet address.
Returns an array of transaction objects with details.
   */
  async getLatestTransactions(req: getLatestTransactionsRequest): Promise<getLatestTransactionsResponse> {
    return this._makeRequest('/getLatestTransactions', req);
  }

  /**
   * Get wallet balance for specific asset
   * Retrieves the balance of a specified asset in a wallet.
Returns the balance amount for the requested asset.
   */
  async getWalletBalance(req: getWalletBalanceRequest): Promise<getWalletBalanceResponse> {
    return this._makeRequest('/getWalletBalance', req);
  }

  /**
   * Get wallet nonce
   * Retrieves the nonce (transaction counter) of a wallet.
The nonce is used for transaction ordering and must increment with each transaction.
   */
  async getWalletNonce(req: getWalletNonceRequest): Promise<getWalletNonceResponse> {
    return this._makeRequest('/getWalletNonce', req);
  }

  /**
   * Register wallet on blockchain
   * Registers a wallet on a desired blockchain. The same wallet can be registered
on multiple blockchains. Without registration, the wallet will not be reachable
on the blockchain. This endpoint constructs a transaction of type C_TYPE_REGISTERWALLET.
   */
  async registerWallet(req: registerWalletRequest): Promise<registerWalletResponse> {
    return this._makeRequest('/registerWallet', req);
  }

  /**
   * Submit transaction to blockchain
   * Submits a transaction to the blockchain. Requires a complete signed transaction
including ID, addresses, payload, nonce, and signature.
   */
  async sendTransaction(req: sendTransactionRequest): Promise<sendTransactionResponse> {
    return this._makeRequest('/sendTransaction', req);
  }

  /**
   * Get pending transaction by ID
   * Searches for a transaction by ID among pending transactions.
Returns the transaction if it exists and is still pending.
   */
  async getPendingTransaction(req: getPendingTransactionRequest): Promise<getPendingTransactionResponse> {
    return this._makeRequest('/getPendingTransaction', req);
  }

  /**
   * Find transaction by ID
   * Finds a transaction by ID within a specified block range.
Searches through blocks to locate the transaction.
   */
  async getTransactionbyID(req: getTransactionbyIDRequest): Promise<getTransactionbyIDResponse> {
    return this._makeRequest('/getTransactionbyID', req);
  }

  /**
   * Find transactions by node ID
   * Finds transactions by node ID within a specified block range.
Returns all transactions associated with the node.
   */
  async getTransactionbyNode(req: getTransactionbyNodeRequest): Promise<getTransactionbyNodeResponse> {
    return this._makeRequest('/getTransactionbyNode', req);
  }

  /**
   * Find transactions by address
   * Finds transactions by wallet address within a specified block range.
Returns transactions where the address is sender or recipient.
   */
  async getTransactionbyAddress(req: getTransactionbyAddressRequest): Promise<getTransactionbyAddressResponse> {
    return this._makeRequest('/getTransactionbyAddress', req);
  }

  /**
   * Find transactions by date range
   * Finds transactions by wallet address within a specified date range.
Returns all transactions for the address between the dates.
   */
  async getTransactionbyDate(req: getTransactionbyDateRequest): Promise<getTransactionbyDateResponse> {
    return this._makeRequest('/getTransactionbyDate', req);
  }

  /**
   * Get specific block
   * Retrieves a desired block by block number.
Returns complete block information including transactions and hash.
   */
  async getBlock(req: getBlockRequest): Promise<getBlockResponse> {
    return this._makeRequest('/getBlock', req);
  }

  /**
   * Get range of blocks
   * Retrieves all blocks in a specified range.
If End = 0, then Start is the number of blocks from the last one minted going backward.
   */
  async getBlockRange(req: getBlockRangeRequest): Promise<getBlockRangeResponse> {
    return this._makeRequest('/getBlockRange', req);
  }

  /**
   * Get blockchain height
   * Retrieves the blockchain block height (total number of blocks).
Also known as getBlockHeight in some documentation.
   */
  async getBlockCount(req: getBlockCountRequest): Promise<getBlockCountResponse> {
    return this._makeRequest('/getBlockCount', req);
  }

  /**
   * Get blockchain analytics
   * Retrieves blockchain analytics and statistics.
Returns comprehensive information about the blockchain state.
   */
  async getAnalytics(req: getAnalyticsRequest): Promise<getAnalyticsResponse> {
    return this._makeRequest('/getAnalytics', req);
  }

  /**
   * Test smart contract execution
   * Tests smart contract execution locally without sending a transaction.
Useful for testing contract logic before deploying or executing.
   */
  async testContract(req: testContractRequest): Promise<testContractResponse> {
    return this._makeRequest('/testContract', req);
  }

  /**
   * Call smart contract function
   * Calls a smart contract function on the blockchain.
Executes the specified function with provided parameters.
   */
  async callContract(req: callContractRequest): Promise<callContractResponse> {
    return this._makeRequest('/callContract', req);
  }

  /**
   * List all assets on blockchain
   * Retrieves the list of all assets minted on a specific blockchain.
Returns an array of asset information.
   */
  async getAssetList(req: getAssetListRequest): Promise<getAssetListResponse> {
    return this._makeRequest('/getAssetList', req);
  }

  /**
   * Get specific asset information
   * Retrieves an asset descriptor with complete asset information.
Returns detailed information about the specified asset.
   */
  async getAsset(req: getAssetRequest): Promise<getAssetResponse> {
    return this._makeRequest('/getAsset', req);
  }

  /**
   * Get asset supply information
   * Retrieves the total, circulating, and residual supply of a specified asset.
Returns comprehensive supply metrics.
   */
  async getAssetSupply(req: getAssetSupplyRequest): Promise<getAssetSupplyResponse> {
    return this._makeRequest('/getAssetSupply', req);
  }

  /**
   * Retrieve voucher information
   * Retrieves an existing voucher by code.
Code is automatically stripped of 0x prefix if present.
   */
  async getVoucher(req: getVoucherRequest): Promise<getVoucherResponse> {
    return this._makeRequest('/getVoucher', req);
  }

  /**
   * Resolve domain to wallet address
   * Resolves a domain name to a wallet address.
A single wallet can have multiple domain associations.
Also known as resolveDomain.
   */
  async getDomain(req: getDomainRequest): Promise<getDomainResponse> {
    return this._makeRequest('/getDomain', req);
  }

  /**
   * List available blockchains
   * Retrieves the list of blockchains available in the network.
Returns information about all active and inactive blockchains.
   */
  async getBlockchains(req: getBlockchainsRequest): Promise<getBlockchainsResponse> {
    return this._makeRequest('/getBlockchains', req);
  }
}

// ============================================================================
// Types already exported above via export interface declarations
// ============================================================================
