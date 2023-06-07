import React from "react";
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link to={"/"}
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
           ADMIN POST
        </div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link to={"/"} className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>DASHBOARD</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link to={"/"}
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog" />
          <span>MANAGER POSTS</span>
        </Link>
        
      </li>
     
    </ul>
  );
};

export default Sidebar;
