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
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="Enter User Name" />
            </Form.Group>
            {/* <Form.Label>Image</Form.Label>
            <img className="img-responsive" src="https://dummyimage.com/600x400/000/fff" />
            <input name="image[]" value="" type="checkbox"> </input>
            <i className="fa fa-check hidden"></i> */}

            {/* <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}

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

            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="image" src="https://dummyimage.com/100x100/000/fff" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="image" src="https://dummyimage.com/100x100/000/fff" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="image" src="https://dummyimage.com/100x100/000/fff" />
            </Form.Group> */}


            {/* Neecd a redirect to the users profile page in here */}
            <Button variant="primary" type="submit">
            Submit
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
