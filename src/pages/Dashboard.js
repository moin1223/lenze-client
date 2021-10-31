import React, { useContext } from 'react';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import { UserContext } from '../App';
import Sidebar from '../../src/components/Dashboard/Sidebar/Sidebar'
import DashboardNabvar from '../components/Dashboard/DashboardNabvar/DashboardNabvar';
import AddService from '../components/Dashboard/AddService/AddService';
import ManageService from '../components/Dashboard/ManageService/ManageService';
import UpdateService from '../components/Dashboard/UpdateService/UpdateService'
import AddAdmin from '../components/Dashboard/AddAdmin/AddAdmin';
import AddReview from '../components/Dashboard/AddReview/AddReview';
import Booking from '../components/Dashboard/Booking/Booking';
import OrderList from '../components/Dashboard/OrderList/OrderList';
import MyOrders from '../components/Dashboard/MyOrders/MyOrders';
import Profile from '../components/Dashboard/Profile/Profile'
<Switch></Switch>

const Dashboard = () => {

  const [show] = useContext(UserContext)

  return (
    <>

      <DashboardNabvar />
      <div className="row">
        {show ?
          <Sidebar />
          :
          null
        }

        <Route path="/dashboard/addService">
          <AddService />
        </Route>
        <Route path="/dashboard/manageService">
          <ManageService />
        </Route>
        <Route path="/dashboard/addAdmin">
          <AddAdmin />
        </Route>
        <Route path="/dashboard/addReview">
          <AddReview />
        </Route>
        <Route path="/dashboard/edit/:id">
          <UpdateService />
        </Route>
        <Route path="/dashboard/booking/:id">
          <Booking />
        </Route>
        <Route path="/dashboard/Orderlist">
          <OrderList />
        </Route>
        <Route path="/dashboard/MyOrders">
          <MyOrders />
        </Route>
        <Route path="/dashboard/Profile">
          <Profile />
        </Route>

      </div>

    </>
  );
};

export default Dashboard;