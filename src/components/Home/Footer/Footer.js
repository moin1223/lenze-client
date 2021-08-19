import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { AiFillHome,AiOutlineMessage,AiFillPhone,AiOutlineWhatsApp} from "react-icons/ai";

const Footer = () => {


    return (



        <footer className="bg-light text-dark pt-5 pb-4">

            <div className="container text-center text-md-left">

                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">About Us</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim minim veniam,  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Let Us Help</h5>

                        <p>
                            <p className="text-dark" > Your Account</p>
                        </p>
                        <p>
                            <p className="text-dark" > Your Orders</p>
                        </p>
                        <p>
                            <p className="text-dark" > Manage Your Content and Devices</p>
                        </p>
                        <p>
                            <p className="text-dark" > Help</p>
                        </p>

                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Add as a PhotoGraper</h5>

                        <p>
                            <p className="text-dark"> Lorem ipsum dolor sit amet</p>
                        </p>
                        <p>
                            <p className="text-dark" > Lorem ipsum dolor sit amet</p>
                        </p>
                        <p>
                            <p className="text-dark" >Lorem ipsum dolor sit amet</p>
                        </p>
                        <p>
                            <p className="text-dark" > Lorem ipsum dolor sit amet</p>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info" >Contact</h5>

                        <p className="">
                        <i className="me-3">< AiFillHome/></i>chittagong,Bangladesh
                        </p>
                        <p>
                            <i className="me-3"><AiOutlineMessage/></i>moinpuccs@gmail.com
                        </p>
                        <p>
                            <i className="me-3"><AiFillPhone/></i>01840010215
                        </p>
                        <p>
                            <i className="me-3"><AiOutlineWhatsApp/></i>01840010215
                        </p>
                    </div>

                </div>


                <div className=" row d-flex justify-content-center">
                    <div>
                        <p>	Copyright ©2021 All rights reserved by:
                            <p >
                                <strong className="text-info">Lenze</strong>
                            </p>
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="text-center ">

                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <AiFillTwitterCircle />
                            </li>
                            <li className="list-inline-item">
                                <AiFillGoogleCircle />
                            </li>
                            <li className="list-inline-item">
                                <AiFillLinkedin />
                            </li>
                            <li className="list-inline-item">
                             <AiFillFacebook />  
                            </li>
                        </ul>
                    </div>

                </div>

            </div>



        </footer>





    );
};

export default Footer;