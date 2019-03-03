import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './component/App';
import { Oops404 } from './component/Oops404';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="messages" component={App}/>
		<Route path="*" component={Oops404}/>
	</Router>,
    document.getElementById('react-container')
);