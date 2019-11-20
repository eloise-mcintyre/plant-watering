import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {` Elly's PlantBook `}
        </Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* The link below needs to be updated */}
            <Link to = {'/login'}>Log In</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

    </>
    )
  }
}

export default Nav
