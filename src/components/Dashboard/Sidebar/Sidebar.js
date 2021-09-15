import React from 'react'; 
import { CgProfile } from "react-icons/cg";
import { GoListUnordered } from "react-icons/go";
import { AiFillFolderAdd } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { RiHome8Line } from "react-icons/ri";
import { Link } from 'react-router-dom';





const Sidebar = () => {
 


  return (
    <>

     

  <div className=" col-md-3 col-sm-3 col-6 container bg-success bg-gradient">
  <ul class="nav flex-column">
    <li className="mt-4">
      <CgProfile fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/dashboard/prifle"><b>Profile</b></Link>
    </li>
    <li className="mt-4">
    <AiFillFolderAdd fontSize="2em" /><Link className="text-decoration-none text-dark m-2" to="/dashboard/addService"><b>AddService</b></Link>
    </li>
     
    <li className="mt-4">
      <AiFillFolderAdd fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/dashboard/addReview"><b>Add Review</b></Link>
    </li>
    <li className="mt-4">
      <IoMdPersonAdd fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/dashboard/addAdmin"><b>MakeAdmin</b></Link>
    </li>
    <li className="mt-4">
    <GoListUnordered fontSize="2em"/> <Link className="text-decoration-none text-dark m-2" to="/dashboard/Orderlist"><b>OrderList</b></Link>
    </li>
    <li className="mt-4">
      <GoListUnordered fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/dashboard/manageService"><b>ManageService</b></Link>
    </li>
    <li className="mt-4">
      <RiHome8Line fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/home"><b>Back to Home</b></Link>
    </li>
  </ul>

  


</div>


      
     




    </>

  );
};

export default Sidebar;