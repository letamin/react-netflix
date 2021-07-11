import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages/index";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoutes } from "./helpers/routes";
import { usesAuthListener } from "./hooks";

export default function App() {
  const { user } = usesAuthListener();
  console.log("LoggedIn user: ", user);

  return (
    <Router>
      <IsUserRedirect
        user={user}
        path={ROUTES.HOME}
        loggedInPath={ROUTES.BROWSE}
        exact
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoutes user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoutes>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <SignUp />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <SignIn />
      </IsUserRedirect>
    </Router>
  )
}
