import React from 'react'
import { Table, Container, Image, Button } from 'react-bootstrap'

class Profile extends React.Component {
  render () {
    return (
    <>
    <Container style={{ textAlign: 'center', padding: 20 }}>
      <h1> Welcome Back, Elly!</h1>
    </Container>
    <div className = "container" style={{ padding: 50 }}>
      <div className = "row">
        {/* Left blank */}
        <div className="col-md-2 col-sm-2 col-xs-2">
        </div>

        <div className="col-md-8 col-sm-8 col-xs-8">
          <Table striped bordered hover>
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Plant Pic</th>
                <th>Plant Name</th>
                <th>Water State</th>
                <th>WATER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>1</td> */}
                <td style={{ textAlign: 'center' }}><Image height="150" width="150" src="images/monstera.jpg"/></td>
                <td>Monstera Deliciosa</td>
                <td>What to put here?</td>
                <td style={{ textAlign: 'center' }}>
                  <Image className="wateringCan" src="images/wateringCan.png"/>
                </td>
              </tr>
              <tr>
                {/* <td>2</td> */}
                <td style={{ textAlign: 'center' }}><Image height="150" width="150" src="images/zanzibar.jpg"/></td>
                <td>Zanzibar Gem</td>
                <td>What to put here?</td>
                <td style={{ textAlign: 'center' }}>
                  <Image className="wateringCan" src="images/wateringCan.png"/>
                </td>
              </tr>
              <tr>
                {/* <td>3</td> */}
                <td style={{ textAlign: 'center' }}><Image height="150" width="150" src="images/pachira.jpg"/></td>
                <td>Pachira Aquatica</td>
                <td>What to put here?</td>
                <td style={{ textAlign: 'center' }}>
                  <Image className="wateringCan" src="images/wateringCan.png"/>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Right Blank */}
        <div className="col-md-2 col-sm-2 col-xs-2">
        </div>
      </div>
      <br></br>
      <hr></hr>
    </div>

    </>
    )
  }
}

export default Profile
