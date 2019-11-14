import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class Pics extends React.Component {
  render () {
    return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant1.jpg" fluid />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant2.jpeg" fluid />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant3.jpg" fluid />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant4.jpeg" fluid />
        </div>
        <br></br>
      </div>
    </div>
    
    <br></br>
    <br></br>

    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant5.jpeg" fluid />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant6.jpeg" fluid />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant7.jpeg" fluid />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <Image src="/plant8.jpeg" fluid />
        </div>
      </div>
    </div>
    </>
    )
  }
}

export default Pics
