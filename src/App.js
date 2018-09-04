import React, { Component } from 'react';
import './App.css';
import { getCms } from './cms';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    console.log('this is from component did mount');
    
    // getCms().then((data) => {
    //   console.log(data);
    //   this.setState(()=>({
    //       title: data.title
    //   }));
    // });

    console.log(getCms());

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React CMS Example</h1>
        </header>
        <p className="App-intro">
          This information is coming from a cms file
        </p>
        <p>
          {this.state.title}
        </p>
      </div>
    );
  }
}

export default App;
