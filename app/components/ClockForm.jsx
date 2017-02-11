import React from 'react'

class ClockForm extends React.Component {
  constructor(props){
    super(props);
    this.submitCountDown = this.submitCountDown.bind(this);
  }
  submitCountDown(e){
    e.preventDefault();
    var secs = this.refs.seconds.value;
    this.refs.seconds.value = 1;
    this.props.submitSeconds(parseInt(secs));
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submitCountDown}>
          <div className="row">
            <div className="medium-12 columns">
              <label>
                <input type="number" min="1" placeholder="Start countdown from" ref="seconds" required/>
              </label>
            </div>
            <div className="columns medium-12 medium-centered">
              <button type="submit" className="button columns" ref="totalSeconds">Start</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

module.exports = ClockForm;
