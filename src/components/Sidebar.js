import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: calc(100vh - 52px);
`;

const Menu = styled.ul`
  list-style: none;
  padding: 6px 0 0 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 0 18px 0 18px;
  padding: 8px 0 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 29%);
`;

const MenuItemLink = styled.a`
  color: #fff;
  font-family: 'Oxygen', sans-serif;
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
        <MenuItem><MenuItemLink>Start</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Users</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Notifications</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Logs</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Settings</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Threads</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Invitations</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink>Reports</MenuItemLink></MenuItem>
      </Menu>
    </Nav>
  </div>
);

export default Sidebar;