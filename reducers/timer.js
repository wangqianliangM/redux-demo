import { START, PAUSE, INCREASE, DECREASE, EXIT } from '../constants/ActionTypes'

const initialState = [
  {
    time: 0,
    currentState: 'pause'
  }
]

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        time: state.time > 0 ? -- state.time : 0,
        currentState: 'start'
      }

    case PAUSE:
      return {
        time: state.time,
        currentState: 'pause'
      }

    case INCREASE:
      return {
        time: ++ state.time,
        currentState: state.currentState
      }

    case DECREASE:
      return {
        time: state.time > 0 ? -- state.time : 0,
        currentState: state.currentState
      }

    case EXIT:
      return {
        time: 0,
        currentState: 'pause'
      }
  }
}
