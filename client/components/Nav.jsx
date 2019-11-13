import React from 'react'
import { Navbar } from 'react-bootstrap'

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
      </Navbar>

    </>
    )
  }
}

export default Nav
