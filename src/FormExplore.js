import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class FormExplore extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: ''
        }
    }
    handleInput = (e) => {
        e.preventDefault();
        this.setState({ city: e.target.value });
      }
      handleClick = (e) => {
        e.preventDefault();
        this.props.getLocation(this.state.city)
    }
    render() {
        
        return (
            <Form>
            <Form.Group className="mb-3">
              <Form.Label>City Explorer</Form.Label>
              <Form.Control onChange={this.handleInput}placeholder="Search for a city" />
            </Form.Group>
            <Button onClick={this.handleClick}variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
        )
    }
}
