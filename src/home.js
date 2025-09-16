import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="custom-bg min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid">
          <h2 className="text-white">Portfolio</h2>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto">
              <Link className="nav-link d-inline-block mx-2 text-white" to="/">HOME</Link>
              <Link className="nav-link d-inline-block mx-2 text-white" to="/about">ABOUT</Link>
              <Link className="nav-link d-inline-block mx-2 text-white" to="/contact">CONTACT</Link>
              <Link className="nav-link d-inline-block mx-2 text-white" to="/projects">PROJECTS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="row d-flex align-items-center text-white p-4">
        {/* Left Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
          <Outlet />
        </div>

        {/* Right Section (Profile Image) */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/01.jpg`}
            alt="Profile"
            className="rounded-circle border border-3 border-info img-fluid mt-4"
            width="280"
            height="280"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
