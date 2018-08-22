import React from "react";
import Link from 'gatsby-link';

const CreateAUserPage = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Create a user</h1>
      <h2 className="subtitle">
        <Link to="/users/" className="has-text-black">
          <span className="icon">
            <i className="fas fa-arrow-left"></i>
          </span>
          <span>Back</span>
        </Link>
      </h2>

      <section className="section">
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" placeholder="Username" />
          </div>
        </div>
        <div className="field">
          <label className="label">Full name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Full name" />
          </div>
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <div className="control">
            <input className="input" type="email" placeholder="E-mail" />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" />
          </div>
        </div>
        <div className="field">
          <label className="label">Repeat password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Repeat password" />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <a className="button is-success">Submit</a>
          </div>
          <div className="control">
            <a className="button is-warning">Reset</a>
          </div>
          <div className="control">
            <a className="button is-danger">Cancel</a>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default CreateAUserPage;
