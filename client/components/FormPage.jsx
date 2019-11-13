import React from 'react'
import { Button, Form } from 'react-bootstrap'
// import Form from 'react-bootstrap'
// import { Group, Label, Control } from 'react-bootstrap/Form'

class FormPage extends React.Component {
  render () {
    return (
    <>
    <div className = "container" style={{ padding: 50 }}>
      <div className = "row">
        {/* Left blank */}
        <div className="col-md-3 col-sm-3 col-xs-3">
        </div>
        
        <div className="col-md-6 col-sm-6 col-xs-6">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
          </Form>
        </div>

        {/* Right Blank */}
        <div className="col-md-3 col-sm-3 col-xs-3">
        </div>
      </div>
    </div>
    <hr></hr>
    </>
    )
  }
}

export default FormPage
