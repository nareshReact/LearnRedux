var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var Weather = require('./components/Weather.jsx');
var About = require('./components/About.jsx');
var Examples = require('./components/Examples.jsx');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Adding custom css section 7 lecture 58
//require('style!css!app/styles/app.css')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
    <Route path="Examples" component={Examples}/>
     <IndexRoute component={Weather}/>

    </Route>
  </Router>,
  document.getElementById("app")
);
