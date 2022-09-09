import { Route, Switch } from "react-router-dom/";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { Home } from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import React from "react";

function Router() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/register">
          <RegisterForm />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export { Router };
