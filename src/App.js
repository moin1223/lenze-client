import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import Login from  './components/Login/Login'
import PrivateRoute from './components/Login/PrivateRoute'
import Dashboard from './pages/Dashboard'
export const UserContext = createContext();
function App() {
  const [allService,setAllSerVice] = useState([])
  const [show,setShow] = useState()

  return (
    
<UserContext.Provider value={[allService,setAllSerVice,show,setShow]}>
  <Router>
  
    <Switch>
    <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/addAdmin">
          <AddAdmin/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
      
        
      
        <Route path="/dashboard">
           <Dashboard></Dashboard>

          </Route>
   
   
    </Switch>
  </Router>
  </UserContext.Provider>
  
  );
}

export default App;
