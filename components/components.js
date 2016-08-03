import React, { Component } from 'react';

let timer;

class Time extends Component {
  render() {
    return <span>{ this.props.time }</span>;
  }
}

class Start extends Component {
  clickHandler() {
    timer = setInterval(this.props.actions.start, 1000);
  }

  render() {
    return <button onClick={this.clickHandler.bind(this)}>Start</button>;
  }
}

class Pause extends Component {
  clickHandler() {
    clearInterval(timer);
    this.props.actions.pause();
  }

  render() {
    return <button onClick={this.clickHandler.bind(this)}>Pause</button>;
  }
}

class Increase extends Component {
  clickHandler() {
    this.props.actions.increase();
  }

  render() {
    return <button onClick={this.clickHandler.bind(this)}>Increase</button>;
  }
}

class Decrease extends Component {
  clickHandler() {
    this.props.actions.decrease();
  }

  render() {
    return <button onClick={this.clickHandler.bind(this)}>Decrease</button>;
  }
}

class Exit extends Component {
  clickHandler() {
    clearTimeout(timer);
    this.props.actions.exit();
  }

  render() {
    return <button onClick={this.clickHandler.bind(this)}>Exit</button>;
  }
}

export {
  Time,
  Start,
  Pause,
  Increase,
  Decrease,
  Exit,
};
