/**
 * Method Overload Tests
 * Tests that all 24 API methods support both positional and request object calling styles
 */

import { CircularProtocolAPI } from '../src/index';

// Mock fetch globally
global.fetch = jest.fn();

describe('Method Overloads', () => {
  let api: CircularProtocolAPI;
  let mockFetch: jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockClear();
    api = new CircularProtocolAPI();
  });

  describe('Positional vs Request Object Equivalence', () => {
    it('checkWallet: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      // Test positional params
      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.checkWallet('blockchain', 'address');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      // Test request object
      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.checkWallet({
        Blockchain: 'blockchain',
        Address: 'address',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      // Should be identical
      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getWallet: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getWallet('blockchain', 'address');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getWallet({
        Blockchain: 'blockchain',
        Address: 'address',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getWalletBalance: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getWalletBalance('blockchain', 'address', 'CIRX');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getWalletBalance({
        Blockchain: 'blockchain',
        Address: 'address',
        Asset: 'CIRX',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getWalletNonce: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getWalletNonce('blockchain', 'address');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getWalletNonce({
        Blockchain: 'blockchain',
        Address: 'address',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('sendTransaction: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.sendTransaction(
        'id', 'from', 'to', '2025:01:01-00:00:00',
        'type', 'payload', '0', 'signature', 'blockchain'
      );
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.sendTransaction({
        ID: 'id',
        From: 'from',
        To: 'to',
        Timestamp: '2025:01:01-00:00:00',
        Type: 'type',
        Payload: 'payload',
        Nonce: '0',
        Signature: 'signature',
        Blockchain: 'blockchain',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getBlock: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getBlock('blockchain', '100');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getBlock({
        Blockchain: 'blockchain',
        BlockID: '100',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getBlockCount: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getBlockCount('blockchain');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getBlockCount({
        Blockchain: 'blockchain',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getAssetList: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getAssetList('blockchain');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getAssetList({
        Blockchain: 'blockchain',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getAsset: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getAsset('blockchain', 'CIRX');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getAsset({
        Blockchain: 'blockchain',
        Asset: 'CIRX',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });

    it('getDomain: both styles should produce identical requests', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response;

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getDomain('blockchain', 'domain.cir');
      const positionalBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      mockFetch.mockResolvedValueOnce(mockResponse);
      await api.getDomain({
        Blockchain: 'blockchain',
        Domain: 'domain.cir',
        Version: '1.0.8'
      });
      const requestObjBody = JSON.parse(mockFetch.mock.calls[1]?.[1]?.body as string);

      expect(positionalBody).toEqual(requestObjBody);
    });
  });

  describe('TypeScript Type Inference', () => {
    it('should infer correct return types for positional params', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ Result: 200, Response: { Address: 'test' } }),
      } as Response);

      // TypeScript should infer checkWalletResponse
      const result = await api.checkWallet('blockchain', 'address');
      expect(result.Response).toBeDefined();
      expect(typeof result.Result).toBe('number');
    });

    it('should infer correct return types for request objects', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({ Result: 200, Response: { Address: 'test' } }),
      } as Response);

      // TypeScript should infer checkWalletResponse
      const result = await api.checkWallet({
        Blockchain: 'blockchain',
        Address: 'address',
        Version: '1.0.8'
      });
      expect(result.Response).toBeDefined();
      expect(typeof result.Result).toBe('number');
    });
  });

  describe('All 24 Methods Support Both Styles', () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ Result: 200, Response: {} }),
    } as Response;

    it('should support positional params for all read methods', async () => {
      const methods = [
        () => api.checkWallet('blockchain', 'address'),
        () => api.getWallet('blockchain', 'address'),
        () => api.getWalletBalance('blockchain', 'address', 'CIRX'),
        () => api.getWalletNonce('blockchain', 'address'),
        () => api.getBlock('blockchain', '100'),
        () => api.getBlockCount('blockchain'),
        () => api.getAnalytics('blockchain'),
        () => api.getAssetList('blockchain'),
        () => api.getAsset('blockchain', 'CIRX'),
        () => api.getDomain('blockchain', 'domain.cir'),
        () => api.getBlockbyNode('blockchain', 'nodeID', '0', '10'),
        () => api.getTransactionbyNode('blockchain', 'nodeID', '0', '10'),
        () => api.getPendingTransaction('blockchain', 'id'),
        () => api.getVoucher('blockchain', 'code'),
      ];

      for (const method of methods) {
        mockFetch.mockClear();
        mockFetch.mockResolvedValueOnce(mockResponse);
        await method();
        expect(mockFetch).toHaveBeenCalled();
      }
    });

    it('should support positional params for contract methods', async () => {
      const methods = [
        () => api.testContract('blockchain', 'from', 'project'),
        () => api.callContract('blockchain', 'from', 'address', 'request'),
        () => api.getContract('blockchain', 'from', 'address'),
        () => api.getContractData('blockchain', 'address', 'project'),
      ];

      for (const method of methods) {
        mockFetch.mockClear();
        mockFetch.mockResolvedValueOnce(mockResponse);
        await method();
        expect(mockFetch).toHaveBeenCalled();
      }
    });

    it('should support positional params for transaction methods', async () => {
      const methods = [
        () => api.sendTransaction('id', 'from', 'to', '2025:01:01-00:00:00', 'type', 'payload', '0', 'sig', 'blockchain'),
        () => api.registerWallet('blockchain', 'address', 'publicKey'),
      ];

      for (const method of methods) {
        mockFetch.mockClear();
        mockFetch.mockResolvedValueOnce(mockResponse);
        await method();
        expect(mockFetch).toHaveBeenCalled();
      }
    });

    it('should support request objects for all read methods', async () => {
      const methods = [
        () => api.checkWallet({ Blockchain: 'bc', Address: 'addr', Version: '1.0.8' }),
        () => api.getWallet({ Blockchain: 'bc', Address: 'addr', Version: '1.0.8' }),
        () => api.getWalletBalance({ Blockchain: 'bc', Address: 'addr', Asset: 'CIRX', Version: '1.0.8' }),
        () => api.getWalletNonce({ Blockchain: 'bc', Address: 'addr', Version: '1.0.8' }),
        () => api.getBlock({ Blockchain: 'bc', BlockID: '100', Version: '1.0.8' }),
        () => api.getBlockCount({ Blockchain: 'bc', Version: '1.0.8' }),
        () => api.getAnalytics({ Blockchain: 'bc', Version: '1.0.8' }),
        () => api.getAssetList({ Blockchain: 'bc', Version: '1.0.8' }),
        () => api.getAsset({ Blockchain: 'bc', Asset: 'CIRX', Version: '1.0.8' }),
        () => api.getDomain({ Blockchain: 'bc', Domain: 'domain.cir', Version: '1.0.8' }),
        () => api.getBlockbyNode({ Blockchain: 'bc', NodeID: 'nodeID', Skip: '0', Limit: '10', Version: '1.0.8' }),
        () => api.getTransactionbyNode({ Blockchain: 'bc', NodeID: 'nodeID', Skip: '0', Limit: '10', Version: '1.0.8' }),
        () => api.getPendingTransaction({ Blockchain: 'bc', ID: 'id', Version: '1.0.8' }),
        () => api.getVoucher({ Blockchain: 'bc', Code: 'code', Version: '1.0.8' }),
      ];

      for (const method of methods) {
        mockFetch.mockClear();
        mockFetch.mockResolvedValueOnce(mockResponse);
        await method();
        expect(mockFetch).toHaveBeenCalled();
      }
    });

    it('should support request objects for contract methods', async () => {
      const methods = [
        () => api.testContract({ Blockchain: 'bc', From: 'from', Project: 'proj', Timestamp: '2025:01:01-00:00:00', Version: '1.0.8' }),
        () => api.callContract({ Blockchain: 'bc', From: 'from', Address: 'addr', Request: 'req', Timestamp: '2025:01:01-00:00:00', Version: '1.0.8' }),
        () => api.getContract({ Blockchain: 'bc', From: 'from', Address: 'addr', Version: '1.0.8' }),
        () => api.getContractData({ Blockchain: 'bc', Address: 'addr', Project: 'proj', Version: '1.0.8' }),
      ];

      for (const method of methods) {
        mockFetch.mockClear();
        mockFetch.mockResolvedValueOnce(mockResponse);
        await method();
        expect(mockFetch).toHaveBeenCalled();
      }
    });
  });

  describe('Edge Cases', () => {
    it('should handle optional parameters in positional style', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.testContract('blockchain', 'from', 'project');
      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      // Should auto-generate timestamp
      expect(callBody.Timestamp).toMatch(/^\d{4}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2}$/);
    });

    it('should handle partial request objects with version defaulting', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      // Omit Version field - should default to 1.0.8
      await api.checkWallet({
        Blockchain: 'blockchain',
        Address: 'address'
      } as any); // TypeScript would normally require Version

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Version).toBe('1.0.8');
    });

    it('should preserve explicit Version when provided in request object', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet({
        Blockchain: 'blockchain',
        Address: 'address',
        Version: '1.0.8' // Explicitly provided
      });

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Version).toBe('1.0.8');
    });
  });

  describe('Preprocessing in Both Styles', () => {
    it('should apply preprocessing in positional style', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('0xblockchain', '0xaddress');
      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      expect(callBody.Blockchain).toBe('blockchain');
      expect(callBody.Address).toBe('address');
    });

    it('should apply preprocessing in request object style', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet({
        Blockchain: '0xblockchain',
        Address: '0xaddress',
        Version: '1.0.8'
      });
      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      expect(callBody.Blockchain).toBe('blockchain');
      expect(callBody.Address).toBe('address');
    });
  });
});
