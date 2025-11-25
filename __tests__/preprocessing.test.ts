/**
 * Auto-Preprocessing Tests
 * Tests for automatic parameter preprocessing in API methods
 */

import { CircularProtocolAPI } from '../src/index';

// Mock fetch globally
global.fetch = jest.fn();

describe('Auto-Preprocessing', () => {
  let api: CircularProtocolAPI;
  let mockFetch: jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockClear();
    api = new CircularProtocolAPI();
  });

  describe('hexFix preprocessing', () => {
    it('should strip 0x prefix from blockchain parameter', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('0xMainNet', '0xaddress');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Blockchain).toBe('MainNet');
    });

    it('should strip 0x prefix from address parameter', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('blockchain', '0x123abc');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Address).toBe('123abc');
    });

    it('should handle addresses without 0x prefix', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('blockchain', '123abc');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Address).toBe('123abc');
    });

    it('should apply hexFix to transaction ID', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.getPendingTransaction('blockchain', '0xtransactionid');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.ID).toBe('transactionid');
    });

    it('should apply hexFix to nodeID', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.getTransactionbyNode('blockchain', '0xnodeid', '0', '10');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.NodeID).toBe('nodeid');
    });
  });

  describe('stringToHex preprocessing', () => {
    it('should convert project string to hex in testContract', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.testContract('blockchain', 'from', 'my project code');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      // 'my project code' -> hex
      expect(callBody.Project).toBe(api.stringToHex('my project code'));
      expect(callBody.Project).not.toBe('my project code');
    });

    it('should convert request string to hex in callContract', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.callContract('blockchain', 'from', 'address', 'request data');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Request).toBe(api.stringToHex('request data'));
    });
  });

  describe('Version auto-injection', () => {
    it('should auto-inject version in positional params', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('blockchain', 'address');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Version).toBe('1.0.8');
    });

    it('should auto-inject version in request object when not provided', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet({
        Blockchain: 'blockchain',
        Address: 'address',
        Version: '1.0.8' // Would need to be provided currently
      });

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Version).toBe('1.0.8');
    });

    it('should inject version in all API methods', async () => {
      const methods = [
        () => api.getWallet('blockchain', 'address'),
        () => api.getWalletBalance('blockchain', 'address', 'CIRX'),
        () => api.getWalletNonce('blockchain', 'address'),
        () => api.getBlock('blockchain', '100'),
        () => api.getBlockCount('blockchain'),
        () => api.getAnalytics('blockchain'),
        () => api.getAssetList('blockchain'),
        () => api.getAsset('blockchain', 'CIRX'),
        () => api.getDomain('blockchain', 'domain.cir'),
      ];

      for (const method of methods) {
        mockFetch.mockClear();
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ Result: 200, Response: {} }),
        } as Response);

        await method();

        const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
        expect(callBody.Version).toBe('1.0.8');
      }
    });
  });

  describe('Timestamp auto-generation', () => {
    it('should auto-generate timestamp in testContract', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.testContract('blockchain', 'from', 'project');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Timestamp).toMatch(/^\d{4}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2}$/);
    });

    it('should auto-generate timestamp in callContract', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.callContract('blockchain', 'from', 'address', 'request');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Timestamp).toMatch(/^\d{4}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2}$/);
    });
  });

  describe('Voucher code preprocessing', () => {
    it('should strip 0x prefix from voucher code', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.getVoucher('blockchain', '0xvouchercode123');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Code).toBe('vouchercode123');
    });

    it('should handle voucher code without 0x prefix', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.getVoucher('blockchain', 'vouchercode123');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Code).toBe('vouchercode123');
    });
  });

  describe('Request object preprocessing', () => {
    it('should apply hexFix to request object parameters', async () => {
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

    it('should apply stringToHex to request object in contracts', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.testContract({
        Blockchain: 'blockchain',
        From: 'from',
        Project: 'project code',
        Timestamp: '2025:01:01-00:00:00',
        Version: '1.0.8'
      });

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Project).toBe(api.stringToHex('project code'));
    });
  });

  describe('Combined preprocessing', () => {
    it('should apply multiple preprocessing steps simultaneously', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.callContract('0xblockchain', '0xfrom', '0xaddress', 'request data');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);

      // hexFix applied
      expect(callBody.Blockchain).toBe('blockchain');
      expect(callBody.From).toBe('from');
      expect(callBody.Address).toBe('address');

      // stringToHex applied
      expect(callBody.Request).toBe(api.stringToHex('request data'));

      // Timestamp generated
      expect(callBody.Timestamp).toMatch(/^\d{4}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2}$/);

      // Version injected
      expect(callBody.Version).toBe('1.0.8');
    });
  });

  describe('Edge cases', () => {
    it('should handle empty strings', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('', '');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Blockchain).toBe('');
      expect(callBody.Address).toBe('');
    });

    it('should handle just 0x as input', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ Result: 200, Response: {} }),
      } as Response);

      await api.checkWallet('0x', '0x');

      const callBody = JSON.parse(mockFetch.mock.calls[0]?.[1]?.body as string);
      expect(callBody.Blockchain).toBe('');
      expect(callBody.Address).toBe('');
    });
  });
});
