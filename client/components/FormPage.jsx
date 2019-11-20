import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="Enter User Name" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" style={{ textAlign: 'center' }}>
              <Form.Check type="checkbox" label="Monstera Deliciosa" name="plantsOwned" value="monstera"/>
              <img height="150" width="150" src="images/monstera.jpg" />
              <br></br> <br></br>
              <Form.Check type="checkbox" label="Zanzibar Gem" name="plantsOwned" value="zanzibar"/>
              <img height="150" width="150" src="images/zanzibar.jpg" />
              <br></br> <br></br>
              <Form.Check type="checkbox" label="Pachira Aquatica" name="plantsOwned" value="pachira"/>
              <img height="150" width="150" src="images/pachira.jpg" />
              <br></br> <br></br>
            </Form.Group>

            <Button variant="primary" type="submit">
              <Link to = {'/profile'} className="btn btn-primary">Submit</Link>
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

    </>
    )
  }
}

export default FormPage
