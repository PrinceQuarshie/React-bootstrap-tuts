import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

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
        <span>
            <FaBars style={{ color: '#fff'}}/>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home <AiOutlineHome className="home-icon"/>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase ml-5" to="/news">
              news
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">
              contact us
            </Link>
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