'use strict';

var styles = require('./index.scss');

import React from 'react';
import { render } from 'react-dom';

import App from './App.jsx';

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}

render(<App/>, document.getElementById('root'));