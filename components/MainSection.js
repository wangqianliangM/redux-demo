import React, { Component, PropTypes } from 'react';
import { Time, Increase, Decrease, Start, Pause, Exit } from './components';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      time: 0,
      currentState: 'pause',
    };
  }

  render() {
    const { actions } = this.props;
    return (<div>
              <Time time={this.props.time} /><Increase actions={actions} />
              <Decrease actions={actions} /><Start actions={actions} />
              <Pause actions={actions} /><Exit actions={actions} />
           </div>);
  }
}

MainSection.propTypes = {
  time: PropTypes.number.isRequired,
  currentState: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default MainSection;
