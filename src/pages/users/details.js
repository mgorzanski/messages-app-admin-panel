import React from "react";
import Link from 'gatsby-link';

const DetailsPage = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">User details</h1>
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
            <p>mateusz</p>
          </div>
        </div>
        <div className="field">
          <label className="label">Full name</label>
          <div className="control">
            <p>Mateusz Górzański</p>
          </div>
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <div className="control">
            <p>gorzanski.mateusz@gmail.com</p>
          </div>
        </div>
        <div className="field">
          <label className="label">Last activity</label>
          <div className="control">
            <p>02.09.2018 20:19</p>
          </div>
        </div>
        <div className="field">
          <label className="label">Registration date</label>
          <div className="control">
            <p>02.09.2018 20:19</p>
          </div>
        </div>
        <div className="field">
          <label className="label">Number of contacts</label>
          <div className="control">
            <p>3</p>
          </div>
        </div>
        <div className="field">
          <label className="label">Messages sent</label>
          <div className="control">
            <p>11</p>
          </div>
        </div>
        <div className="field">
          <label className="label">Permissions level</label>
          <div className="control">
            <p>1 (Administrator)</p>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default DetailsPage;
