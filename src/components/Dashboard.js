import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <div>
        Dashboard
      <div className="fixed-action-btn">
          <Link to={this.props.auth ? '/surveys/new' : '/'} className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Dashboard);
