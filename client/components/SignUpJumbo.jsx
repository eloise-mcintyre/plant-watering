import React from 'react'
import { Link } from 'react-router-dom'
import Pics from './Pics'

class SignUpJumbo extends React.Component {
  render () {
    return (
    <>
      <div className="jumbotron text-center">
        <div className="container">
          <h1>Are You Guilty Of Killing Your Beloved House Plants?</h1>
          <p>I am. Join me on my journey to the land of happy and healthy house plants through my state of the are watering schedual. </p>
          <Link to = {'/form'} className="btn btn-primary">Sign Up</Link>
          {/* <a href="/form" className="btn btn-primary">Sign Up</a> */}
        </div>
      </div>
      <Pics />
    </>
    )
  }
}

export default SignUpJumbo
