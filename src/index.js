import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Wrapper from './containers/Wrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
