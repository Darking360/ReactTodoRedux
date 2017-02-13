import React from 'react'
import Clock from 'Clock'
import ClockForm from 'ClockForm'
import ClockControls from 'ClockControls'

class Countdown extends React.Component {
  constructor(props){
    super(props);
    this.startCountDown = this.startCountDown.bind(this);
    this.conditionalRenderControls = this.conditionalRenderControls.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.state = {
      totalSeconds : 0,
      timerStarted : false,
      countdownStarted : false
    };
  }
  clearTimer(){
    clearInterval(this.timer);
    this.timer = undefined;
    this.setState({
      totalSeconds : 0,
      timerStarted : false,
      countdownStarted : false
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
            if(this.state.totalSeconds > 0){
              this.setState({
                totalSeconds : (this.state.totalSeconds - 1)
              });
            }else if(this.state.totalSeconds == 0){
              this.clearTimer();
            }
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
  startCountDown(totalSeconds){
    this.setState({
      totalSeconds : totalSeconds,
      countdownStarted : true,
      timerStarted : true
    });
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = undefined;
    console.log("Bye");
  }
  conditionalRenderControls(){
    if(!this.state.countdownStarted){
      return <ClockForm submitSeconds={this.startCountDown} />
    }else{
      return <ClockControls toggleTimer={this.toggleTimer} clearTimer={this.clearTimer} buttonText={this.state.buttonText}/>
    }
  }
  render(){
    return(
      <div className="row">
        <div className="small-4 columns small-centered">
          <Clock totalSeconds={this.state.totalSeconds} />
          {this.conditionalRenderControls()}
        </div>
      </div>
    );
  }
};

module.exports = Countdown;
