import React from "react";
import Link from 'gatsby-link';

const UsersPage = () => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title">Users</h1>
        </div>
        <div className="level-right">
          <Link className="button is-success" to="/users/create-a-user/">
            <span className="icon"><i className="fas fa-user-plus"></i></span>
            <span>Create a user</span>
          </Link>
          &nbsp;&nbsp;
          <span className="icon">
            <i className="fas fa-sync" />
          </span>
        </div>
      </div>

      <div className="columns">
        <div className="column is-12">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Full name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="users-table-td">1</td>
                <td className="users-table-td">mateusz</td>
                <td className="users-table-td">Mateusz Górzański</td>
                <td>
                  <div className="field is-grouped is-pulled-right">
                    <p className="control">
                      <a className="button is-warning is-outlined">Edit</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-outlined">Delete</a>
                    </p>
                    <p className="control">
                      <a className="button is-info is-outlined">Block</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-outlined">Downgrade permissions</a>
                    </p>
                    <p className="control">
                      <a className="button is-success is-outlined">Reset password</a>
                    </p>
                    <p className="control">
                      <a className="button is-outlined">Details</a>
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="users-table-td">1</td>
                <td className="users-table-td">mateusz</td>
                <td className="users-table-td">Mateusz Górzański</td>
                <td>
                  <div className="field is-grouped is-pulled-right">
                    <p className="control">
                      <a className="button is-warning is-outlined">Edit</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-outlined">Delete</a>
                    </p>
                    <p className="control">
                      <a className="button is-info is-outlined">Block</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-outlined">Downgrade permissions</a>
                    </p>
                    <p className="control">
                      <a className="button is-success is-outlined">Reset password</a>
                    </p>
                    <p className="control">
                      <a className="button is-outlined">Details</a>
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="users-table-td">1</td>
                <td className="users-table-td">mateusz</td>
                <td className="users-table-td">Mateusz Górzański</td>
                <td>
                  <div className="field is-grouped is-pulled-right">
                    <p className="control">
                      <a className="button is-warning is-outlined">Edit</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-outlined">Delete</a>
                    </p>
                    <p className="control">
                      <a className="button is-info is-outlined">Block</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-outlined">Downgrade permissions</a>
                    </p>
                    <p className="control">
                      <a className="button is-success is-outlined">Reset password</a>
                    </p>
                    <p className="control">
                      <a className="button is-outlined">Details</a>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default UsersPage;
