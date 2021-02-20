import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login w/ Google</a></li>;
      default:
        return [
        <li key="1"><Payments /></li>,
        <li key="2" style={{ margin: '0 0 0 10px' }}>Credits: {this.props.auth.credits}</li>,
        <li key="3"><a href="/api/logout">Logout</a></li>
      ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link 
              to={this.props.auth ? "/surveys" : "/"} 
              className="brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);
