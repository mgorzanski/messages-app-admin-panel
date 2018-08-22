import React from "react";

const Sidebar = () => (
  <div className="sidebar" id="sidebar">
    <nav className="sidebar-nav has-background-dark">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-primary">
              <i className="fas fa-chart-line" />
            </span>&nbsp;&nbsp;<span>Statistics</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon">
              <i className="fas fa-users" />
            </span>&nbsp;&nbsp;<span>Users</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-warning">
              <i className="far fa-bell" />
            </span>&nbsp;&nbsp;<span>Notifications</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-grey-lighter">
              <i className="far fa-file-alt" />
            </span>&nbsp;&nbsp;<span>Logs</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-danger">
              <i className="fas fa-cog" />
            </span>&nbsp;&nbsp;<span>Settings</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-link">
              <i className="far fa-list-alt" />
            </span>&nbsp;&nbsp;<span>Threads</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-success">
              <i className="far fa-address-card" />
            </span>&nbsp;&nbsp;<span>Invitations</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-item-link">
            <span className="icon has-text-danger">
              <i className="far fa-flag" />
            </span>&nbsp;&nbsp;<span>Reports</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
