# JavaScript Utility Library

A lightweight, modular JavaScript utility library providing a collection of commonly used functions for DOM manipulation, event handling, and general utilities.

## 📦 Installation

```bash
npm install js-snippet-library
```

## 🚀 Quick Start

```javascript
// Import specific utilities
import { createElement, debounce, formatDate } from 'js-snippet-library';

// Create a DOM element
const card = createElement('div', 
  { className: 'card', id: 'user-card' },
  ['Hello World']
);

// Use debounce for search input
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', debounce((e) => {
  console.log('Searching:', e.target.value);
}, 300));
```

## 📚 Available Utilities

### DOM Utilities

#### createElement(tag, attributes, children)
Creates DOM elements with attributes and children.
```javascript
const div = createElement('div', 
  { className: 'container' }, 
  ['Hello', document.createElement('br'), 'World']
);
```

#### toggleVisibility(element, force)
Toggles element visibility.
```javascript
const element = document.querySelector('.modal');
toggleVisibility(element); // toggles visibility
toggleVisibility(element, true); // forces visible
```

#### classUtils
Utility functions for CSS class manipulation.
```javascript
const element = document.querySelector('.card');
classUtils.add(element, 'active', 'visible');
classUtils.remove(element, 'hidden');
classUtils.toggle(element, 'selected');
classUtils.has(element, 'active'); // returns boolean
```

#### attributeUtils
Utility functions for attribute manipulation.
```javascript
const element = document.querySelector('img');
attributeUtils.set(element, { src: 'image.jpg', alt: 'Description' });
attributeUtils.get(element, 'src');
attributeUtils.remove(element, 'title');
```

### Event Utilities

#### debounce(func, wait)
Limits the rate at which a function can be called.
```javascript
const handleResize = debounce(() => {
  console.log('Resize event debounced');
}, 250);
window.addEventListener('resize', handleResize);
```

#### throttle(func, limit)
Ensures a function is called at most once in a specified time period.
```javascript
const handleScroll = throttle(() => {
  console.log('Scroll event throttled');
}, 250);
window.addEventListener('scroll', handleScroll);
```

#### onClickOutside(element, callback)
Detects clicks outside of an element.
```javascript
const modal = document.querySelector('.modal');
const cleanup = onClickOutside(modal, () => {
  modal.style.display = 'none';
});
// Call cleanup() when no longer needed
```

### General Utilities

#### deepClone(obj)
Creates a deep copy of an object or array.
```javascript
const original = { nested: { data: [1, 2, 3] } };
const copy = deepClone(original);
```

#### formatDate(date, format)
Formats dates according to a specified pattern.
```javascript
const date = new Date();
formatDate(date, 'YYYY-MM-DD'); // returns '2024-02-09'
formatDate(date, 'DD/MM/YYYY HH:mm'); // returns '09/02/2024 15:30'
```

#### randomString(length)
Generates a random string of specified length.
```javascript
const id = randomString(8); // e.g., "aB3kP9mN"
```

#### parseQueryParams(url)
Parses URL query parameters into an object.
```javascript
const params = parseQueryParams('https://example.com?name=John&age=25');
// returns { name: 'John', age: '25' }
```

#### capitalizeFirstLetter(string)
Capitalizes the first letter of a string.
```javascript
capitalizeFirstLetter('hello world'); // returns 'Hello world'
```

## 🧪 Testing

To run the test suite:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Build for production
npm run build
```

## 📄 License

MIT License - feel free to use this library in your projects.