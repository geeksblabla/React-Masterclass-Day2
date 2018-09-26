import React from 'react';
import ReactDOM from 'react-dom';

//import { Provider } from 'react-redux';
//import store from './store';

import Application from './components/Application';

import './index.css';

ReactDOM.render(<Application />,document.getElementById('root'));


/*
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);

*/