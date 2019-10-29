import React from 'react';
import './App.css';


// User Defined Components
import Header from './components/header/Header';

const api_key = "79a8cfa0bfe2f572624a45b859b24485";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

  getMovie = async (e) => {
    
    const movie_name = e.target.elements.movie_name.value;

    e.preventDefault();
    
    const api_call = await fetch(
    );
    const response = await api_call.json();
  }

  render() {
    return (
      <div className="app">
        <Header />
      </div>
    )
  }
}

export default App;
