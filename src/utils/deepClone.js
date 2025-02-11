//deepClone.js
export const deepClone = obj => {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
  );
};