var Page = React.createClass({
  getInitialState: function() {
    var message = document.cookie || '';

    return {
      message: message
    };
  },
  handleChange: function(event) {
    document.cookie = event.target.value;
    //localStorage.setItem( 'message', event.target.value );
    this.setState({message: event.target.value});
  },

  render: function() {
    return (
      <div>
        <textarea placeholder={this.props.placeholder} value={this.state.message}  onChange={this.handleChange}/>
        <textarea value={this.state.message}/>
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

React.render(<Page placeholder="Enter page text"/>, document.body);