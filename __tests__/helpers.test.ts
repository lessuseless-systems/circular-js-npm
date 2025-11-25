/**
 * Helper Functions Tests
 * Tests for cryptographic and encoding helper methods
 */

import { CircularProtocolAPI } from '../src/index';

describe('Helper Functions', () => {
  let api: CircularProtocolAPI;

  beforeEach(() => {
    api = new CircularProtocolAPI();
  });

  describe('hexFix', () => {
    it('should remove 0x prefix from hex string', () => {
      expect(api.hexFix('0x123abc')).toBe('123abc');
      expect(api.hexFix('0X123ABC')).toBe('123ABC');
    });

    it('should return unchanged string without 0x prefix', () => {
      expect(api.hexFix('123abc')).toBe('123abc');
      expect(api.hexFix('abcdef')).toBe('abcdef');
    });

    it('should handle empty string', () => {
      expect(api.hexFix('')).toBe('');
    });

    it('should handle just 0x', () => {
      expect(api.hexFix('0x')).toBe('');
    });
  });

  describe('stringToHex', () => {
    it('should convert ASCII string to hex', () => {
      expect(api.stringToHex('hello')).toBe('68656c6c6f');
      expect(api.stringToHex('ABC')).toBe('414243');
    });

    it('should handle empty string', () => {
      expect(api.stringToHex('')).toBe('');
    });

    it('should handle special characters', () => {
      expect(api.stringToHex('hello world')).toBe('68656c6c6f20776f726c64');
      expect(api.stringToHex('test@123')).toBe('74657374403132333');
    });

    it('should handle unicode characters', () => {
      const result = api.stringToHex('café');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('hexToString', () => {
    it('should convert hex to ASCII string', () => {
      expect(api.hexToString('68656c6c6f')).toBe('hello');
      expect(api.hexToString('414243')).toBe('ABC');
    });

    it('should handle 0x prefixed hex', () => {
      expect(api.hexToString('0x68656c6c6f')).toBe('hello');
    });

    it('should handle empty string', () => {
      expect(api.hexToString('')).toBe('');
    });

    it('should round-trip with stringToHex', () => {
      const original = 'hello world';
      const hex = api.stringToHex(original);
      const decoded = api.hexToString(hex);
      expect(decoded).toBe(original);
    });
  });

  describe('hashString', () => {
    it('should produce consistent SHA256 hash', () => {
      const hash1 = api.hashString('test');
      const hash2 = api.hashString('test');
      expect(hash1).toBe(hash2);
    });

    it('should produce different hashes for different inputs', () => {
      const hash1 = api.hashString('test1');
      const hash2 = api.hashString('test2');
      expect(hash1).not.toBe(hash2);
    });

    it('should produce 64-character hex hash', () => {
      const hash = api.hashString('test');
      expect(hash.length).toBe(64);
      expect(/^[a-f0-9]+$/.test(hash)).toBe(true);
    });

    it('should handle empty string', () => {
      const hash = api.hashString('');
      expect(hash.length).toBe(64);
    });
  });

  describe('getFormattedTimestamp', () => {
    it('should return timestamp in correct format', () => {
      const timestamp = api.getFormattedTimestamp();
      // Format: YYYY:MM:DD-hh:mm:ss
      expect(timestamp).toMatch(/^\d{4}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2}$/);
    });

    it('should return valid date components', () => {
      const timestamp = api.getFormattedTimestamp();
      const [datePart, timePart] = timestamp.split('-');
      const [year, month, day] = datePart.split(':').map(Number);
      const [hours, minutes, seconds] = timePart.split(':').map(Number);

      expect(year).toBeGreaterThanOrEqual(2025);
      expect(month).toBeGreaterThanOrEqual(1);
      expect(month).toBeLessThanOrEqual(12);
      expect(day).toBeGreaterThanOrEqual(1);
      expect(day).toBeLessThanOrEqual(31);
      expect(hours).toBeGreaterThanOrEqual(0);
      expect(hours).toBeLessThanOrEqual(23);
      expect(minutes).toBeGreaterThanOrEqual(0);
      expect(minutes).toBeLessThanOrEqual(59);
      expect(seconds).toBeGreaterThanOrEqual(0);
      expect(seconds).toBeLessThanOrEqual(59);
    });

    it('should pad single digits with zero', () => {
      const timestamp = api.getFormattedTimestamp();
      const parts = timestamp.replace('-', ':').split(':');
      parts.forEach(part => {
        expect(part.length).toBe(2);
      });
    });
  });

  describe('Cryptographic Functions', () => {
    const testPrivateKey = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';
    const expectedPublicKey = '04627306090abab3a6e1400e9345bc60c78a8bef57f524dc77e0e0b0bb7c23c46b9b8fc4e0c7ef5b1e7d7b3f5e2e1c8b2d5e9e8f7b6c5a4e3d2c1b0a9f8e7d6c5';

    describe('getPublicKey', () => {
      it('should derive public key from private key', () => {
        const publicKey = api.getPublicKey(testPrivateKey);
        expect(publicKey.length).toBeGreaterThan(0);
        expect(/^[a-f0-9]+$/i.test(publicKey)).toBe(true);
      });

      it('should produce consistent public key', () => {
        const pubKey1 = api.getPublicKey(testPrivateKey);
        const pubKey2 = api.getPublicKey(testPrivateKey);
        expect(pubKey1).toBe(pubKey2);
      });

      it('should handle 0x prefixed private key', () => {
        const pubKey1 = api.getPublicKey(testPrivateKey);
        const pubKey2 = api.getPublicKey('0x' + testPrivateKey);
        expect(pubKey1).toBe(pubKey2);
      });
    });

    describe('signMessage and verifySignature', () => {
      it('should sign and verify message', () => {
        const message = 'test message';
        const signature = api.signMessage(message, testPrivateKey);
        const publicKey = api.getPublicKey(testPrivateKey);

        expect(signature.length).toBeGreaterThan(0);
        const isValid = api.verifySignature(publicKey, message, signature);
        expect(isValid).toBe(true);
      });

      it('should reject invalid signature', () => {
        const message = 'test message';
        const signature = api.signMessage(message, testPrivateKey);
        const publicKey = api.getPublicKey(testPrivateKey);

        // Modify message
        const isValid = api.verifySignature(publicKey, 'different message', signature);
        expect(isValid).toBe(false);
      });

      it('should reject wrong public key', () => {
        const message = 'test message';
        const signature = api.signMessage(message, testPrivateKey);

        // Different private/public key
        const wrongPrivateKey = 'd87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';
        const wrongPublicKey = api.getPublicKey(wrongPrivateKey);

        const isValid = api.verifySignature(wrongPublicKey, message, signature);
        expect(isValid).toBe(false);
      });

      it('should produce different signatures for different messages', () => {
        const sig1 = api.signMessage('message1', testPrivateKey);
        const sig2 = api.signMessage('message2', testPrivateKey);
        expect(sig1).not.toBe(sig2);
      });
    });
  });

  describe('Configuration Methods', () => {
    describe('NAG URL', () => {
      it('should get default NAG URL', () => {
        const url = api.getNAGURL();
        expect(url).toBe('https://nag.circularlabs.io/NAG.php?cep=');
      });

      it('should set and get custom NAG URL', () => {
        api.setNAGURL('https://custom.api/endpoint');
        expect(api.getNAGURL()).toBe('https://custom.api/endpoint');
      });
    });

    describe('NAG Key', () => {
      it('should get empty NAG key by default', () => {
        const key = api.getNAGKey();
        expect(key).toBe('');
      });

      it('should set and get NAG key', () => {
        api.setNAGKey('test-key-123');
        expect(api.getNAGKey()).toBe('test-key-123');
      });
    });

    describe('Constructor configuration', () => {
      it('should accept custom NAG URL in constructor', () => {
        const customApi = new CircularProtocolAPI('https://custom.url');
        expect(customApi.getNAGURL()).toBe('https://custom.url');
      });

      it('should accept NAG key in constructor', () => {
        const customApi = new CircularProtocolAPI(
          'https://custom.url',
          'test-key'
        );
        expect(customApi.getNAGKey()).toBe('test-key');
      });
    });
  });

  describe('Error Handling', () => {
    it('should track last error', () => {
      // GetError should return empty string initially
      expect(api.GetError()).toBe('');
    });
  });
});
