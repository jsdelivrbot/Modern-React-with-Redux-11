import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({term : event.target.value})}/>
        Value of input field: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
