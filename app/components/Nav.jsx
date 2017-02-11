import React from 'react'
import {IndexLink} from 'react-router'

class Nav extends React.Component {
  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
            <li><IndexLink to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink></li>
          </ul>
        </div>
      </div>
    );
  }
};

module.exports = Nav;
