import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './assets/Header';
import Content from './assets/Content';
import Squares from './assets/Squares';
import Links from './assets/Links';
import './assets/style/style.css';
import './assets/style/tags.css';
import './assets/style/links.css';
//a
var App = React.createClass({
	render: function(){

	var homePage = function(){
		return <div className="App">
					<Header/>
					<Links/>
					{/*<Content filter="first"/>*/}
					<Squares filter="all"/>
				</div>
	}

	var allContent = function(){
		return <div className="App">
					<Header/>
					<Links/>
					<div className="mainImage"/>
					<Content filter="all"/>
				</div>
	}

		return(
				<Router>
					<div>
						<Route exact path="/" render={homePage} />
						<Route path="/all" render={allContent} />
					</div>
				</Router>
			)
	}
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);