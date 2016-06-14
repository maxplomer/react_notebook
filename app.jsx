var Pages = React.createClass({
  getInitialState: function() {
    var myState;

    if (document.cookie == '') {
      myState = {message1: '', message2: '', message3: '', message4: '', message5: ''};
    } else  {
      myState = JSON.parse(document.cookie);
    }

    return myState;
  },

  handleChange1: function(event) {
    this.setState({message1: event.target.value});
  },

  handleChange2: function(event) {
    this.setState({message2: event.target.value});
  },

  handleChange3: function(event) {
    this.setState({message3: event.target.value});
  },

  handleChange4: function(event) {
    this.setState({message4: event.target.value});
  },

  handleChange5: function(event) {
    this.setState({message5: event.target.value});
  },

  componentDidUpdate: function() {
    document.cookie = JSON.stringify(this.state);
  },

  render: function() {
    return (
      <div>
        <textarea placeholder={this.props.placeholder} value={this.state.message1} onChange={this.handleChange1}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message2} onChange={this.handleChange2}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message3} onChange={this.handleChange3}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message4} onChange={this.handleChange4}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message5} onChange={this.handleChange5}/>
        <br/>
      </div>
    );
  }
});

React.render(<Pages placeholder="Enter page text"/>, document.body);