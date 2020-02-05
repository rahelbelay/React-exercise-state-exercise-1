import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'
import OutPut from './OutPut';
import ClearButton from './ClearButton'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: `this is the text value in state`,
    }

  }

  render() {
    return (
      <div className="App">
        <Input textValue={this.state.textValue}
          updateText={this._updateText}
        />

        <OutPut textValue={this.state.textValue} />
        <ClearButton clearOnClick={this._clearOnClick} />
      </div>

    );
  }

  _updateText = (event) => {
    this.setState({
      textValue: event.target.value
    })
  }

  _clearOnClick = () => {
    this.setState({
      textValue: ""
    })


  }
}
export default App;
