/**
 * Circular Protocol TypeScript SDK
 * Generated from Nickel API specification
 * Version: 1.0.8
 */
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
export interface checkWalletResponse {
    Result: number;
    Response: {
        Response: {
            address: string;
            exists: boolean;
        };
        Result: number;
    };
}
export interface getWalletResponse {
    Result: number;
    Response: {
        Response: {
            Address: string;
            Balance: number;
            Nonce: number;
        };
        Result: number;
    };
}
export interface getLatestTransactionsResponse {
    Result: number;
    Response: {
        Response: Array<{
            Amount: number;
            From: string;
            ID: string;
            Timestamp: string;
            To: string;
        }>;
        Result: number;
    };
}
export interface getWalletBalanceResponse {
    Result: number;
    Response: {
        Response: {
            Asset: string;
            Balance: number;
        };
        Result: number;
    };
}
export interface getWalletNonceResponse {
    Result: number;
    Response: {
        Response: {
            Nonce: number;
        };
        Result: number;
    };
}
export interface AddTransactionResponse {
    Result: number;
    Response: {
        Response: {
            Status: string;
            TransactionID: string;
        };
        Result: number;
    };
}
export interface getPendingTransactionResponse {
    Result: number;
    Response: {
        Response: {
            From: string;
            ID: string;
            Status: string;
            To: string;
        };
        Result: number;
    };
}
export interface getTransactionbyIDResponse {
    Result: number;
    Response: {
        Response: {
            BlockNumber: number;
            From: string;
            ID: string;
            Timestamp: string;
            To: string;
        };
        Result: number;
    };
}
export interface getTransactionbyNodeResponse {
    Result: number;
    Response: {
        Response: Array<{
            BlockNumber: number;
            ID: string;
            NodeID: string;
        }>;
        Result: number;
    };
}
export interface getTransactionbyAddressResponse {
    Result: number;
    Response: {
        Response: Array<{
            BlockNumber: number;
            From: string;
            ID: string;
            To: string;
        }>;
        Result: number;
    };
}
export interface getTransactionbyDateResponse {
    Result: number;
    Response: {
        Response: Array<{
            From: string;
            ID: string;
            Timestamp: string;
            To: string;
        }>;
        Result: number;
    };
}
export interface getBlockResponse {
    Result: number;
    Response: {
        Response: {
            BlockNumber: number;
            Hash: string;
            Timestamp: string;
            Transactions: Array<{}>;
        };
        Result: number;
    };
}
export interface getBlockRangeResponse {
    Result: number;
    Response: {
        Response: Array<{
            BlockNumber: number;
            Timestamp: string;
            Transactions: Array<{}>;
        }>;
        Result: number;
    };
}
export interface getBlockCountResponse {
    Result: number;
    Response: {
        Response: {
            BlockCount: number;
        };
        Result: number;
    };
}
export interface getAnalyticsResponse {
    Result: number;
    Response: {
        Response: {
            BlockHeight: number;
            TotalAssets: number;
            TotalTransactions: number;
            TotalWallets: number;
        };
        Result: number;
    };
}
export interface testContractResponse {
    Result: number;
    Response: {
        Response: string;
        Result: number;
    };
}
export interface callContractResponse {
    Result: number;
    Response: {
        Response: string;
        Result: number;
    };
}
export interface getAssetListResponse {
    Result: number;
    Response: {
        Response: Array<{
            AssetName: string;
        }>;
        Result: number;
    };
}
export interface getAssetResponse {
    Result: number;
    Response: {
        Response: {
            AssetName: string;
            Decimals: number;
            Owner: string;
            TotalSupply: number;
        };
        Result: number;
    };
}
export interface getAssetSupplyResponse {
    Result: number;
    Response: {
        Response: {
            CirculatingSupply: number;
            ResidualSupply: number;
            TotalSupply: number;
        };
        Result: number;
    };
}
export interface getVoucherResponse {
    Result: number;
    Response: {
        Response: {
            Asset: string;
            Code: string;
            Redeemed: boolean;
            Value: number;
        };
        Result: number;
    };
}
export interface getDomainResponse {
    Result: number;
    Response: {
        Response: {
            Address: string;
            Domain: string;
        };
        Result: number;
    };
}
export interface getBlockchainsResponse {
    Result: number;
    Response: {
        Response: Array<{
            Active: boolean;
            ChainID: string;
            Name: string;
        }>;
        Result: number;
    };
}
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
export declare class CircularProtocolAPI {
    private readonly headers;
    private nagURL;
    private nagKey;
    private lastError;
    private readonly version;
    /**
     * Create a new Circular Protocol API client
     *
     * @param nagUrl - Optional NAG endpoint URL (default: https://nag.circularlabs.io/NAG.php?cep=)
     * @param nagKey - Optional NAG API key for authentication
     */
    constructor(nagUrl?: string, nagKey?: string);
    /**
     * Make HTTP request to NAG endpoint
     * @param endpoint - Endpoint name (e.g., 'GetBlockchains')
     * @param data - Request payload
     * @returns Full API response with Result and Response fields
     */
    private _makeRequest;
    /**
     * Check if wallet exists
     * Checks whether a wallet address exists on the specified blockchain.
  Returns existence status and confirms the address format.
     */
    checkWallet(req: checkWalletRequest): Promise<checkWalletResponse>;
    /**
     * Get wallet information
     * Retrieves complete wallet information including balance and nonce.
  Returns all wallet properties including current state on the blockchain.
     */
    getWallet(req: getWalletRequest): Promise<getWalletResponse>;
    /**
     * Get latest transactions for wallet
     * Retrieves the latest transactions for a wallet address.
  Returns an array of transaction objects with details.
     */
    getLatestTransactions(req: getLatestTransactionsRequest): Promise<getLatestTransactionsResponse>;
    /**
     * Get wallet balance for specific asset
     * Retrieves the balance of a specified asset in a wallet.
  Returns the balance amount for the requested asset.
     */
    getWalletBalance(req: getWalletBalanceRequest): Promise<getWalletBalanceResponse>;
    /**
     * Get wallet nonce
     * Retrieves the nonce (transaction counter) of a wallet.
  The nonce is used for transaction ordering and must increment with each transaction.
     */
    getWalletNonce(req: getWalletNonceRequest): Promise<getWalletNonceResponse>;
    /**
     * Submit transaction to blockchain
     * Submits a transaction to the blockchain. Requires a complete signed transaction
  including ID, addresses, payload, nonce, and signature.
     */
    addTransaction(req: AddTransactionRequest): Promise<AddTransactionResponse>;
    /**
     * Get pending transaction by ID
     * Searches for a transaction by ID among pending transactions.
  Returns the transaction if it exists and is still pending.
     */
    getPendingTransaction(req: getPendingTransactionRequest): Promise<getPendingTransactionResponse>;
    /**
     * Find transaction by ID
     * Finds a transaction by ID within a specified block range.
  Searches through blocks to locate the transaction.
     */
    getTransactionbyID(req: getTransactionbyIDRequest): Promise<getTransactionbyIDResponse>;
    /**
     * Find transactions by node ID
     * Finds transactions by node ID within a specified block range.
  Returns all transactions associated with the node.
     */
    getTransactionbyNode(req: getTransactionbyNodeRequest): Promise<getTransactionbyNodeResponse>;
    /**
     * Find transactions by address
     * Finds transactions by wallet address within a specified block range.
  Returns transactions where the address is sender or recipient.
     */
    getTransactionbyAddress(req: getTransactionbyAddressRequest): Promise<getTransactionbyAddressResponse>;
    /**
     * Find transactions by date range
     * Finds transactions by wallet address within a specified date range.
  Returns all transactions for the address between the dates.
     */
    getTransactionbyDate(req: getTransactionbyDateRequest): Promise<getTransactionbyDateResponse>;
    /**
     * Get specific block
     * Retrieves a desired block by block number.
  Returns complete block information including transactions and hash.
     */
    getBlock(req: getBlockRequest): Promise<getBlockResponse>;
    /**
     * Get range of blocks
     * Retrieves all blocks in a specified range.
  If End = 0, then Start is the number of blocks from the last one minted going backward.
     */
    getBlockRange(req: getBlockRangeRequest): Promise<getBlockRangeResponse>;
    /**
     * Get blockchain height
     * Retrieves the blockchain block height (total number of blocks).
  Also known as getBlockHeight in some documentation.
     */
    getBlockCount(req: getBlockCountRequest): Promise<getBlockCountResponse>;
    /**
     * Get blockchain analytics
     * Retrieves blockchain analytics and statistics.
  Returns comprehensive information about the blockchain state.
     */
    getAnalytics(req: getAnalyticsRequest): Promise<getAnalyticsResponse>;
    /**
     * Test smart contract execution
     * Tests smart contract execution locally without sending a transaction.
  Useful for testing contract logic before deploying or executing.
     */
    testContract(req: testContractRequest): Promise<testContractResponse>;
    /**
     * Call smart contract function
     * Calls a smart contract function on the blockchain.
  Executes the specified function with provided parameters.
     */
    callContract(req: callContractRequest): Promise<callContractResponse>;
    /**
     * List all assets on blockchain
     * Retrieves the list of all assets minted on a specific blockchain.
  Returns an array of asset information.
     */
    getAssetList(req: getAssetListRequest): Promise<getAssetListResponse>;
    /**
     * Get specific asset information
     * Retrieves an asset descriptor with complete asset information.
  Returns detailed information about the specified asset.
     */
    getAsset(req: getAssetRequest): Promise<getAssetResponse>;
    /**
     * Get asset supply information
     * Retrieves the total, circulating, and residual supply of a specified asset.
  Returns comprehensive supply metrics.
     */
    getAssetSupply(req: getAssetSupplyRequest): Promise<getAssetSupplyResponse>;
    /**
     * Retrieve voucher information
     * Retrieves an existing voucher by code.
  Code is automatically stripped of 0x prefix if present.
     */
    getVoucher(req: getVoucherRequest): Promise<getVoucherResponse>;
    /**
     * Resolve domain to wallet address
     * Resolves a domain name to a wallet address.
  A single wallet can have multiple domain associations.
  Also known as resolveDomain.
     */
    getDomain(req: getDomainRequest): Promise<getDomainResponse>;
    /**
     * List available blockchains
     * Retrieves the list of blockchains available in the network.
  Returns information about all active and inactive blockchains.
     */
    getBlockchains(req: getBlockchainsRequest): Promise<getBlockchainsResponse>;
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
     * @returns Promise<AddTransactionResponse>
     */
    registerWallet(blockchain: string, publicKey: string): Promise<AddTransactionResponse>;
    /**
     * Sign a message using secp256k1
     * @param message - Message to sign
     * @param privateKey - Private key in hex format (with or without '0x' prefix)
     * @returns DER-encoded signature as hex string
     */
    signMessage(message: string, privateKey: string): string;
    /**
     * Verify a signature
     * @param publicKey - Public key in hex format
     * @param message - Original message that was signed
     * @param signature - DER-encoded signature in hex format
     * @returns true if signature is valid, false otherwise
     */
    verifySignature(publicKey: string, message: string, signature: string): boolean;
    /**
     * Derive public key from private key
     * @param privateKey - Private key in hex format (with or without '0x' prefix)
     * @returns Public key in uncompressed hex format
     */
    getPublicKey(privateKey: string): string;
    /**
     * Compute SHA256 hash of a string
     * @param str - String to hash
     * @returns SHA256 hash as hex string
     */
    hashString(str: string): string;
    /**
     * Normalize hex strings (remove 0x prefix if present)
     * @param hexString - Hex string with or without 0x prefix
     * @returns Normalized hex string without 0x prefix
     */
    hexFix(hexString: string): string;
    /**
     * Convert string to hex encoding
     * @param str - String to convert
     * @returns Hex-encoded string
     */
    stringToHex(str: string): string;
    /**
     * Convert hex encoding to string
     * @param hex - Hex-encoded string
     * @returns Decoded string
     */
    hexToString(hex: string): string;
    /**
     * Pad number with leading zero if single digit
     * @param num - Number to pad
     * @returns Padded string
     */
    private padNumber;
    /**
     * Get current timestamp in Circular Protocol format
     * Format: YYYY:MM:DD-hh:mm:ss (UTC)
     * @returns Formatted timestamp string
     */
    getFormattedTimestamp(): string;
    /**
     * Set custom NAG endpoint URL
     * @param url - NAG endpoint URL
     */
    setNAGURL(url: string): void;
    /**
     * Get current NAG endpoint URL
     * @returns Current NAG URL
     */
    getNAGURL(): string;
    /**
     * Set NAG API key for authenticated requests
     * @param key - API key
     */
    setNAGKey(key: string): void;
    /**
     * Get current NAG API key
     * @returns Current NAG key
     */
    getNAGKey(): string;
    /**
     * Get last error message
     * @returns Last error message
     */
    GetError(): string;
    /**
     * Handle error and store error message
     * @param error - Error object or string
     */
    private handleError;
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
    getTransactionOutcome(blockchain: string, txID: string, start: string, end: string, timeoutSec?: number, intervalSec?: number): Promise<any>;
    /**
     * Get the SDK version
     * @returns SDK version string
     */
    getVersion(): string;
    /**
     * Set the primary node address for querying blockchain
     * @param address - Node address or URL
     */
    setNode(address: string): void;
}
//# sourceMappingURL=index.d.ts.map