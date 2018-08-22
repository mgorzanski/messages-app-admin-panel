import React from "react";
import Link from "gatsby-link";

const Sidebar = () => (
  <div className="sidebar" id="sidebar">
    <nav className="sidebar-nav has-background-dark">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/">
            <span className="icon has-text-primary">
              <i className="fas fa-chart-line" />
            </span>&nbsp;&nbsp;<span>Statistics</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/users/">
            <span className="icon">
              <i className="fas fa-users" />
            </span>&nbsp;&nbsp;<span>Users</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/notifications/">
            <span className="icon has-text-warning">
              <i className="far fa-bell" />
            </span>&nbsp;&nbsp;<span>Notifications</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/logs/">
            <span className="icon has-text-grey-lighter">
              <i className="far fa-file-alt" />
            </span>&nbsp;&nbsp;<span>Logs</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/settings/">
            <span className="icon has-text-danger">
              <i className="fas fa-cog" />
            </span>&nbsp;&nbsp;<span>Settings</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/threads/">
            <span className="icon has-text-link">
              <i className="far fa-list-alt" />
            </span>&nbsp;&nbsp;<span>Threads</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/invitations/">
            <span className="icon has-text-success">
              <i className="far fa-address-card" />
            </span>&nbsp;&nbsp;<span>Invitations</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link className="sidebar-menu-item-link" to="/reports/">
            <span className="icon has-text-danger">
              <i className="far fa-flag" />
            </span>&nbsp;&nbsp;<span>Reports</span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
