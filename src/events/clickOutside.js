// clickOutside.js
export const onClickOutside = (element, callback) => {
    const handleClick = event => {
      if (!element.contains(event.target)) {
        callback(event);
      }
    };
  
    document.addEventListener('click', handleClick);
    
    // Return cleanup function
    return () => {
      document.removeEventListener('click', handleClick);
    };
  };