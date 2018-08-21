import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Title = styled.h2`
  line-height: 52px;
  margin-right: 21px;
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
`;

const Header = () => (
  <header className="header" id="main-navigation">
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Title className="is-size-4">Messages App</Title>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Overview
          </Link>
          <Link className="navbar-item" to="/my-account/">
            My account
          </Link>
          <a
            className="navbar-item"
            href="https://console.firebase.google.com/u/0/project/messages-app-b795a/overview"
          >
            <span>Firebase</span>&nbsp;<span className="icon">
              <i className="fas fa-external-link-alt fa-sm" />
            </span>
          </a>
          <a
            className="navbar-item"
            href="https://github.com/mgorzanski/messages-app"
          >
            <span>GitHub</span>&nbsp;<span className="icon">
              <i className="fas fa-external-link-alt fa-sm" />
            </span>
          </a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="#">
            <span className="icon">
              <i className="fas fa-sign-out-alt" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
