import React, { Component } from 'react'

let timer
class Time extends Component {
  render() {
    return <span>{ this.state.time }</span>
  }
}

class Start extends Component {
  render() {
    return <button onClick={ this.clickHandler }>Start</button>
  }

  clickHandler() {
    while (!this.props.state.time) {
      timer = setTimeout(this.props.start, 1000)
    }
  }
}

class Pause extends Component {
  render() {
    return <button onClick={ this.clickHandler }>Pause</button>
  }

  clickHandler() {
    clearTimeout(timer)
    this.props.actions.pause()
  }
}

class Increase extends Component {
  render() {
    return <button onClick={ this.clickHandler }>Increase</button>
  }

  clickHandler() {
    this.props.actions.increase()
  }
}

class Decrease extends Component {
  render() {
    return <button onClick={ this.clickHandler }>Decrease</button>
  }

  clickHandler() {
    this.props.actions.decrease()
  }
}

class Exit extends Component {
  render() {
    return <button onClick={ this.clickHandler }>Exit</button>
  }

  clickHandler() {
    clearTimeout(timer)
    this.props.actions.exit()
  }
}

export default Time
export default Start
export default Pause
export default Increase
export default Decrease
export default Exit
