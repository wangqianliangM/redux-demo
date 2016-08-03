import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as Actions from '../actions';

class App extends Component {
  render() {
    const { time, currentState, actions } = this.props;
    return <MainSection time={time} currentState={currentState} actions={actions} />;
  }
}

function mapStateToProps(state) {
  return {
    time: state.timer.time,
    currentState: state.timer.currentState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
