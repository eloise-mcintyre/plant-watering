import React from 'react'
import Pics from './Pics'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as api from '../api'

class Login extends React.Component {
  state = {
    user: ''
  }
  
  getName = () => {
    // Call API
    api.postUser()
    // .then(response => console.log(response))
      .then(response => {
        // Update the state
        this.setState({ user: response.body })
      })
      .catch(err => {
        // Update the state
        this.setState({ error: err.response.text })
      })
  }

  render () {
    return (
      <>
      <div className = "container" style={{ padding: 50 }}>
        <div className = "row">
          {/* Left blank */}
          <div className="col-md-3 col-sm-3 col-xs-3">
          </div>

          <div className="col-md-6 col-sm-6 col-xs-6">
            <Form method = "post" action = "/getUser">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="Enter User Name" />
              </Form.Group>

              <Button onClick={this.getName} variant="primary" type="submit">
                <Link to = {`/profile/${this.state.user}`} className="btn btn-primary">Log In</Link>
              </Button>
            </Form>
          </div>

          {/* Right Blank */}
          <div className="col-md-3 col-sm-3 col-xs-3">
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div>
        <Pics />
      </>
    )
  }
}

export default Login
