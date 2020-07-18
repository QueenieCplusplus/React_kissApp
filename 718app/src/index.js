import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import Counter from './Count';
//import CountOnFunc from'./Func';

/*ReactDOM.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

let container;
container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Counter/>, container);

// document.body.removeChild(container);
// container=null;





// root see html file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
