import React from "react";

const LogsPage = () => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title">Logs</h1>
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
            <th><span><a className="has-text-black" href="#">Message</a></span><span className="icon has-text-black"><i className="fas fa-sort-up"></i></span></th>
            <th><a className="has-text-black" href="#">Date</a></th>
            <th><a className="has-text-black" href="#">Type</a></th>
            <th><a className="has-text-black" href="#">Level</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample error message</td>
            <td>22-08-2018</td>
            <td>Client</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default LogsPage;