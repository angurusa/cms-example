import React, { Component } from 'react';
import './App.css';
import { CMS } from './cms';

class App extends Component {

  constructor(props) {
    super(props);
    this.data = {
        title: 'CMS Example',
        description: 'This is an example app of cms',
        firstName: 'Andichamy',
        lastName: 'Gurusamy'
    };
  }

  componentDidMount() {
    CMS.route(this, 'dtvnow');
  }

  render() {
    const {
      title,
      description,
      firstName,
      lastName
    } = CMS.get(this.data, 'dtvnow');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React CMS Example</h1>
        </header>
        <p className="App-intro">
          This information is coming from a cms file
        </p>
        <p>
          Title is: {title} <br/>
          Description is: {description} <br/>
          First Name is: {firstName} <br/>
          Last Name is: {lastName} <br/>
        </p>
      </div>
    );
  }
}

export default App;
