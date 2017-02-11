import React from 'react'
import Clock from 'Clock'
import ClockForm from 'ClockForm'

class Countdown extends React.Component {
  constructor(props){
    super(props);
    this.startCountDown = this.startCountDown.bind(this);
    this.state = {
      totalSeconds : 0
    };
  }
  startCountDown(totalSeconds){
    this.setState({
      totalSeconds : totalSeconds
    });
    setInterval(() => {
      if(this.state.totalSeconds > 0){
        this.setState({
          totalSeconds : (this.state.totalSeconds - 1)
        });
      }
    },1000);
  }
  render(){
    return(
      <div className="row">
        <div className="small-4 columns small-centered">
          <Clock totalSeconds={this.state.totalSeconds} />
          <ClockForm submitSeconds={this.startCountDown} />
        </div>
      </div>
    );
  }
};

module.exports = Countdown;
