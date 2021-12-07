import React, { Component } from 'react';
import './App.css';
// import Header from './Header.js';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

require('dotenv').config();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryCity: '',
      locationObject: {},
      error: false
    }
  }

  getLocation = async() => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.password}&q=${this.state.queryCity}&format=json`);
        console.log(result.data[0]);
        this.setState({ locationObject: result.data[0]})
    } catch (error) {
      console.error(error);
      console.log('there was an error');
      this.setState({ error: true })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ queryCity: e.target.value }, this.getLocation);
  }

  render() {
    return (
      <div>
              <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control type="text" placeholder="city name" name="city" />
            </Form.Group>
            <Button variant="primary" type="submit">
             Explore!
            </Button>
          </Form>
        {this.state.locationObject.display_name? <p>{this.state.locationObject.display_name}</p> : <p>Search for a city to explore</p>}
        {this.state.error && <p>There was an error with your request</p>}
      </div>
    )
  }
}
export default App;
