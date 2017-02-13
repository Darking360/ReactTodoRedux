import React from 'react'

class ClockControls extends React.Component {
  constructor(props){
    super(props);
  }
  toggleTimer(){
    this.props.toggleTimer();
  }
  clearTimer(){
    this.props.clearTimer();
  }
  render(){
    return(
      <div className="row">
        <div className="small-6 small-offset-5 colums centered">
          <button type="button" className="button" style={{"marginRight":"1em"}} onClick={this.toggleTimer.bind(this)}>
            {this.props.buttonText}
          </button>
          <button type="button" className="button alert" onClick={this.clearTimer.bind(this)}>
            Clear
          </button>
        </div>
      </div>
    );
  }
};

module.exports = ClockControls;
