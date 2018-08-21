import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import "./index.scss";

const Layout = ({ children, data }) => (
  <div id="app">
    <Helmet title={data.site.siteMetadata.title} />
    <Header />
    <main className="main columns" id="main">
      <div className="column is-2">
        <Sidebar />
      </div>
      <div className="column">{children()}</div>
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
