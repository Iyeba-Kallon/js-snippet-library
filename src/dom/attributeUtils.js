// attributeUtils.js
export const attributeUtils = {
    set: (element, attributes = {}) => {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      return element;
    },
    get: (element, attribute) => element.getAttribute(attribute),
    remove: (element, ...attributes) => {
      attributes.forEach(attr => element.removeAttribute(attr));
      return element;
    },
    has: (element, attribute) => element.hasAttribute(attribute)
  };