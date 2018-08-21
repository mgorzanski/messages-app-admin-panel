import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

const Title = styled.h2`
  line-height: 52px;
  margin-right: 21px;
  margin-left: 10px;
  font-family: 'Poppins', sans-serif;
`;

const Header = () => (
  <header className="header" id="main-navigation">
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand"><Title className="is-size-4">Messages App</Title></div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">Overview</a>
          <a className="navbar-item" href="#">My account</a>
          <a className="navbar-item" href="#"><span>Firebase</span>&nbsp;<span className="icon"><i className="fas fa-external-link-alt fa-sm"></i></span></a>
          <a className="navbar-item" href="#"><span>GitHub</span>&nbsp;<span className="icon"><i className="fas fa-external-link-alt fa-sm"></i></span></a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="#"><span className="icon"><i className="fas fa-sign-out-alt"></i></span></a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
