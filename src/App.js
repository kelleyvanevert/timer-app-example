import React, { Component } from 'react';
import './App.css';

import Timer from "./components/Timer"

class App extends Component {

  state = {
    timers: [
      { id: "a", time: 56 },
      { id: "b", time: 180},
      { id: "c", time: 61 },
      { id: "d", time: 120},
    ]
  }

  componentDidMount () {
    this.tick();
  }

  tick () {
    
    this.setState({
      timers: this.state.timers.map(
        timerObject => ({
          id: timerObject.id,
          time: Math.max(0, timerObject.time - 10),
        })
      ),
    });

    setTimeout(() => {
      this.tick();
    }, 1000)
  }

  reset () {
    this.setState({
      timers: this.state.timers.map(timerObject => ({
        id: timerObject.id,
        time: 180,
      })),
    })
  }

  resetSingleTimer (timerObject) {
    this.setState({
      timers: this.state.timers.map(
        timer => (timer === timerObject)
          ? { ...timer, time: 180 }
          : timer
      ),
    })

//    let timers = this.state.timers.slice();
//    
//    let i = timers.indexOf(timerObject)
//    timers.splice(i, 1, {
//      id: timerObject.id,
//      time: 180,
//    });
//
//    this.setState({
//      timers: timers,
//    })
  }

  render () {
    return (
      <div>
        <button
          onClick={ () => this.reset() }
        >Reset ALL</button>
        {this.state.timers.map(timerObject =>
        <Timer
          time={timerObject.time}
          onTimerReset={ () => this.resetSingleTimer(timerObject) }
        />
        )}
      </div>
    );
  }
}

export default App;
