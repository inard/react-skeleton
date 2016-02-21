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
        var panelStyle = {
            marginTop: 10
        };

        var panelHeadingStyle = {
        };

        if (this.props.headingColor) {
            panelHeadingStyle.background = this.props.headingColor;
        }

        return (
            <div className="panel panel-default" style={panelStyle}>
                <div className="panel-heading" style={panelHeadingStyle}>
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <div className="col-sm-1 my-list-manager-col">
                            </div>
                            <div className="col-sm-6 my-list-manager-col">
                                <input className="form-control" onChange={this.handleOnChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-1 my-list-manager-col">
                            </div>
                            <div className="col-sm-3 my-list-manager-col">
                                <button className="btn btn-primary">Add</button>
                            </div>
                            <div className="col-sm-1 my-list-manager-col">
                            </div>
                        </div>
                    </form>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
