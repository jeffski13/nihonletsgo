import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('returns initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    expect(result.current[0]).toBe('initialValue');
  });

  it('returns stored value from localStorage', () => {
    window.localStorage.setItem('testKey', JSON.stringify('storedValue'));
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    expect(result.current[0]).toBe('storedValue');
  });

  it('updates localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    act(() => {
      result.current[1]('newValue');
    });

    expect(result.current[0]).toBe('newValue');
    expect(JSON.parse(window.localStorage.getItem('testKey'))).toBe('newValue');
  });

  it('handles array values correctly', () => {
    const { result } = renderHook(() => useLocalStorage('arrayKey', []));

    act(() => {
      result.current[1](['item1', 'item2']);
    });

    expect(result.current[0]).toEqual(['item1', 'item2']);
    expect(JSON.parse(window.localStorage.getItem('arrayKey'))).toEqual(['item1', 'item2']);
  });

  it('handles object values correctly', () => {
    const { result } = renderHook(() => useLocalStorage('objectKey', {}));

    act(() => {
      result.current[1]({ name: 'test', count: 5 });
    });

    expect(result.current[0]).toEqual({ name: 'test', count: 5 });
    expect(JSON.parse(window.localStorage.getItem('objectKey'))).toEqual({ name: 'test', count: 5 });
  });

  it('handles localStorage errors gracefully', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Mock localStorage.getItem to throw an error
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const { result } = renderHook(() => useLocalStorage('errorKey', 'fallback'));

    expect(result.current[0]).toBe('fallback');
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
