/**
 * Circular Protocol TypeScript SDK
 * Generated from Nickel API specification
 * Version: 1.0.8
 */

import { ec as EC } from 'elliptic';
import sha256 from 'sha256';

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

export interface AddTransactionRequest {
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
  Result: number;
  Response: { Response: { address: string; exists: boolean }; Result: number };
}

export interface getWalletResponse {
  Result: number;
  Response: { Response: { Address: string; Balance: number; Nonce: number }; Result: number };
}

export interface getLatestTransactionsResponse {
  Result: number;
  Response: { Response: Array<{ Amount: number; From: string; ID: string; Timestamp: string; To: string }>; Result: number };
}

export interface getWalletBalanceResponse {
  Result: number;
  Response: { Response: { Asset: string; Balance: number }; Result: number };
}

export interface getWalletNonceResponse {
  Result: number;
  Response: { Response: { Nonce: number }; Result: number };
}

export interface AddTransactionResponse {
  Result: number;
  Response: { Response: { Status: string; TransactionID: string }; Result: number };
}

export interface SendTransactionResponse {
  Result: number;
  Response: { Response: { Status: string; TransactionID: string }; Result: number };
}

export interface getPendingTransactionResponse {
  Result: number;
  Response: { Response: { From: string; ID: string; Status: string; To: string }; Result: number };
}

export interface getTransactionbyIDResponse {
  Result: number;
  Response: { Response: { BlockNumber: number; From: string; ID: string; Timestamp: string; To: string }; Result: number };
}

export interface getTransactionbyNodeResponse {
  Result: number;
  Response: { Response: Array<{ BlockNumber: number; ID: string; NodeID: string }>; Result: number };
}

export interface getTransactionbyAddressResponse {
  Result: number;
  Response: { Response: Array<{ BlockNumber: number; From: string; ID: string; To: string }>; Result: number };
}

export interface getTransactionbyDateResponse {
  Result: number;
  Response: { Response: Array<{ From: string; ID: string; Timestamp: string; To: string }>; Result: number };
}

export interface getBlockResponse {
  Result: number;
  Response: { Response: { BlockNumber: number; Hash: string; Timestamp: string; Transactions: Array<{  }> }; Result: number };
}

export interface getBlockRangeResponse {
  Result: number;
  Response: { Response: Array<{ BlockNumber: number; Timestamp: string; Transactions: Array<{  }> }>; Result: number };
}

export interface getBlockCountResponse {
  Result: number;
  Response: { Response: { BlockCount: number }; Result: number };
}

export interface getAnalyticsResponse {
  Result: number;
  Response: { Response: { BlockHeight: number; TotalAssets: number; TotalTransactions: number; TotalWallets: number }; Result: number };
}

export interface testContractResponse {
  Result: number;
  Response: { Response: string; Result: number };
}

export interface callContractResponse {
  Result: number;
  Response: { Response: string; Result: number };
}

export interface getAssetListResponse {
  Result: number;
  Response: { Response: Array<{ AssetName: string }>; Result: number };
}

export interface getAssetResponse {
  Result: number;
  Response: { Response: { AssetName: string; Decimals: number; Owner: string; TotalSupply: number }; Result: number };
}

export interface getAssetSupplyResponse {
  Result: number;
  Response: { Response: { CirculatingSupply: number; ResidualSupply: number; TotalSupply: number }; Result: number };
}

export interface getVoucherResponse {
  Result: number;
  Response: { Response: { Asset: string; Code: string; Redeemed: boolean; Value: number }; Result: number };
}

export interface getDomainResponse {
  Result: number;
  Response: { Response: { Address: string; Domain: string }; Result: number };
}

