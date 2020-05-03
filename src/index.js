import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import Home from './Home'; no longer need it been replaced by Routes
import Routes from './Routes'; 
const view = (
    <Router>
        <div>
        <Routes/> 
        </div>
    </Router>
)
ReactDOM.render(view, document.getElementById('root') 
);

