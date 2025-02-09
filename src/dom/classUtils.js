// classUtils.js
export const classUtils = {
    add: (element, ...classes) => {
      element.classList.add(...classes);
      return element;
    },
    remove: (element, ...classes) => {
      element.classList.remove(...classes);
      return element;
    },
    toggle: (element, className, force) => {
      element.classList.toggle(className, force);
      return element;
    },
    has: (element, className) => element.classList.contains(className)
  };