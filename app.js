import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function App() {
  return (
    <div>
      <Header>Hello world</Header>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));