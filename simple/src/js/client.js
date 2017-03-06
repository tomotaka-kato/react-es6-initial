import React    from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

console.log('test');
function render() {
  ReactDOM.render(
    <h1>Hello World!</h1>
    , root);
}

render();
