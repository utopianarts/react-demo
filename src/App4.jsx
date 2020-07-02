import React from 'react'

class App4 extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.props.value} onChange={this.props.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default App4;