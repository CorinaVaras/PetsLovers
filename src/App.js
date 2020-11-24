import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NoRegisteredUser } from './pages/NoRegisteredUser'

import { Router } from '@reach/router'
// Componente con render props
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {
            ({ isAuth }) =>
              isAuth
                ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                : <Router>
                  <NoRegisteredUser path='/favs' />
                  <NoRegisteredUser path='/user' />
                </Router>
       }
      </UserLogged>
      <NavBar />
    </>
  )
}
