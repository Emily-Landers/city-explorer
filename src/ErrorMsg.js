import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast'

export default class ErrorMsg extends Component {


    render() {
        return (
            <div>
                <Toast show={this.props.showError}>
                    <Toast.Header>
                        <img src="/public/404.jpeg" alt=""/>
                        <strong className="me-auto">Status code 404</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                <Toast.Body>Error: unable to geocode</Toast.Body>
                </Toast>
  
            </div>
        )
    }
}
