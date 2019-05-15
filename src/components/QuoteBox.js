import React from 'react'
import QuoteText from './QuoteText';
import Author from './Author';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/async';

class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.generateQuote = this.generateQuote.bind(this);
  }

  generateQuote() {
    console.log(this.props.color);
    this.props.onFetchQuote();
  }

   render() {

    let url = "https://twitter.com/intent/tweet?text="+this.props.quote;

    return (
      <div style={{ color: this.props.color }} className="quote-box">
        <QuoteText text={ this.props.quote }/>
        <Author author={ this.props.author }/>
        <div className="button-container">
          <a href={url} style={{ backgroundColor: this.props.color }}
                  className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <button style={{ backgroundColor: this.props.color }}  
                className="new-quote" 
                onClick={this.generateQuote}>
            New Quote
          </button>
        </div>
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    color: state.color,
    quote: state.quote,
    author: state.author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchQuote: () => {
      dispatch(fetchQuote())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);