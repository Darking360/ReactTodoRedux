import React from 'react'
import Clock from 'Clock'
import ClockControls from 'ClockControls'

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buttonText : "Start",
      totalSeconds : 0,
      timerStarted : false
    };
    this.clearTimer = this.clearTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }
  clearTimer(){
    clearInterval(this.timer);
    this.timer = undefined;
    this.setState({
      totalSeconds : 0,
      timerStarted : false
    });
  }
  toggleTimer(){
    this.setState({
      timerStarted : !this.state.timerStarted
    });
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.timerStarted != this.state.timerStarted){
      switch(this.state.timerStarted){
        case true:
          this.timer = setInterval(() => {
            this.setState({
              totalSeconds : (this.state.totalSeconds + 1)
            });
          },1000);
          this.setState({
            buttonText : "Pause"
          });
          break;
        case false:
          clearInterval(this.timer);
          this.setState({
            buttonText : "Start"
          });
          break;
      }
    }
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = undefined;
    console.log("Bye");
  }
  render(){
    return(
      <div>
        <Clock totalSeconds={this.state.totalSeconds}/>
        <ClockControls toggleTimer={this.toggleTimer} clearTimer={this.clearTimer} buttonText={this.state.buttonText}/>
      </div>
    );
  }
};

module.exports = Timer;
