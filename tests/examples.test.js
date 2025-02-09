// __tests__/utils.test.js
import {
  createElement,
  toggleVisibility,
  classUtils,
  attributeUtils,
  debounce,
  throttle,
  onClickOutside,
  deepClone,
  formatDate,
  randomString,
  parseQueryParams,
  capitalizeFirstLetter
} from '../src';

// DOM Utilities Tests
describe('DOM Utilities', () => {
  describe('createElement', () => {
    test('creates basic element', () => {
      const el = createElement('div');
      expect(el.tagName).toBe('DIV');
    });

    test('creates element with attributes', () => {
      const el = createElement('div', {
        className: 'test-class',
        id: 'test-id',
        'data-test': 'value'
      });
      expect(el.className).toBe('test-class');
      expect(el.id).toBe('test-id');
      expect(el.getAttribute('data-test')).toBe('value');
    });

    test('creates element with children', () => {
      const el = createElement('div', {}, [
        'Text Node',
        createElement('span', {}, ['Nested'])
      ]);
      expect(el.childNodes.length).toBe(2);
      expect(el.textContent).toBe('Text NodeNested');
    });
  });

  describe('toggleVisibility', () => {
    let element;
    
    beforeEach(() => {
      element = document.createElement('div');
    });

    test('toggles visibility', () => {
      expect(element.style.display).toBe('');
      toggleVisibility(element);
      expect(element.style.display).toBe('none');
      toggleVisibility(element);
      expect(element.style.display).toBe('');
    });

    test('forces visibility state', () => {
      toggleVisibility(element, true);
      expect(element.style.display).toBe('');
      toggleVisibility(element, false);
      expect(element.style.display).toBe('none');
    });
  });
});

// Event Utilities Tests
describe('Event Utilities', () => {
  describe('debounce', () => {
    jest.useFakeTimers();

    test('debounces function calls', () => {
      const func = jest.fn();
      const debouncedFunc = debounce(func, 1000);

      // Call it multiple times
      debouncedFunc();
      debouncedFunc();
      debouncedFunc();

      // Fast-forward time
      jest.runAllTimers();

      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    test('throttles function calls', () => {
      const func = jest.fn();
      const throttledFunc = throttle(func, 1000);

      // Call it multiple times
      throttledFunc();
      throttledFunc();
      throttledFunc();

      expect(func).toHaveBeenCalledTimes(1);

      // Fast-forward time
      jest.runAllTimers();

      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });
  });
});

// General Utilities Tests
describe('General Utilities', () => {
  describe('deepClone', () => {
    test('clones primitive values', () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone('test')).toBe('test');
      expect(deepClone(null)).toBe(null);
    });

    test('clones complex objects', () => {
      const original = {
        a: [1, 2, { b: 3 }],
        c: { d: new Date(), e: /test/ }
      };
      const clone = deepClone(original);

      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
      expect(clone.a[2]).not.toBe(original.a[2]);
      expect(clone.c.d).not.toBe(original.c.d);
      expect(clone.c.e).not.toBe(original.c.e);
    });
  });

  describe('formatDate', () => {
    test('formats date with different patterns', () => {
      const date = new Date('2024-02-09T15:30:45');
      
      expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-02-09');
      expect(formatDate(date, 'DD/MM/YYYY')).toBe('09/02/2024');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-02-09 15:30:45');
    });
  });

  describe('randomString', () => {
    test('generates string of correct length', () => {
      expect(randomString(10)).toHaveLength(10);
      expect(randomString(5)).toHaveLength(5);
    });

    test('generates different strings', () => {
      const str1 = randomString(10);
      const str2 = randomString(10);
      expect(str1).not.toBe(str2);
    });
  });
});