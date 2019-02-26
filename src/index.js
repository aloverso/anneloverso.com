import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

registerServiceWorker();
