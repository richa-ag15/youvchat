import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
 import { AuthProvider } from "../contexts/AuthContexts"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider> 
          <Switch>
              <Route path="/chats" component={Chats} /> 
            <Route path="/" component={Login} /> 
          </Switch>
        </AuthProvider> 
      </Router>
    </div>
  )
}

export default App
