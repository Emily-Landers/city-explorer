import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class CityInfo extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img variant="top" src={this.props.locationObject.map}/>
    <Card.Title>{this.props.locationObject.display_name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Latitude: {this.props.locationObject.lat} Longitude: {this.props.locationObject.lon}</Card.Subtitle>
    <Card.Text>
    </Card.Text>

  </Card.Body>
</Card>
            </div>
        )
    }
}
