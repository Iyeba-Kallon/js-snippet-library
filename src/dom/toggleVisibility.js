// toggleVisibility.js
export const toggleVisibility = (element, force) => {
    if (typeof force === 'boolean') {
      element.style.display = force ? '' : 'none';
      return force;
    }
    const isHidden = element.style.display === 'none';
    element.style.display = isHidden ? '' : 'none';
    return isHidden;
  };