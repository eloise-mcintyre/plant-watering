import React from 'react'
import SignUpJumbo from './SignUpJumbo'
import FormPage from './FormPage'
import Nav from './Nav'
import Profile from './Profile'
import Login from './Login'

import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Route path='/' component = { Nav } />
    <Route exact path='/' component = { SignUpJumbo } />
    <Route path='/form' component = { FormPage }/>
    <Route path='/profile' component = { Profile } />
    <Route path='/login' component = { Login } />
    </>
  )
}

export default App
