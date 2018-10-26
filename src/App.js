import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'

import Header from './Component/Header/Header'

class App extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: '',
      productName: '',
      price: 0,
      inventory: [],
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      console.log('endpoint hit'); 
      this.setState({
        inventory: res.data
      })
    })
  }

  handleChange = e => { this.setState({ [e.target.name]: e.target.value }); }

  addToInventory = () => {
    var obj = {
      imageUrl: this.state.imageUrl,
      productName: this.state.productName,
      price: this.state.price
    }
    axios.post('/api/product', obj)
  }

  render() {

    return (
      <div className ="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
        />
        <Form
          handleChange={this.handleChange}
          addToInventory={this.addToInventory}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
