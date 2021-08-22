import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home';
import AddService from './components/Dashboard/AddService/AddService';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import Checkout from './components/Checkout/Checkout';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import OrderList from './components/Dashboard/OrderList/OrderList';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import Login from  './components/Login/Login'
import Header from './components/Home/Header/Header';
import PrivateRoute from './components/Login/PrivateRoute'
export const UserContext = createContext();


function App() {
  const [allService,setAllSerVice] = useState([])

  return (
    
<UserContext.Provider value={[allService,setAllSerVice]}>
  <Router>
    <Header/>
    <Switch>
    <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/serviceDetail/:_id">
          <ServiceDetail/>
        </Route>
        <PrivateRoute path="/checkout/:_id">
          <Checkout/>
        </PrivateRoute>
        <Route path="/sideBar">
          <Sidebar/>
        </Route>
        <Route path="/addService">
          <AddService/>
        </Route>
        <Route path="/orderList">
          <OrderList/>
        </Route>
        <Route path="/myOrder">
          <MyOrders/>
        </Route>
        <PrivateRoute path="/addAdmin">
          <AddAdmin/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
   
   
    </Switch>
  </Router>
  </UserContext.Provider>
  
  );
}

export default App;
