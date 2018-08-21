import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-left">
        <h1 className="title">Statistics</h1>
        </div>
        <div className="level-right">
          <span className="icon"><i className="fas fa-sync"></i></span>
        </div>
      </div>

      <div className="columns">
        <div className="column is-3">
          <div className="notification is-primary">
            <h2 className="is-size-5">Active users</h2>
            <p className="is-size-2">0</p>
          </div>
        </div>

        <div className="column is-5">
          <div className="notification">
            <h2 className="is-size-5">Usage graph</h2>
          </div>
        </div>

        <div className="column is-4">
          <div className="notification is-warning">
            <h2 className="is-size-5">Statistics</h2>

            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">Messages sent:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">Threads created:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">Users registered:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">Last registration date:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">Last authentication time:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">Reports:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
            <div className="level is-marginless">
              <div className="level-left">
                <span className="is-size-6">The most active users:</span>
              </div>
              <div className="level-right">
                <span className="is-size-6">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
