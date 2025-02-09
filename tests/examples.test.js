// example.test.js
import { 
    createElement, 
    toggleVisibility, 
    classUtils, 
    formatDate, 
    deepClone,
    randomString 
  } from '../src';
  
  describe('DOM Utils', () => {
    test('createElement creates element with correct attributes', () => {
      const el = createElement('div', { className: 'test' }, ['Hello']);
      expect(el.tagName).toBe('DIV');
      expect(el.className).toBe('test');
      expect(el.textContent).toBe('Hello');
    });
  
    test('toggleVisibility toggles display property', () => {
      const el = document.createElement('div');
      expect(toggleVisibility(el)).toBe(true);
      expect(el.style.display).toBe('none');
      expect(toggleVisibility(el)).toBe(false);
      expect(el.style.display).toBe('');
    });
  });
  
  describe('Utility Functions', () => {
    test('formatDate formats date correctly', () => {
      const date = new Date('2024-02-09');
      expect(formatDate(date)).toBe('2024-02-09');
    });
  
    test('deepClone creates deep copy', () => {
      const obj = { a: { b: 2 }, c: [1, 2, 3] };
      const clone = deepClone(obj);
      expect(clone).toEqual(obj);
      expect(clone).not.toBe(obj);
    });
  
    test('randomString generates string of correct length', () => {
      const str = randomString(10);
      expect(str.length).toBe(10);
      expect(typeof str).toBe('string');
    });
  });