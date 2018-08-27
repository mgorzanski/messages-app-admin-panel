import React from "react";
import Link from 'gatsby-link';

const ReportsPage = () => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title">Reports</h1>
        </div>
        <div className="level-right">
          &nbsp;&nbsp;
          <span className="icon">
            <i className="fas fa-sync" />
          </span>
        </div>
      </div>

      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>Type</th>
            <th>Report</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link className="has-text-dark" to="/users/details/3824732984">mateusz</Link></td>
            <td>Message</td>
            <td>Test report message</td>
            <td>27-8-2018</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default ReportsPage;