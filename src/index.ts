/**
 * Circular Protocol TypeScript SDK
 * Generated from Nickel API specification
 * Version: 1.0.9
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
 *   Version: '1.0.9'
 * });
 * ```
 */
export class CircularProtocolAPI {
  private readonly headers: Record<string, string>;
  private readonly version: string = '1.0.9';
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
   * Check if wallet exists on the blockchain
   *
   * Verifies whether a wallet address exists on the specified blockchain.
   * Returns existence status and confirms the address format is valid.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to check. Auto-strips '0x' prefix.
   * @returns Promise resolving to wallet existence status
   *
   * @example
   * // Positional parameters (recommended)
   * const exists = await api.checkWallet('MainNet', '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
   *
   * @example
   * // Request object style
   * const exists = await api.checkWallet({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
   * });
   *
   * @see {@link getWallet} for retrieving complete wallet information
   * @see {@link getWalletBalance} for checking specific asset balance
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
   * Get complete wallet information
   *
   * Retrieves comprehensive wallet information including balance, nonce, and state.
   * Returns all wallet properties and current status on the blockchain.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to query. Auto-strips '0x' prefix.
   * @returns Promise resolving to complete wallet information
   *
   * @example
   * // Positional parameters (recommended)
   * const wallet = await api.getWallet('MainNet', '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
   * console.log(wallet.Response.Balance, wallet.Response.Nonce);
   *
   * @example
   * // Request object style
   * const wallet = await api.getWallet({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
   * });
   *
   * @see {@link checkWallet} for checking if wallet exists
   * @see {@link getWalletBalance} for checking specific asset balance
   * @see {@link getWalletNonce} for retrieving only the nonce
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
   * Get latest transactions for a wallet
   *
   * Retrieves the most recent transactions associated with a wallet address.
   * Returns an array of transaction objects with complete details.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to query. Auto-strips '0x' prefix.
   * @returns Promise resolving to array of latest transactions
   *
   * @example
   * // Positional parameters (recommended)
   * const txs = await api.getLatestTransactions('MainNet', '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
   * txs.Response.forEach(tx => console.log(tx.ID, tx.Type));
   *
   * @example
   * // Request object style
   * const txs = await api.getLatestTransactions({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
   * });
   *
   * @see {@link getTransactionbyID} for getting a specific transaction
   * @see {@link getTransactionbyAddress} for querying transactions in a range
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
   * Get wallet balance for a specific asset
   *
   * Retrieves the balance of a specified asset in a wallet.
   * Returns the current balance amount for the requested asset.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to query. Auto-strips '0x' prefix.
   * @param asset - Asset symbol to check (e.g., 'CIRX', 'BTC', 'ETH')
   * @returns Promise resolving to asset balance information
   *
   * @example
   * // Positional parameters (recommended)
   * const balance = await api.getWalletBalance('MainNet', '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', 'CIRX');
   * console.log(`Balance: ${balance.Response.Balance} CIRX`);
   *
   * @example
   * // Request object style
   * const balance = await api.getWalletBalance({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   Asset: 'CIRX'
   * });
   *
   * @see {@link getWallet} for complete wallet information
   * @see {@link getAsset} for asset details
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
   * Get wallet nonce (transaction counter)
   *
   * Retrieves the nonce (transaction counter) of a wallet.
   * The nonce is used for transaction ordering and must increment with each transaction.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to query. Auto-strips '0x' prefix.
   * @returns Promise resolving to wallet nonce
   *
   * @example
   * // Positional parameters (recommended)
   * const result = await api.getWalletNonce('MainNet', '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
   * console.log(`Current nonce: ${result.Response.Nonce}`);
   *
   * @example
   * // Request object style
   * const result = await api.getWalletNonce({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
   * });
   *
   * @see {@link getWallet} for complete wallet information including nonce
   * @see {@link sendTransaction} for submitting transactions with nonce
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
   *
   * Submits a complete signed transaction to the blockchain.
   * Requires all transaction fields including ID, addresses, payload, nonce, and signature.
   *
   * @param req - Complete transaction request object
   * @returns Promise resolving to transaction submission response
   *
   * @example
   * const result = await api.addTransaction({
   *   ID: transactionHash,
   *   From: senderAddress,
   *   To: receiverAddress,
   *   Timestamp: '2025:11:15-12:30:00',
   *   Type: 'C_TYPE_TRANSACTION',
   *   Payload: payloadHex,
   *   Nonce: '0',
   *   Signature: signatureHex,
   *   Blockchain: 'MainNet',
   *   Version: '1.0.9'
   * });
   *
   * @see {@link sendTransaction} for convenient positional parameter version
   * @see {@link getPendingTransaction} for checking transaction status
   * @see {@link registerWallet} for wallet registration transactions
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
   *
   * Searches for a transaction by ID among pending (unconfirmed) transactions.
   * Returns the transaction if it exists and is still pending confirmation.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param txID - Transaction ID (hash) to search for. Auto-strips '0x' prefix.
   * @returns Promise resolving to pending transaction details
   *
   * @example
   * // Positional parameters (recommended)
   * const tx = await api.getPendingTransaction('MainNet', '0xabc123...');
   * console.log(tx.Response.Status);
   *
   * @example
   * // Request object style
   * const tx = await api.getPendingTransaction({
   *   Blockchain: 'MainNet',
   *   ID: '0xabc123...'
   * });
   *
   * @see {@link getTransactionbyID} for searching confirmed transactions
   * @see {@link sendTransaction} for submitting transactions
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
   * Query transaction by ID within block range
   *
   * Finds a confirmed transaction by its ID within a specified block range.
   * Searches through blocks from start to end to locate the transaction.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param txID - Transaction ID (hash) to search for. Auto-strips '0x' prefix.
   * @param start - Starting block number for search range
   * @param end - Ending block number for search range
   * @returns Promise resolving to transaction details including block number and timestamp
   *
   * @example
   * // Positional parameters (recommended)
   * const tx = await api.getTransactionbyID('MainNet', '0xabc123...', '1000', '2000');
   * console.log(tx.Response.BlockNumber, tx.Response.Timestamp);
   *
   * @example
   * // Request object style
   * const tx = await api.getTransactionbyID({
   *   Blockchain: 'MainNet',
   *   ID: '0xabc123...',
   *   Start: '1000',
   *   End: '2000'
   * });
   *
   * @see {@link getPendingTransaction} for searching pending (unconfirmed) transactions
   * @see {@link getTransactionbyAddress} for finding all transactions by address
   * @see {@link getLatestTransactions} for recent wallet transactions
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
   * Get transactions by node ID within block range
   *
   * Retrieves all transactions associated with a specific node ID within a block range.
   * Returns an array of transactions that were processed or validated by the specified node.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param nodeID - Node identifier to search for. Auto-strips '0x' prefix.
   * @param start - Starting block number for search range
   * @param end - Ending block number for search range
   * @returns Promise resolving to array of transactions associated with the node
   *
   * @example
   * // Positional parameters (recommended)
   * const txs = await api.getTransactionbyNode('MainNet', '0xnode123...', '1000', '2000');
   * txs.Response.forEach(tx => console.log(tx.ID, tx.BlockNumber));
   *
   * @example
   * // Request object style
   * const txs = await api.getTransactionbyNode({
   *   Blockchain: 'MainNet',
   *   NodeID: '0xnode123...',
   *   Start: '1000',
   *   End: '2000'
   * });
   *
   * @see {@link getTransactionbyID} for finding a specific transaction
   * @see {@link getTransactionbyAddress} for finding transactions by wallet address
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
   * Get transactions for address within block range
   *
   * Retrieves all transactions involving a wallet address within a specified block range.
   * Returns transactions where the address is either sender or recipient.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to search for. Auto-strips '0x' prefix.
   * @param start - Starting block number for search range
   * @param end - Ending block number for search range
   * @returns Promise resolving to array of transactions involving the address
   *
   * @example
   * // Positional parameters (recommended)
   * const txs = await api.getTransactionbyAddress('MainNet', '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', '1000', '2000');
   * txs.Response.forEach(tx => console.log(tx.From, tx.To, tx.BlockNumber));
   *
   * @example
   * // Request object style
   * const txs = await api.getTransactionbyAddress({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   Start: '1000',
   *   End: '2000'
   * });
   *
   * @see {@link getLatestTransactions} for recent transactions without specifying range
   * @see {@link getTransactionbyDate} for searching by date range instead of block range
   * @see {@link getTransactionbyID} for finding a specific transaction
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
   * Get transactions for address within date range
   *
   * Retrieves all transactions involving a wallet address within a specified date/time range.
   * Returns transactions where the address is either sender or recipient, filtered by timestamp.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param address - Wallet address to search for. Auto-strips '0x' prefix.
   * @param startDate - Start date/time in format YYYY:MM:DD-hh:mm:ss (e.g., '2025:01:15-10:30:00')
   * @param endDate - End date/time in format YYYY:MM:DD-hh:mm:ss (e.g., '2025:01:15-18:45:00')
   * @returns Promise resolving to array of transactions within the date range
   *
   * @example
   * // Positional parameters (recommended)
   * const txs = await api.getTransactionbyDate(
   *   'MainNet',
   *   '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   '2025:01:15-00:00:00',
   *   '2025:01:15-23:59:59'
   * );
   * txs.Response.forEach(tx => console.log(tx.ID, tx.Timestamp));
   *
   * @example
   * // Request object style
   * const txs = await api.getTransactionbyDate({
   *   Blockchain: 'MainNet',
   *   Address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   StartDate: '2025:01:15-00:00:00',
   *   EndDate: '2025:01:15-23:59:59'
   * });
   *
   * @see {@link getTransactionbyAddress} for searching by block range instead of date range
   * @see {@link getLatestTransactions} for recent transactions without date filtering
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
   * Get block by block number
   *
   * Retrieves complete information for a specific block by its block number.
   * Returns block details including hash, timestamp, and all contained transactions.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param blockNumber - Block number/ID to retrieve
   * @returns Promise resolving to complete block information
   *
   * @example
   * // Positional parameters (recommended)
   * const block = await api.getBlock('MainNet', '12345');
   * console.log(block.Response.Hash, block.Response.Timestamp);
   * console.log(`Transactions: ${block.Response.Transactions.length}`);
   *
   * @example
   * // Request object style
   * const block = await api.getBlock({
   *   Blockchain: 'MainNet',
   *   BlockNumber: '12345'
   * });
   *
   * @see {@link getBlockRange} for retrieving multiple blocks at once
   * @see {@link getBlockCount} for getting the current block height
   * @see {@link getTransactionbyID} for retrieving specific transactions
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
   * Get multiple blocks in a range
   *
   * Retrieves all blocks within a specified range of block numbers.
   * Special case: If End = '0', Start represents the number of blocks to fetch backward from the latest block.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param start - Starting block number (or count from latest if end is '0')
   * @param end - Ending block number (use '0' to fetch last N blocks, where N = start)
   * @returns Promise resolving to array of blocks with their transactions
   *
   * @example
   * // Positional parameters (recommended) - Get blocks 1000 through 1100
   * const blocks = await api.getBlockRange('MainNet', '1000', '1100');
   * blocks.Response.forEach(block => console.log(block.BlockNumber, block.Timestamp));
   *
   * @example
   * // Get last 50 blocks (End = 0)
   * const recentBlocks = await api.getBlockRange('MainNet', '50', '0');
   *
   * @example
   * // Request object style
   * const blocks = await api.getBlockRange({
   *   Blockchain: 'MainNet',
   *   Start: '1000',
   *   End: '1100'
   * });
   *
   * @see {@link getBlock} for retrieving a single block
   * @see {@link getBlockCount} for getting the current block height
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
   * Get current block height/count
   *
   * Retrieves the current block height (total number of blocks) on the blockchain.
   * Returns the most recent block number, useful for determining the blockchain's current state.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @returns Promise resolving to current block count
   *
   * @example
   * // Positional parameters (recommended)
   * const result = await api.getBlockCount('MainNet');
   * console.log(`Current block height: ${result.Response.BlockCount}`);
   *
   * @example
   * // Request object style
   * const result = await api.getBlockCount({
   *   Blockchain: 'MainNet'
   * });
   *
   * @see {@link getBlock} for retrieving a specific block
   * @see {@link getBlockRange} for retrieving multiple blocks
   * @see {@link getAnalytics} for comprehensive blockchain statistics
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
   * Get blockchain analytics and statistics
   *
   * Retrieves comprehensive analytics and statistics about the blockchain.
   * Returns key metrics including block height, total transactions, wallets, and assets.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @returns Promise resolving to blockchain analytics including BlockHeight, TotalTransactions, TotalWallets, TotalAssets
   *
   * @example
   * // Positional parameters (recommended)
   * const stats = await api.getAnalytics('MainNet');
   * console.log(`Block Height: ${stats.Response.BlockHeight}`);
   * console.log(`Total Wallets: ${stats.Response.TotalWallets}`);
   * console.log(`Total Assets: ${stats.Response.TotalAssets}`);
   *
   * @example
   * // Request object style
   * const stats = await api.getAnalytics({
   *   Blockchain: 'MainNet'
   * });
   *
   * @see {@link getBlockCount} for getting only the current block height
   * @see {@link getAssetList} for listing all assets
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
   * Test smart contract execution (dry run)
   *
   * Tests smart contract execution locally without sending a transaction to the blockchain.
   * Useful for validating contract logic and parameters before actual deployment or execution.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param from - Wallet address executing the test. Auto-strips '0x' prefix.
   * @param project - Smart contract code/project to test (auto-converted to hex via stringToHex)
   * @returns Promise resolving to test execution result
   *
   * @example
   * // Positional parameters (recommended)
   * const result = await api.testContract(
   *   'MainNet',
   *   '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   'contract code here'
   * );
   * console.log(result.Response);
   *
   * @example
   * // Request object style
   * const result = await api.testContract({
   *   Blockchain: 'MainNet',
   *   From: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   Project: 'contract code here'
   * });
   *
   * @see {@link callContract} for executing deployed contracts
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
   * Call deployed smart contract function
   *
   * Executes a function on a deployed smart contract at a specified address.
   * Sends a request to invoke contract logic and returns the execution result.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param from - Wallet address calling the contract. Auto-strips '0x' prefix.
   * @param address - Contract address to call. Auto-strips '0x' prefix.
   * @param request - Contract function request/parameters (auto-converted to hex via stringToHex)
   * @returns Promise resolving to contract execution result
   *
   * @example
   * // Positional parameters (recommended)
   * const result = await api.callContract(
   *   'MainNet',
   *   '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   '0xContractAddress123...',
   *   'functionName:param1,param2'
   * );
   * console.log(result.Response);
   *
   * @example
   * // Request object style
   * const result = await api.callContract({
   *   Blockchain: 'MainNet',
   *   From: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
   *   Address: '0xContractAddress123...',
   *   Request: 'functionName:param1,param2'
   * });
   *
   * @see {@link testContract} for testing contract code before deployment
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
   * Get list of all assets on blockchain
   *
   * Retrieves a complete list of all assets that have been minted on the specified blockchain.
   * Returns an array of asset names available for querying or trading.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @returns Promise resolving to array of asset names
   *
   * @example
   * // Positional parameters (recommended)
   * const assets = await api.getAssetList('MainNet');
   * assets.Response.forEach(asset => console.log(asset.AssetName));
   *
   * @example
   * // Request object style
   * const assets = await api.getAssetList({
   *   Blockchain: 'MainNet'
   * });
   *
   * @see {@link getAsset} for retrieving detailed information about a specific asset
   * @see {@link getAssetSupply} for checking asset supply metrics
   * @see {@link getAnalytics} for total asset count
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
   * Get detailed asset information
   *
   * Retrieves complete information about a specific asset by its symbol/name.
   * Returns asset metadata including owner, decimals, and total supply.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param assetName - Asset symbol/name to query (e.g., 'CIRX', 'BTC', 'ETH')
   * @returns Promise resolving to asset details including AssetName, Owner, Decimals, TotalSupply
   *
   * @example
   * // Positional parameters (recommended)
   * const asset = await api.getAsset('MainNet', 'CIRX');
   * console.log(`Owner: ${asset.Response.Owner}`);
   * console.log(`Decimals: ${asset.Response.Decimals}`);
   * console.log(`Total Supply: ${asset.Response.TotalSupply}`);
   *
   * @example
   * // Request object style
   * const asset = await api.getAsset({
   *   Blockchain: 'MainNet',
   *   AssetName: 'CIRX'
   * });
   *
   * @see {@link getAssetList} for listing all available assets
   * @see {@link getAssetSupply} for detailed supply metrics
   * @see {@link getWalletBalance} for checking wallet balance of this asset
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
   * Get asset supply metrics
   *
   * Retrieves comprehensive supply information for a specific asset.
   * Returns total supply, circulating supply, and residual (uncirculated) supply.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param assetName - Asset symbol/name to query (e.g., 'CIRX', 'BTC', 'ETH')
   * @returns Promise resolving to supply metrics including TotalSupply, CirculatingSupply, ResidualSupply
   *
   * @example
   * // Positional parameters (recommended)
   * const supply = await api.getAssetSupply('MainNet', 'CIRX');
   * console.log(`Total: ${supply.Response.TotalSupply}`);
   * console.log(`Circulating: ${supply.Response.CirculatingSupply}`);
   * console.log(`Residual: ${supply.Response.ResidualSupply}`);
   *
   * @example
   * // Request object style
   * const supply = await api.getAssetSupply({
   *   Blockchain: 'MainNet',
   *   AssetName: 'CIRX'
   * });
   *
   * @see {@link getAsset} for complete asset information including owner
   * @see {@link getAssetList} for listing all available assets
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
   * Get voucher details by code
   *
   * Retrieves information about a voucher using its unique code.
   * Returns voucher details including asset type, value, and redemption status.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param code - Voucher code to query. Auto-strips '0x' prefix.
   * @returns Promise resolving to voucher details including Code, Asset, Value, Redeemed
   *
   * @example
   * // Positional parameters (recommended)
   * const voucher = await api.getVoucher('MainNet', 'VOUCHER123ABC');
   * console.log(`Asset: ${voucher.Response.Asset}`);
   * console.log(`Value: ${voucher.Response.Value}`);
   * console.log(`Redeemed: ${voucher.Response.Redeemed}`);
   *
   * @example
   * // Request object style
   * const voucher = await api.getVoucher({
   *   Blockchain: 'MainNet',
   *   Code: 'VOUCHER123ABC'
   * });
   *
   * @see {@link getAsset} for asset information
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
   * Resolve Circular domain to wallet address
   *
   * Resolves a Circular Protocol domain name to its associated wallet address.
   * A single wallet can be associated with multiple domain names.
   *
   * @param blockchain - Blockchain identifier (e.g., 'MainNet', 'TestNet'). Auto-strips '0x' prefix.
   * @param domain - Domain name to resolve (e.g., 'alice.cir', 'mycompany.cir')
   * @returns Promise resolving to domain and address mapping
   *
   * @example
   * // Positional parameters (recommended)
   * const result = await api.getDomain('MainNet', 'alice.cir');
   * console.log(`Domain: ${result.Response.Domain}`);
   * console.log(`Address: ${result.Response.Address}`);
   *
   * @example
   * // Request object style
   * const result = await api.getDomain({
   *   Blockchain: 'MainNet',
   *   Domain: 'alice.cir'
   * });
   *
   * @see {@link getWallet} for retrieving wallet information by address
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
   * Get list of available blockchains
   *
   * Retrieves a list of all blockchains available in the Circular Protocol network.
   * Returns information about each blockchain including name, chain ID, and active status.
   *
   * @returns Promise resolving to array of blockchain information including Name, ChainID, Active
   *
   * @example
   * // No parameters required
   * const chains = await api.getBlockchains();
   * chains.Response.forEach(chain => {
   *   console.log(`${chain.Name} (${chain.ChainID}): ${chain.Active ? 'Active' : 'Inactive'}`);
   * });
   *
   * @example
   * // Request object style (empty object)
   * const chains = await api.getBlockchains({});
   *
   * @see {@link getAnalytics} for blockchain-specific statistics
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
   *
   * Registers a new wallet on the specified blockchain by creating and sending a
   * C_TYPE_REGISTERWALLET transaction. This is required before a wallet can receive
   * transactions or be visible on the blockchain. The same wallet can be registered
   * on multiple blockchains independently.
   *
   * This convenience method handles all transaction construction internally:
   * - Derives wallet address from public key (sha256 hash)
   * - Builds registration payload with Action and PublicKey
   * - Calculates transaction ID from combined parameters
   * - Sets Nonce to "0" and Signature to "" (empty for registration)
   * - Submits via sendTransaction
   *
   * @param blockchain - Blockchain identifier where wallet will be registered (e.g., 'MainNet', 'TestNet')
   * @param publicKey - Uncompressed public key (128 hex characters, without '0x' prefix)
   * @returns Promise resolving to transaction submission response
   *
   * @example
   * // Register wallet on MainNet
   * const publicKey = api.getPublicKey(privateKey);
   * const result = await api.registerWallet('MainNet', publicKey);
   * console.log(`Transaction ID: ${result.Response.TransactionID}`);
   * console.log(`Status: ${result.Response.Status}`);
   *
   * @example
   * // Register same wallet on multiple blockchains
   * await api.registerWallet('MainNet', publicKey);
   * await api.registerWallet('TestNet', publicKey);
   *
   * @see {@link sendTransaction} for the underlying transaction submission
   * @see {@link checkWallet} for verifying wallet registration
   * @see {@link getPublicKey} for deriving public key from private key
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
 * Sign a message using secp256k1 elliptic curve cryptography
 *
 * Creates a digital signature for a message using the secp256k1 curve (same as Bitcoin/Ethereum).
 * The signature can be verified using the corresponding public key.
 *
 * @param message - Message to sign (will be SHA256 hashed before signing)
 * @param privateKey - Private key in hex format (with or without '0x' prefix)
 * @returns DER-encoded signature as hex string
 *
 * @example
 * const message = 'Hello, Circular Protocol!';
 * const privateKey = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';
 * const signature = api.signMessage(message, privateKey);
 * console.log(`Signature: ${signature}`);
 *
 * @see {@link verifySignature} for verifying signatures
 * @see {@link getPublicKey} for deriving the public key
 */
signMessage(message: string, privateKey: string): string {
  const ec = new EC('secp256k1');
  const key = ec.keyFromPrivate(this.hexFix(privateKey), 'hex');
  const msgHash = sha256(message);
  const signature = key.sign(msgHash).toDER('hex');
  return signature;
}

/**
 * Verify a digital signature using secp256k1
 *
 * Verifies that a signature was created by the private key corresponding to the given public key.
 * Returns true if the signature is valid, false otherwise.
 *
 * @param publicKey - Public key in hex format (with or without '0x' prefix)
 * @param message - Original message that was signed
 * @param signature - DER-encoded signature in hex format
 * @returns true if signature is valid, false otherwise
 *
 * @example
 * const message = 'Hello, Circular Protocol!';
 * const privateKey = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';
 * const publicKey = api.getPublicKey(privateKey);
 * const signature = api.signMessage(message, privateKey);
 * const isValid = api.verifySignature(publicKey, message, signature);
 * console.log(`Signature valid: ${isValid}`); // true
 *
 * @see {@link signMessage} for creating signatures
 * @see {@link getPublicKey} for deriving public keys
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
 * Derive public key from private key using secp256k1
 *
 * Generates the corresponding public key from a private key using elliptic curve mathematics.
 * Returns the public key in uncompressed format (128 hex characters).
 *
 * @param privateKey - Private key in hex format (with or without '0x' prefix)
 * @returns Public key in uncompressed hex format (128 characters)
 *
 * @example
 * const privateKey = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';
 * const publicKey = api.getPublicKey(privateKey);
 * console.log(`Public Key: ${publicKey}`);
 * console.log(`Length: ${publicKey.length}`); // 130 (04 prefix + 128 hex chars)
 *
 * @see {@link signMessage} for signing with the private key
 * @see {@link registerWallet} for registering a wallet with public key
 */
getPublicKey(privateKey: string): string {
  const ec = new EC('secp256k1');
  const key = ec.keyFromPrivate(this.hexFix(privateKey), 'hex');
  return key.getPublic('hex');
}

/**
 * Compute SHA256 hash of a string
 *
 * Generates a SHA256 cryptographic hash of the input string.
 * Returns a 64-character hex string (256 bits = 32 bytes = 64 hex chars).
 *
 * @param str - String to hash
 * @returns SHA256 hash as hex string (64 characters)
 *
 * @example
 * const hash = api.hashString('Hello, Circular Protocol!');
 * console.log(`Hash: ${hash}`);
 * console.log(`Length: ${hash.length}`); // 64
 *
 * @example
 * // Derive wallet address from public key
 * const publicKey = api.getPublicKey(privateKey);
 * const walletAddress = api.hashString(publicKey);
 *
 * @see {@link getPublicKey} for public key derivation
 * @see {@link signMessage} which uses SHA256 internally
 */
hashString(str: string): string {
  return sha256(str);
}

  // ============================================================================
  // Helper Methods - Encoding
  // ============================================================================

/**
 * Normalize hex strings by removing '0x' prefix
 *
 * Removes the '0x' or '0X' prefix from hex strings if present.
 * This is automatically applied to blockchain/address/ID parameters in all API methods.
 *
 * @param hexString - Hex string with or without 0x prefix
 * @returns Normalized hex string without 0x prefix
 *
 * @example
 * console.log(api.hexFix('0x123abc'));  // '123abc'
 * console.log(api.hexFix('0X123ABC'));  // '123ABC'
 * console.log(api.hexFix('123abc'));    // '123abc' (unchanged)
 *
 * @example
 * // Automatically applied in API methods
 * await api.checkWallet('MainNet', '0x742d35Cc...'); // 0x auto-stripped
 */
hexFix(hexString: string): string {
  if (hexString.startsWith('0x') || hexString.startsWith('0X')) {
    return hexString.slice(2);
  }
  return hexString;
}

/**
 * Convert string to hex encoding
 *
 * Encodes a UTF-8 string to its hexadecimal representation.
 * This is automatically applied to project/request parameters in contract methods.
 *
 * @param str - String to convert
 * @returns Hex-encoded string (2 hex chars per byte)
 *
 * @example
 * console.log(api.stringToHex('hello'));        // '68656c6c6f'
 * console.log(api.stringToHex('ABC'));          // '414243'
 * console.log(api.stringToHex('hello world'));  // '68656c6c6f20776f726c64'
 *
 * @example
 * // Automatically applied in contract methods
 * await api.testContract('MainNet', from, 'contract code'); // auto-converted to hex
 *
 * @see {@link hexToString} for decoding hex back to string
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
 * Convert hex encoding back to string
 *
 * Decodes a hexadecimal string back to its UTF-8 string representation.
 * Automatically strips '0x' prefix if present.
 *
 * @param hex - Hex-encoded string (with or without '0x' prefix)
 * @returns Decoded UTF-8 string
 *
 * @example
 * console.log(api.hexToString('68656c6c6f'));     // 'hello'
 * console.log(api.hexToString('0x414243'));       // 'ABC'
 * console.log(api.hexToString('68656c6c6f20776f726c64'));  // 'hello world'
 *
 * @example
 * // Round-trip encoding/decoding
 * const original = 'Hello, Circular!';
 * const encoded = api.stringToHex(original);
 * const decoded = api.hexToString(encoded);
 * console.log(decoded === original); // true
 *
 * @see {@link stringToHex} for encoding strings to hex
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
 *
 * Generates a timestamp string in the format required by Circular Protocol: YYYY:MM:DD-hh:mm:ss (UTC).
 * This is automatically applied to contract methods (testContract, callContract).
 *
 * @returns Formatted timestamp string in YYYY:MM:DD-hh:mm:ss format (UTC timezone)
 *
 * @example
 * const timestamp = api.getFormattedTimestamp();
 * console.log(timestamp);  // '2025:11:15-14:30:45'
 *
 * @example
 * // Automatically applied in contract methods
 * await api.testContract('MainNet', from, project); // timestamp auto-generated
 *
 * @see {@link testContract} which auto-generates timestamps
 * @see {@link callContract} which auto-generates timestamps
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
