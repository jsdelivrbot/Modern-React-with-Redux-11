# Modern React with Redux

## Query to append to dom

```javascript 
document.querySelector('.container')
```

- `.` —> class
- `#` —> id

```javascript
ReactDOM.render(<App />, document.querySelector('.container'));
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

# Lecture 15

## Class-Based Components

## Functional Component

```javascript
const SearchBar = () => {
  return <input />
};
```

## Class Component

```javascript
class SearchBar extends React.Component {
    render() {
        return <input />;
    }
}
```

## ES6 import 

```javascript 
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input />;
    }
}
```

# Lecture 16 - Handling user events

## Handling events

Handling events on React has 2 steps. For example we want to handle the input event from our input field.

1. We declare an event handler and the event handler is a function that should be ran whenever the event occurs.

> ```javascript
> onInputChange(event) {
>    console.log(event.target.value);
>  }
> ```

2. We pass the event handler to the element that we want to monitor for events as a **property**.

>  ```javascript
> render() {
>     return <input onChange={this.onInputChange}/>;
>  }
>  ```

So : 

```javascript
class SearchBar extends Component {

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input onChange={this.onInputChange}/>;
  }
}
```

## Replace onChange event with ES6 arrow function

```javascript
class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)}/>;
  }
}
```

# Lecture 17 - Introducing State

## What state is 

**State** is a plain javascript object that is used to record and react to user events. We define the state of a component inside a the class **constructor**. Every javascript class has a constructor which is a methpd the is called upon the creation of an instance of the class. 

Example:

```javascript 
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return <input onChange={(event) => console.log(event.target.value)}/>;
  }
}
```

# Lecture 18 - More on State

Outside the constuctor we can only change the state with the :

> ```javascript 
> this.setState(newStateObject)
> ```

in which we pass a new object that represents the new state.

Example:

```Jsx
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return <input onChange={(event) => this.setState({ term : event.target.value)}/>;
  }
}
```

## Printing javascript object inside JSX

`{this.state.term}` inside JSX

```Jsx
<div>
  <input onChange={(event) => this.setState({term : event.target.value})}/>
  Value of input field: {this.state.term}
</div>
```

# Lecture 19 - Controlled Components

