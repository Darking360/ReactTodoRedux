import React from 'react'
import Clock from 'Clock'

class Timer extends React.Component {
  render(){
    return(
      <div>
        <Clock totalSeconds={62} />
      </div>
    );
  }
};

module.exports = Timer;
