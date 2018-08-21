import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: calc(100vh - 52px);
`;

const Menu = styled.ul`
  list-style: none;
  padding: 10px 0 0 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 0 26px 0 26px;
  padding: 11px 0 11px 0;
  border-bottom: 1px solid hsl(0, 0%, 29%);
`;

const MenuItemLink = styled.a`
  color: #fff;
  font-family: "Oxygen", sans-serif;
  font-size: 1.1rem;

  &:hover {
    text-decoration: none;
    color: hsl(0, 0%, 86%);
  }
`;

const Sidebar = () => (
  <div className="sidebar" id="sidebar">
    <Nav className="has-background-dark">
      <Menu>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-primary">
              <i className="fas fa-chart-line" />
            </span>&nbsp;&nbsp;<span>Statistics</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon">
              <i className="fas fa-users" />
            </span>&nbsp;&nbsp;<span>Users</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-warning">
              <i className="far fa-bell" />
            </span>&nbsp;&nbsp;<span>Notifications</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-grey-lighter">
              <i className="far fa-file-alt" />
            </span>&nbsp;&nbsp;<span>Logs</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-danger">
              <i className="fas fa-cog" />
            </span>&nbsp;&nbsp;<span>Settings</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-link">
              <i className="far fa-list-alt" />
            </span>&nbsp;&nbsp;<span>Threads</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-success">
              <i className="far fa-address-card" />
            </span>&nbsp;&nbsp;<span>Invitations</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>
            <span className="icon has-text-danger">
              <i className="far fa-flag" />
            </span>&nbsp;&nbsp;<span>Reports</span>
          </MenuItemLink>
        </MenuItem>
      </Menu>
    </Nav>
  </div>
);

export default Sidebar;
