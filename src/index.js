import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyABvJr9pDr8GCc6EfK0mzRxW1AUFzo16II';

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
