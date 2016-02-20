var React = require("react");
var List = require("./List.jsx");

var ListManager = React.createClass({
    getInitialState: function () {
        return {items: [], newItemText: ""};
    },
    handleOnChange: function (e) {
        this.setState({newItemText: e.target.value});
    },
    handleOnSubmit: function (e) {
        e.preventDefault();

        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ""});
    },
    render: function () {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleOnChange} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;
