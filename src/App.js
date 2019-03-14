import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import NoteForm from './components/form.jsx';

class App extends Component {
  state={
    'title':'Todo-App',
    'footer':'Never Forget what you gotta do',
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <br></br>
        <div style={{height:505,overflowY:'scroll'}}>
          <NoteForm />
        </div>
        <br></br>
        <Footer footer={this.state.footer}/>
      </div>
    );
  }
}

export default App;
