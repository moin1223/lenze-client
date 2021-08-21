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
export const UserContext = createContext();


function App() {
  const [allService,setAllSerVice] = useState([])

  return (
    
<UserContext.Provider value={[allService,setAllSerVice]}>
  <Router>
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
        <Route path="/checkout/:_id">
          <Checkout/>
        </Route>
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
        <Route path="/addAdmin">
          <AddAdmin/>
        </Route>
       
       
   
   
    </Switch>
  </Router>
  </UserContext.Provider>
  
  );
}

export default App;
