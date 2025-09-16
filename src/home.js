import React from "react";
import { Link, Outlet } from "react-router-dom";


function Home (prop){
   

    return (
        <>

 <div className="custom-bg">
    <div className="row ">
        <h2 className="mt-2" style={{marginLeft:"50px"}}>Protfolio</h2>
         <div className="navbar-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/projects">PROJECTS</Link>
            </div>
       <div className="col-lg-6 main-row  text-white ">
         <Outlet></Outlet>
       </div>
       <div className="col-lg-6   text-white mt-5 ">
           
            <div className="text-center mt-5" >
                <img
                    src={`${process.env.PUBLIC_URL}/01.jpg`}  // replace with your image URL or import
                    alt="Profile"
                    className="rounded-circle border border-3 border-info img-fluid"
                    width="280"
                    height="280"
                />
           </div>
        </div>
       
    </div>
</div>
        </>
    )
}
export default Home;