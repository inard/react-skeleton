var React = require("react");
var ReactDOM = require("react-dom");
var ListManager = require("./components/ListManager.jsx");

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById("ingredients"));
ReactDOM.render(<ListManager title="ToDo" />, document.getElementById("todo"));
ReactDOM.render(<ListManager title="Cristmas" headingColor="fuchsia" />, document.getElementById("cristmas"));
