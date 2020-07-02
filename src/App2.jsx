import React from 'react';
import './App.css';

class App2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <h1>{this.props.value}!!!</h1>
    );
  }
}


export default App2;