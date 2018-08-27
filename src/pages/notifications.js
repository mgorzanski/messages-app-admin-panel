import React from "react";

const NotificationsPage = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Notifications</h1>

      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input" type="text" placeholder="New notification..." />
        </div>
        <div className="control">
          <button className="button is-warning">Send</button>
        </div>
      </div>

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Example notification</td>
            <td>23-08-2018</td>
            <td>
              <div className="is-pulled-right">
                <a className="button is-warning">
                  <span className="icon">
                    <i className="fas fa-redo"></i>
                  </span>
                  <span>Resend</span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default NotificationsPage;
