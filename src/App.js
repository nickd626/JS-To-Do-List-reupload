import { Component } from 'react';
import './App.css';
import InputField from './components/InputField';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listItem: ''
    }
  }
  
  componentDidMount() {
      if (this.state.isSubmitted) {
        this.setState({ listItem: this.state.listItem });
      }
  }
  
  render() {
    return (
      <div className="App">
        <div>
        <InputField listItem={this.state.listItem}/>
        </div>
      </div>
    );
  }
}
export default App;