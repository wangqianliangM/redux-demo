import React, { Component, PropTypes } from 'react'
import { Time, Increse, Decrease, Start, Pause, Exit } from '../components.js'
class Mainsection extends Component {
  constructor(props, context) {
    super(props, context)

  }

  render() {
    return <div>
             <Time /><Increase /><Decrease /><Start /><Pause /><Exit />
           </div>
  }
}
