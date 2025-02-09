// Remove duplicates from an array
export const deduplicateArray = (arr) => [...new Set(arr)];

// Find the intersection of two arrays
export const arrayIntersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

// Shuffle an array
export const shuffleArray = (arr) => {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};
