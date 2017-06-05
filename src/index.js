import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter,{CounterTest} from './counter/counter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('test'));
ReactDOM.render(<CounterTest />, document.getElementById('test1'));
registerServiceWorker();
