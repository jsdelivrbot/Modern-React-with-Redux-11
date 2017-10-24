
## append to dom
```javascript 
document.querySelector('.container')
```

## install youtube npm api package
npm install --save youtube-api-search

## es6 react component declaration
```javascript
import React from 'react';

const SearchBar = () => {
  return <input />
};
  
OR

const SearchBar = () => 
  <input />
```

## export - import js file

In order for a js file to be available in other files, we need to export it.

`search_bar.js`:

```javascript
import React from 'react';

const SearchBar = () => {
  return <input />
};
export default SearchBar;
```

now it can be imported 

```javascript
import SearchBar from 'search_bar';
```

## Class-Based Components

### Functional Component

```javascript
const SearchBar = () => {
  return <input />
};
```

### Class Component

