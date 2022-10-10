import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand ms-3" href="#">
        <img src={logo} alt="logo" style={{ width:'35px'}}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-5" href="#">
              Home <AiOutlineHome className="home-icon"/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white text-uppercase ml-5" href="#">
              news
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white text-uppercase ml-5" href="#">
              contact us
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 ms-auto d-flex">
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;