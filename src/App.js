import React, { useContext, Suspense } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NoRegisteredUser } from "./pages/NoRegisteredUser";
import { NotFound } from './pages/NotFound'
import { Redirect, Router } from "@reach/router";
import { Context } from "./Context";

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NoRegisteredUser path='/login'/>}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
