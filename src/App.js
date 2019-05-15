import React from 'react';
import QuoteBox from './components/QuoteBox';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

  render() {
    
    localStorage.setItem('color',this.props.color);    
    const color = this.props.isFetching ? localStorage.getItem('color') : this.props.color;

    return (
      <div style={{ backgroundColor: color }} className="App">
        <QuoteBox />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    color: state.color,
  }
}

export default connect(mapStateToProps)(App);
