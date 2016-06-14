var Pages = React.createClass({
  getInitialState: function() {
    var myState;

    if (document.cookie == '') {
      myState = {message1: '', message2: '', message3: '', message4: '', message5: '', currentPage: 1};
    } else  {
      myState = JSON.parse(document.cookie);
    }

    return myState;
  },

  handleChange: function(page_index, event) {
    switch(page_index) {
      case 1:
        this.setState({message1: event.target.value});
        break;
      case 2:
        this.setState({message2: event.target.value});
        break;
      case 3:
        this.setState({message3: event.target.value});
        break;
      case 4:
        this.setState({message4: event.target.value});
        break;
      case 5:
        this.setState({message5: event.target.value});
        break;
    }
  },

  previousPage: function() {
    this.updatePageNumber(this.state.currentPage - 1)
  },

  nextPage: function() {
    this.updatePageNumber(this.state.currentPage + 1)
  },

  updatePageNumber: function(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= 5) {
      this.setState({currentPage: pageNumber});
    }
  },

  componentDidUpdate: function() {
    document.cookie = JSON.stringify(this.state);
  },

  render: function() {
    return (
      <div>
        <textarea placeholder={this.props.placeholder} value={this.state.message1} onChange={this.handleChange.bind(this, 1)}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message2} onChange={this.handleChange.bind(this, 2)}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message3} onChange={this.handleChange.bind(this, 3)}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message4} onChange={this.handleChange.bind(this, 4)}/>
        <br/>
        <textarea placeholder={this.props.placeholder} value={this.state.message5} onChange={this.handleChange.bind(this, 5)}/>
        <br/>
        <span>Page Number: {this.state.currentPage}</span>
        <br/>
        <button onClick={this.previousPage}>prev</button> &nbsp;&nbsp;&nbsp; 
        <button onClick={this.nextPage}>next</button>
      </div>
    );
  }
});

React.render(<Pages placeholder="Enter page text"/>, document.body);