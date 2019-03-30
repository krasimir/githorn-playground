import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function App() {
  return (
    <div>
      <Header>Hey, there!</Header>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
