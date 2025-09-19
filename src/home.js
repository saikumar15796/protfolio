import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home(prop) {
  return (
    <>
      <div className="custom-bg container-fluid">
        {/* Navbar Section */}
        <div className="row align-items-center py-3">
          <div className="col-12 col-md-6">
            <h2 className="text-white ms-md-5 text-center text-md-start">
              Portfolio
            </h2>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
            <div className="navbar-links d-flex gap-3">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="/projects">PROJECTS</Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row align-items-center text-white py-5">
          {/* Left Section (Text/Outlet) */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start px-4">
            <Outlet />
          </div>

          {/* Right Section (Profile Image) */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/01.jpg`}
              alt="Profile"
              className="rounded-circle border border-3 border-info img-fluid"
              style={{ maxWidth: "220px", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
