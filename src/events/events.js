// Add an event listener to an element
export const addEvent = (element, event, callback) => {
    element.addEventListener(event, callback);
  };
  
  // Remove an event listener
  export const removeEvent = (element, event, callback) => {
    element.removeEventListener(event, callback);
  };
  