import React from 'react';
import './App.css';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: '',
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearchChange = event => {
    this.setState({ fieldValue: event.target.value });
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // Submit method
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <div>
        <h3>Please enter the guest name</h3>
        <App3 placeholder='enter name' onSearchChange={this.onSearchChange} />
        <App2 value={this.state.fieldValue}/>
        </div>
        <div>
        <h3>Please pick the fruit</h3>
        <App4 handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <App2 value={this.state.value}/>
        </div>
      </div>
    );
  }
}


export default App;
