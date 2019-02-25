import React, { Component } from 'react';

class Timer extends Component {

  render () {
    let minutes = Math.floor(this.props.time / 60);
    let seconds = this.props.time % 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let perc = (this.props.time / 180) * 100;

    return (
      <div className="timer">
        <div>First timer</div>
        <div>{minutes}:{seconds}</div>
        <div className="progress-bar"
            onClick={ () => this.props.onTimerReset() }>
          <div className="progress" style={{ width: `${perc}%` }}></div>
        </div>
      </div>
    );
  }
}

export default Timer;
