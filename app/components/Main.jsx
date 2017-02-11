import React from 'react'
import Nav from './Nav'

class Main extends React.Component {
  render(){
    return(
      <section>
        <Nav />
        {this.props.children}
      </section>
    );
  }
};

module.exports = Main;
