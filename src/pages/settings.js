import React from "react";

const SettingsPage = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Settings</h1>

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>General Options</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>About application informations text:</td>
            <td>
              <textarea className="textarea no-resize"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Application Options</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>About application informations text:</td>
            <td>
              <textarea className="textarea no-resize"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Client Options</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>About application informations text:</td>
            <td>
              <textarea className="textarea no-resize"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="field">
        <button className="button is-success">Save changes</button>
      </div>
    </div>
  </section>
);

export default SettingsPage;