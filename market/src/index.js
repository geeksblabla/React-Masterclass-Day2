import React from 'react';
import ReactDOM from 'react-dom';
import ItemStore from './mobx';

import { Provider } from 'mobx-react';

import Application from './components/Application';

import './index.css';

//ReactDOM.render(<Application />, document.getElementById('root'));

const itemStore = new ItemStore();

ReactDOM.render(
  <Provider itemStore={itemStore}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);