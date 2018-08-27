import React from "react";

const BackupsPage = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Backups</h1>

      <h3 className="title is-4">27-08-2018</h3>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="backups-table-td">Threads database file</td>
            <td>
              <div className="field is-grouped is-pulled-right">
                <p className="control">
                  <a className="button is-text">Download</a>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="backups-table-td">Users database file</td>
            <td>
              <div className="field is-grouped is-pulled-right">
                <p className="control">
                  <a className="button is-text">Download</a>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="title is-4">27-08-2018</h3>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="backups-table-td">Threads database file</td>
            <td>
              <div className="field is-grouped is-pulled-right">
                <p className="control">
                  <a className="button is-text">Download</a>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="backups-table-td">Users database file</td>
            <td>
              <div className="field is-grouped is-pulled-right">
                <p className="control">
                  <a className="button is-text">Download</a>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default BackupsPage;
