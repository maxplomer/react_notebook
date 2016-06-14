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




var IeInput = React.createClass({
  getInitialState: function() {
    return {
      text: '',
      myInputStyles: {color: "rgb(200,200,200)"}
    };
  },
  onChange: function(e) {
    if (e.target.value != this.props.placeholder) {
      if (this.state.text == this.props.placeholder && this.state.myInputStyles.color == "rgb(200,200,200)") {
        //if very first first letter!
        this.setState({
          text: e.target.value.charAt(0),
          myInputStyles: {color: "black"}
        });
      } else {
        this.setState({
          text: e.target.value,
          myInputStyles: {color: "black"}
        });
      }
    } else {
      if (this.state.text != this.props.placeholder) {
        //you are trying to type in the placeholder text!!!!
        //maybe your "username" is "username1234"

        this.setState({
          text: e.target.value,
          myInputStyles: {color: "black"}
        });

      }
    }
  },
  onFocus: function(e) {
    //if empty
    if (this.state.text == '') {
      this.setState({
        text: this.props.placeholder,
        myInputStyles: {color: "rgb(200,200,200)"}
      });
      var that = this;
      setTimeout(function(){ 
        React.findDOMNode(that).setSelectionRange(0,0);
      }, 0);
    }
  },
  onBlur: function(element) {
    if (this.state.text == this.props.placeholder || this.state.text == '') {
      this.setState({
        text: '',
        myInputStyles: {color: "rgb(200,200,200)"}
      });
    }
  },
  onKeyUp: function(e) {
    //if you used the arrows keys go back to front
    if (this.state.text == this.props.placeholder && this.state.myInputStyles.color == "rgb(200,200,200)") {
      e.preventDefault();
      React.findDOMNode(this).setSelectionRange(0,0);
    }

    //if empty route back to onFocus
    if (this.state.text == '') {
      this.onFocus();
    }
  },
  onClick: function(e) {
    if (this.state.text == this.props.placeholder) {
      React.findDOMNode(this).setSelectionRange(0,0);
    }
  },
  render: function() {
    return (

      <input onClick={this.onClick} onBlur={this.onBlur} onKeyUp={this.onKeyUp} onFocus={this.onFocus} onChange={this.onChange} value={this.state.text} placeholder={this.props.placeholder} style={this.state.myInputStyles}/>

    );
  }
});

React.render(<Pages placeholder="Enter page text"/>, document.body);