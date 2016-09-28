var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyFirstComponent = (
  div(null,
     React.createElement(MyTitle, {title:'Props are great', color:'rebeccapurple'}),
     React.createElement(MyTitle, {title:'Props are amazing', color:'peru'})
 )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
