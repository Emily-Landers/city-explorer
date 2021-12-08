import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FormExplore from './FormExplore.js';
import CityInfo from './CityInfo.js';


export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      locationObject: {},
      error: false
    };
  }

  getLocation = async(city) => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${city}&format=json`;
    console.log(url);
    try {
      let result = await axios.get(url);
        this.setState({ locationObject: result.data[0]}, this.mapImage)
    } catch (error) {
      console.error(error);
      console.log('Error');
      this.setState({ error: true })
    }
  }
mapImage = () =>{
  let url =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=13`;
  this.setState({locationObject: { ...this.state.locationObject, map: url }})
}



  render() {
    return (
      <div>
        {/* {this.result.data[0]} */}
        <FormExplore getLocation={this.getLocation}/>
        <CityInfo locationObject={this.state.locationObject} />
      </div>
    )
  }
}

