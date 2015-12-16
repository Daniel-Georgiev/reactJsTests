
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: '', test: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  testFunction: function(e){
    this.setState({test: e.target.value})
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>ToDo</h3>
        <TodoList items={this.state.items} />
        <div>{this.state.text}</div>
        <div>{this.state.test}</div>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <br />
          <input onChange={this.testFunction} value={this.state.test} />

          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <Timer />
      </div>
    );
  }
});


ReactDOM.render(<TodoApp />, mountNode);

