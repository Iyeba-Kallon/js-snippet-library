// parseQueryParams.js
export const parseQueryParams = (url = window.location.href) => {
    const params = {};
    const searchParams = new URL(url).searchParams;
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
    return params;
  };