export interface getBlockchainsResponse {
  Result: number;
  Response: { Response: Array<{ Active: boolean; ChainID: string; Name: string }>; Result: number };
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
 *   Version: '1.0.8'
 * });
 * ```
 */
export class CircularProtocolAPI {
  private readonly headers: Record<string, string>;
private nagURL: string = 'https://nag.circularlabs.io/NAG.php?cep=';
private nagKey: string = '';
private lastError: string = '';

  /**
   * Create a new Circular Protocol API client
   *
   * @param nagUrl - Optional NAG endpoint URL (default: https://nag.circularlabs.io/NAG.php?cep=)
   * @param nagKey - Optional NAG API key for authentication
   */
  constructor(nagUrl?: string, nagKey?: string) {
    this.headers = {};
    if (nagUrl) {
      this.setNAGURL(nagUrl);
    }
    if (nagKey) {
      this.setNAGKey(nagKey);
    }
  }

/**
 * Make HTTP request to NAG endpoint
 * @param endpoint - Endpoint name (e.g., 'GetBlockchains')
 * @param data - Request payload
 * @returns Full API response with Result and Response fields
 */
private async _makeRequest(endpoint: string, data: any = {}): Promise<{ Result: number; Response: any }> {
  const url = `${this.nagURL}Circular_${endpoint}_`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...this.headers,
  };

  // Add NAG key if set
  if (this.nagKey) {
    headers['X-NAG-Key'] = this.nagKey;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const result = await response.json() as { Result: number; Response: any };

  // Return full response including non-200 Result codes
  // Let callers handle Result codes appropriately
  return result;
}

  // ============================================================================
  // API Methods
  // ============================================================================

  /**
   * Check if wallet exists
   * Checks whether a wallet address exists on the specified blockchain.
Returns existence status and confirms the address format.
   */
  async checkWallet(blockchain: string, address: string): Promise<checkWalletResponse>;
  async checkWallet(req: checkWalletRequest): Promise<checkWalletResponse>;
  async checkWallet(blockchainOrReq: string | checkWalletRequest, address?: string): Promise<checkWalletResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('CheckWallet', req);
  }

  /**
   * Get wallet information
   * Retrieves complete wallet information including balance and nonce.
Returns all wallet properties including current state on the blockchain.
   */
  async getWallet(blockchain: string, address: string): Promise<getWalletResponse>;
  async getWallet(req: getWalletRequest): Promise<getWalletResponse>;
  async getWallet(blockchainOrReq: string | getWalletRequest, address?: string): Promise<getWalletResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetWallet', req);
  }

  /**
   * Get latest transactions for wallet
   * Retrieves the latest transactions for a wallet address.
Returns an array of transaction objects with details.
   */
  async getLatestTransactions(blockchain: string, address: string): Promise<getLatestTransactionsResponse>;
  async getLatestTransactions(req: getLatestTransactionsRequest): Promise<getLatestTransactionsResponse>;
  async getLatestTransactions(blockchainOrReq: string | getLatestTransactionsRequest, address?: string): Promise<getLatestTransactionsResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetLatestTransactions', req);
  }

  /**
   * Get wallet balance for specific asset
   * Retrieves the balance of a specified asset in a wallet.
Returns the balance amount for the requested asset.
   */
  async getWalletBalance(blockchain: string, address: string, asset: string): Promise<getWalletBalanceResponse>;
  async getWalletBalance(req: getWalletBalanceRequest): Promise<getWalletBalanceResponse>;
  async getWalletBalance(blockchainOrReq: string | getWalletBalanceRequest, address?: string, asset?: string): Promise<getWalletBalanceResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          Asset: asset!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetWalletBalance', req);
  }

  /**
   * Get wallet nonce
   * Retrieves the nonce (transaction counter) of a wallet.
The nonce is used for transaction ordering and must increment with each transaction.
   */
  async getWalletNonce(blockchain: string, address: string): Promise<getWalletNonceResponse>;
  async getWalletNonce(req: getWalletNonceRequest): Promise<getWalletNonceResponse>;
  async getWalletNonce(blockchainOrReq: string | getWalletNonceRequest, address?: string): Promise<getWalletNonceResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetWalletNonce', req);
  }

  /**
   * Submit transaction to blockchain
   * Submits a transaction to the blockchain. Requires a complete signed transaction
including ID, addresses, payload, nonce, and signature.
   */
  async addTransaction(req: AddTransactionRequest): Promise<AddTransactionResponse> {
    return this._makeRequest('AddTransaction', req);
  }

  /**
   * Send transaction to blockchain (Alias for addTransaction with positional params)
   *
   * Submits a transaction to the blockchain using positional parameters.
   * This method matches the JavaScript implementation signature.
   *
   * @param id - Transaction ID (hash)
   * @param from - Sender wallet address
   * @param to - Receiver wallet address
   * @param timestamp - Transaction timestamp (YYYY:MM:DD-hh:mm:ss format)
   * @param type - Transaction type (e.g., 'C_TYPE_REGISTERWALLET')
   * @param payload - Transaction payload (hex encoded)
   * @param nonce - Wallet nonce (string)
   * @param signature - Transaction signature (DER-encoded hex)
   * @param blockchain - Blockchain identifier
   * @returns Promise resolving to transaction submission response
   */
  async sendTransaction(
    id: string,
    from: string,
    to: string,
    timestamp: string,
    type: string,
    payload: string,
    nonce: string,
    signature: string,
    blockchain: string
  ): Promise<SendTransactionResponse> {
    return this.addTransaction({
      ID: id,
      From: from,
      To: to,
      Timestamp: timestamp,
      Type: type,
      Payload: payload,
      Nonce: nonce,
      Signature: signature,
      Blockchain: blockchain,
      Version: this.version
    });
  }

  /**
   * Get pending transaction by ID
   * Searches for a transaction by ID among pending transactions.
Returns the transaction if it exists and is still pending.
   */
  async getPendingTransaction(blockchain: string, txID: string): Promise<getPendingTransactionResponse>;
  async getPendingTransaction(req: getPendingTransactionRequest): Promise<getPendingTransactionResponse>;
  async getPendingTransaction(blockchainOrReq: string | getPendingTransactionRequest, txID?: string): Promise<getPendingTransactionResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          ID: this.hexFix(txID!),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          ID: this.hexFix(blockchainOrReq.ID),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetPendingTransaction', req);
  }

  /**
   * Find transaction by ID
   * Finds a transaction by ID within a specified block range.
Searches through blocks to locate the transaction.
   */
  async getTransactionbyID(blockchain: string, txID: string, start: string, end: string): Promise<getTransactionbyIDResponse>;
  async getTransactionbyID(req: getTransactionbyIDRequest): Promise<getTransactionbyIDResponse>;
  async getTransactionbyID(blockchainOrReq: string | getTransactionbyIDRequest, txID?: string, start?: string, end?: string): Promise<getTransactionbyIDResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          ID: this.hexFix(txID!),
          Start: start!,
          End: end!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          ID: this.hexFix(blockchainOrReq.ID),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetTransactionbyID', req);
  }

  /**
   * Find transactions by node ID
   * Finds transactions by node ID within a specified block range.
Returns all transactions associated with the node.
   */
  async getTransactionbyNode(blockchain: string, nodeID: string, start: string, end: string): Promise<getTransactionbyNodeResponse>;
  async getTransactionbyNode(req: getTransactionbyNodeRequest): Promise<getTransactionbyNodeResponse>;
  async getTransactionbyNode(blockchainOrReq: string | getTransactionbyNodeRequest, nodeID?: string, start?: string, end?: string): Promise<getTransactionbyNodeResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          NodeID: this.hexFix(nodeID!),
          Start: start!,
          End: end!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          NodeID: this.hexFix(blockchainOrReq.NodeID),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetTransactionbyNode', req);
  }

  /**
   * Find transactions by address
   * Finds transactions by wallet address within a specified block range.
Returns transactions where the address is sender or recipient.
   */
  async getTransactionbyAddress(blockchain: string, address: string, start: string, end: string): Promise<getTransactionbyAddressResponse>;
  async getTransactionbyAddress(req: getTransactionbyAddressRequest): Promise<getTransactionbyAddressResponse>;
  async getTransactionbyAddress(blockchainOrReq: string | getTransactionbyAddressRequest, address?: string, start?: string, end?: string): Promise<getTransactionbyAddressResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          Start: start!,
          End: end!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetTransactionbyAddress', req);
  }

  /**
   * Find transactions by date range
   * Finds transactions by wallet address within a specified date range.
Returns all transactions for the address between the dates.
   */
  async getTransactionbyDate(blockchain: string, address: string, startDate: string, endDate: string): Promise<getTransactionbyDateResponse>;
  async getTransactionbyDate(req: getTransactionbyDateRequest): Promise<getTransactionbyDateResponse>;
  async getTransactionbyDate(blockchainOrReq: string | getTransactionbyDateRequest, address?: string, startDate?: string, endDate?: string): Promise<getTransactionbyDateResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Address: this.hexFix(address!),
          StartDate: startDate!,
          EndDate: endDate!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Address: this.hexFix(blockchainOrReq.Address),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetTransactionbyDate', req);
  }

  /**
   * Get specific block
   * Retrieves a desired block by block number.
Returns complete block information including transactions and hash.
   */
  async getBlock(blockchain: string, blockNumber: string): Promise<getBlockResponse>;
  async getBlock(req: getBlockRequest): Promise<getBlockResponse>;
  async getBlock(blockchainOrReq: string | getBlockRequest, blockNumber?: string): Promise<getBlockResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          BlockNumber: blockNumber!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetBlock', req);
  }

  /**
   * Get range of blocks
   * Retrieves all blocks in a specified range.
If End = 0, then Start is the number of blocks from the last one minted going backward.
   */
  async getBlockRange(blockchain: string, start: string, end: string): Promise<getBlockRangeResponse>;
  async getBlockRange(req: getBlockRangeRequest): Promise<getBlockRangeResponse>;
  async getBlockRange(blockchainOrReq: string | getBlockRangeRequest, start?: string, end?: string): Promise<getBlockRangeResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Start: start!,
          End: end!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetBlockRange', req);
  }

  /**
   * Get blockchain height
   * Retrieves the blockchain block height (total number of blocks).
Also known as getBlockHeight in some documentation.
   */
  async getBlockCount(blockchain: string): Promise<getBlockCountResponse>;
  async getBlockCount(req: getBlockCountRequest): Promise<getBlockCountResponse>;
  async getBlockCount(blockchainOrReq: string | getBlockCountRequest): Promise<getBlockCountResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetBlockHeight', req);
  }

  /**
   * Get blockchain analytics
   * Retrieves blockchain analytics and statistics.
Returns comprehensive information about the blockchain state.
   */
  async getAnalytics(blockchain: string): Promise<getAnalyticsResponse>;
  async getAnalytics(req: getAnalyticsRequest): Promise<getAnalyticsResponse>;
  async getAnalytics(blockchainOrReq: string | getAnalyticsRequest): Promise<getAnalyticsResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetAnalytics', req);
  }

  /**
   * Test smart contract execution
   * Tests smart contract execution locally without sending a transaction.
Useful for testing contract logic before deploying or executing.
   */
  async testContract(blockchain: string, from: string, project: string): Promise<testContractResponse>;
  async testContract(req: testContractRequest): Promise<testContractResponse>;
  async testContract(blockchainOrReq: string | testContractRequest, from?: string, project?: string): Promise<testContractResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          From: this.hexFix(from!),
          Project: this.stringToHex(project!),
          Timestamp: this.getFormattedTimestamp(),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          From: this.hexFix(blockchainOrReq.From),
          Project: this.stringToHex(blockchainOrReq.Project),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('TestContract', req);
  }

  /**
   * Call smart contract function
   * Calls a smart contract function on the blockchain.
Executes the specified function with provided parameters.
   */
  async callContract(blockchain: string, from: string, address: string, request: string): Promise<callContractResponse>;
  async callContract(req: callContractRequest): Promise<callContractResponse>;
  async callContract(blockchainOrReq: string | callContractRequest, from?: string, address?: string, request?: string): Promise<callContractResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          From: this.hexFix(from!),
          Address: this.hexFix(address!),
          Request: this.stringToHex(request!),
          Timestamp: this.getFormattedTimestamp(),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          From: this.hexFix(blockchainOrReq.From),
          Address: this.hexFix(blockchainOrReq.Address),
          Request: this.stringToHex(blockchainOrReq.Request),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('CallContract', req);
  }

  /**
   * List all assets on blockchain
   * Retrieves the list of all assets minted on a specific blockchain.
Returns an array of asset information.
   */
  async getAssetList(blockchain: string): Promise<getAssetListResponse>;
  async getAssetList(req: getAssetListRequest): Promise<getAssetListResponse>;
  async getAssetList(blockchainOrReq: string | getAssetListRequest): Promise<getAssetListResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetAssetList', req);
  }

  /**
   * Get specific asset information
   * Retrieves an asset descriptor with complete asset information.
Returns detailed information about the specified asset.
   */
  async getAsset(blockchain: string, assetName: string): Promise<getAssetResponse>;
  async getAsset(req: getAssetRequest): Promise<getAssetResponse>;
  async getAsset(blockchainOrReq: string | getAssetRequest, assetName?: string): Promise<getAssetResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          AssetName: assetName!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetAsset', req);
  }

  /**
   * Get asset supply information
   * Retrieves the total, circulating, and residual supply of a specified asset.
Returns comprehensive supply metrics.
   */
  async getAssetSupply(blockchain: string, assetName: string): Promise<getAssetSupplyResponse>;
  async getAssetSupply(req: getAssetSupplyRequest): Promise<getAssetSupplyResponse>;
  async getAssetSupply(blockchainOrReq: string | getAssetSupplyRequest, assetName?: string): Promise<getAssetSupplyResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          AssetName: assetName!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetAssetSupply', req);
  }

  /**
   * Retrieve voucher information
   * Retrieves an existing voucher by code.
Code is automatically stripped of 0x prefix if present.
   */
  async getVoucher(blockchain: string, code: string): Promise<getVoucherResponse>;
  async getVoucher(req: getVoucherRequest): Promise<getVoucherResponse>;
  async getVoucher(blockchainOrReq: string | getVoucherRequest, code?: string): Promise<getVoucherResponse> {
    // Strip 0x prefix from code if present
    const processedCode = typeof blockchainOrReq === 'string'
      ? (code!.startsWith('0x') ? code!.slice(2) : code!)
      : (blockchainOrReq.Code.startsWith('0x') ? blockchainOrReq.Code.slice(2) : blockchainOrReq.Code);

    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Code: processedCode,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Code: processedCode,
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('GetVoucher', req);
  }

  /**
   * Resolve domain to wallet address
   * Resolves a domain name to a wallet address.
A single wallet can have multiple domain associations.
Also known as resolveDomain.
   */
  async getDomain(blockchain: string, domain: string): Promise<getDomainResponse>;
  async getDomain(req: getDomainRequest): Promise<getDomainResponse>;
  async getDomain(blockchainOrReq: string | getDomainRequest, domain?: string): Promise<getDomainResponse> {
    const req = typeof blockchainOrReq === 'string'
      ? {
          Blockchain: this.hexFix(blockchainOrReq),
          Domain: domain!,
          Version: this.version
        }
      : {
          ...blockchainOrReq,
          Blockchain: this.hexFix(blockchainOrReq.Blockchain),
          Version: blockchainOrReq.Version || this.version
        };
    return this._makeRequest('ResolveDomain', req);
  }

  /**
   * List available blockchains
   * Retrieves the list of blockchains available in the network.
Returns information about all active and inactive blockchains.
   */
  async getBlockchains(): Promise<getBlockchainsResponse>;
  async getBlockchains(req?: getBlockchainsRequest): Promise<getBlockchainsResponse> {
    return this._makeRequest('GetBlockchains', req || {});
  }

  // ============================================================================
  // Convenience Methods
  // ============================================================================
  // These methods wrap underlying API calls to simplify common workflows

  /**
   * Register wallet on blockchain (Convenience Method)
   * Registers a wallet on the specified blockchain by creating and sending
a C_TYPE_REGISTERWALLET transaction. This convenience method handles all
transaction construction internally:

- Derives From/To addresses from public key (sha256)
- Builds Payload: hex(JSON.stringify({Action: "CP_REGISTERWALLET", PublicKey: publicKey}))
- Calculates transaction ID: sha256(blockchain + from + to + payload + nonce + timestamp)
- Sets Nonce to "0" and Signature to "" (empty for registration)
- Calls sendTransaction with constructed parameters

Without registration, the wallet will not be reachable on the blockchain.
The same wallet can be registered on multiple blockchains.
   *
   * This is a convenience method that wraps sendTransaction().
   * It handles transaction construction internally.
   *
   * @param blockchain - Blockchain where the wallet will be registered
   * @param publicKey - Wallet public key (128 hex characters)
   * @returns Promise<SendTransactionResponse>
   */
  async registerWallet(blockchain: string, publicKey: string): Promise<SendTransactionResponse> {
    // Derive addresses from public key
    const from = this.hashString(publicKey);
    const to = from;
    const nonce = '0';
    const type = 'C_TYPE_REGISTERWALLET';

    // Build payload
    const payloadObj = {
      Action: 'CP_REGISTERWALLET',
      PublicKey: publicKey
    };
    const payload = this.stringToHex(JSON.stringify(payloadObj));
    const timestamp = this.getFormattedTimestamp();

    // Calculate transaction ID
    const id = this.hashString(blockchain + from + to + payload + nonce + timestamp);
    const signature = '';

    // Call sendTransaction
    return this.sendTransaction(
      id,
      from,
      to,
      timestamp,
      type,
      payload,
      nonce,
      signature,
      blockchain
    );
  }

  // ============================================================================
  // Helper Methods - Cryptography
  // ============================================================================

/**
 * Sign a message using secp256k1
 * @param message - Message to sign
 * @param privateKey - Private key in hex format (with or without '0x' prefix)
 * @returns DER-encoded signature as hex string
 */
signMessage(message: string, privateKey: string): string {
  const ec = new EC('secp256k1');
  const key = ec.keyFromPrivate(this.hexFix(privateKey), 'hex');
  const msgHash = sha256(message);
  const signature = key.sign(msgHash).toDER('hex');
  return signature;
}

/**
 * Verify a signature
 * @param publicKey - Public key in hex format
 * @param message - Original message that was signed
 * @param signature - DER-encoded signature in hex format
 * @returns true if signature is valid, false otherwise
 */
verifySignature(publicKey: string, message: string, signature: string): boolean {
  try {
    const ec = new EC('secp256k1');
    const key = ec.keyFromPublic(this.hexFix(publicKey), 'hex');
    const msgHash = sha256(message);
    return key.verify(msgHash, signature);
  } catch (error) {
    return false;
  }
}

/**
 * Derive public key from private key
 * @param privateKey - Private key in hex format (with or without '0x' prefix)
 * @returns Public key in uncompressed hex format
 */
getPublicKey(privateKey: string): string {
  const ec = new EC('secp256k1');
  const key = ec.keyFromPrivate(this.hexFix(privateKey), 'hex');
  return key.getPublic('hex');
}

/**
 * Compute SHA256 hash of a string
 * @param str - String to hash
 * @returns SHA256 hash as hex string
 */
hashString(str: string): string {
  return sha256(str);
}

  // ============================================================================
  // Helper Methods - Encoding
  // ============================================================================

/**
 * Normalize hex strings (remove 0x prefix if present)
 * @param hexString - Hex string with or without 0x prefix
 * @returns Normalized hex string without 0x prefix
 */
hexFix(hexString: string): string {
  if (hexString.startsWith('0x') || hexString.startsWith('0X')) {
    return hexString.slice(2);
  }
  return hexString;
}

/**
 * Convert string to hex encoding
 * @param str - String to convert
 * @returns Hex-encoded string
 */
stringToHex(str: string): string {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    hex += charCode.toString(16).padStart(2, '0');
  }
  return hex;
}

/**
 * Convert hex encoding to string
 * @param hex - Hex-encoded string
 * @returns Decoded string
 */
hexToString(hex: string): string {
  const normalized = this.hexFix(hex);
  let str = '';
  for (let i = 0; i < normalized.length; i += 2) {
    const charCode = parseInt(normalized.substr(i, 2), 16);
    str += String.fromCharCode(charCode);
  }
  return str;
}

/**
 * Pad number with leading zero if single digit
 * @param num - Number to pad
 * @returns Padded string
 */
private padNumber(num: number): string {
  return num < 10 ? '0' + num : num.toString();
}

/**
 * Get current timestamp in Circular Protocol format
 * Format: YYYY:MM:DD-hh:mm:ss (UTC)
 * @returns Formatted timestamp string
 */
getFormattedTimestamp(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = this.padNumber(now.getUTCMonth() + 1);
  const day = this.padNumber(now.getUTCDate());
  const hours = this.padNumber(now.getUTCHours());
  const minutes = this.padNumber(now.getUTCMinutes());
  const seconds = this.padNumber(now.getUTCSeconds());

  return `${year}:${month}:${day}-${hours}:${minutes}:${seconds}`;
}

  // ============================================================================
  // Helper Methods - Configuration
  // ============================================================================

/**
 * Set custom NAG endpoint URL
 * @param url - NAG endpoint URL
 */
setNAGURL(url: string): void {
  this.nagURL = url;
}

/**
 * Get current NAG endpoint URL
 * @returns Current NAG URL
 */
getNAGURL(): string {
  return this.nagURL;
}

/**
 * Set NAG API key for authenticated requests
 * @param key - API key
 */
setNAGKey(key: string): void {
  this.nagKey = key;
}

/**
 * Get current NAG API key
 * @returns Current NAG key
 */
getNAGKey(): string {
  return this.nagKey;
}

  // ============================================================================
  // Helper Methods - Advanced
  // ============================================================================

/**
 * Get last error message
 * @returns Last error message
 */
GetError(): string {
  return this.lastError;
}

/**
 * Handle error and store error message
 * @param error - Error object or string
 */
private handleError(error: any): void {
  if (error instanceof Error) {
    this.lastError = error.message;
  } else if (typeof error === 'string') {
    this.lastError = error;
  } else {
    this.lastError = 'Unknown error';
  }
}

/**
 * Poll for transaction confirmation
 * NOTE: Currently disabled - needs schema update to match actual API response
 * @param blockchain - Blockchain network (e.g., 'MainNet', 'testnet')
 * @param txID - Transaction ID to monitor
 * @param start - Start block number for search
 * @param end - End block number for search
 * @param timeoutSec - Maximum time to wait in seconds (default: 120)
 * @param intervalSec - Polling interval in seconds (default: 5)
 * @returns Transaction response when confirmed
 * @throws Error if transaction fails or times out
 */
async getTransactionOutcome(
  blockchain: string,
  txID: string,
  start: string,
  end: string,
  timeoutSec: number = 120,
  intervalSec: number = 5
): Promise<any> {
  const startTime = Date.now();
  const timeoutMs = timeoutSec * 1000;
  const intervalMs = intervalSec * 1000;

  while (true) {
    // Check if timeout exceeded
    const elapsed = Date.now() - startTime;
    if (elapsed >= timeoutMs) {
      const error = `Transaction ${txID} timed out after ${timeoutSec} seconds`;
      this.handleError(error);
      throw new Error(error);
    }

    try {
      // Check transaction status
      const tx = await this.getTransactionbyID({
        Blockchain: blockchain,
        ID: txID,
        Start: start,
        End: end,
        Version: '2.0.0-alpha.1',
      });

      // Check if transaction is confirmed (has BlockNumber)
      if (tx.Response && tx.Response.BlockNumber && tx.Response.BlockNumber > 0) {
        // Transaction confirmed
        return tx;
      }

      // Still pending, wait before next check
      await new Promise(resolve => setTimeout(resolve, intervalMs));

    } catch (error) {
      // If error is not just "pending", rethrow
      if (error instanceof Error && !error.message.includes('pending')) {
        this.handleError(error);
        throw error;
      }

      // Otherwise, wait and retry
      await new Promise(resolve => setTimeout(resolve, intervalMs));
    }
  }
}
}

// ============================================================================
// Types already exported above via export interface declarations
// ============================================================================
