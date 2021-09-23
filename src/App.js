import React from 'react';
import { BrowserRouter as Router , Switch } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from "./hooks"

import { Home } from './pages/home';
import { Browse } from './pages/browse';
import { SignIn } from './pages/signin';
import { Signup } from './pages/signup';
// import { Home, Browse, Signin, Signup } from './pages/index';

export  function App(){
  const {user} = useAuthListener()
  console.log(user);

  return (
    <Router>
      <Switch>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
        >
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
     </Switch>
    </Router>
  )
}