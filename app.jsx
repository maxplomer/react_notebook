var Pages = React.createClass({
  getInitialState: function() {
    var myState;
    var storedData = sessionStorage.getItem( 'data' );

    if (storedData == null) {
      myState = {
        currentMessage: '',
        messages: ['', '', '', '', ''],
        currentPage: 1
      };
    } else  {
      myState = JSON.parse(storedData);
    }

    return myState;
  },

  handleChange: function(event) {
    this.setState({currentMessage: event.target.value});

    var messages = this.state.messages;
    messages[this.state.currentPage] = event.target.value;
    this.setState({messages: messages});
  },

  previousPage: function() {
    this.updatePageNumber(this.state.currentPage - 1);
  },

  nextPage: function() {
    this.updatePageNumber(this.state.currentPage + 1);
  },

  updatePageNumber: function(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= 5) {
      this.setState({currentPage: pageNumber});
      this.updateCurrentMessage(pageNumber);
    }
  },

  updateCurrentMessage: function(pageNumber) {
    var message = eval("this.state.message" + pageNumber);
    this.setState({currentMessage: message});
  },

  componentDidUpdate: function() {
    sessionStorage.setItem( 'data', JSON.stringify(this.state) );
  },

  render: function() {
    return (
      <div className="page-holder">
        <textarea placeholder={this.props.placeholder} value={this.state.currentMessage} onChange={this.handleChange}/>

        <div className="page-number-holder">
          Page Number: {this.state.currentPage}
          <br/>

          <button onClick={this.previousPage}>prev</button> &nbsp;&nbsp;&nbsp; 
          <button onClick={this.nextPage}>next</button>
        </div>
      </div>
    );
  }
});

React.render(<Pages placeholder="Enter page text"/>, document.body);