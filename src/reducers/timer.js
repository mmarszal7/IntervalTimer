import { combineReducers } from "redux";
import { ActionTypes } from "../actions/timer";
import { beep } from "../utils/beep";

const initialState = {
  duration: 0,
  timerSetup: null,
  isInterval: false,
  timerPaused: true,
  cycle: 0
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_TIMER:
      return {
        ...state,
        duration: action.timerSetup.workTime,
        timerSetup: action.timerSetup,
        isInterval: false,
        timerPaused: false
      };

    case ActionTypes.STOP_TIMER:
      return {
        ...initialState
      };

    case ActionTypes.PAUSE_TIMER:
      return {
        ...state,
        timerPaused: !state.timerPaused
      };

    case ActionTypes.TIMER_TICK:
      if (state.timerPaused) {
        return {
          ...state
        };
      }

      if (state.duration === 1) {
        beep(10, 2000, 500);
        navigator.vibrate(200);
      }

      if (state.duration <= 0) {
        return {
          ...state,
          duration: state.isInterval ? state.timerSetup.workTime : state.timerSetup.intervalTime,
          isInterval: !state.isInterval,
          cycle: state.isInterval ? state.cycle + 1 : state.cycle
        };
      } else {
        return {
          ...state,
          duration: state.duration - 1
        };
      }

    default:
      return state;
  }
};

export default combineReducers({
  timer: timerReducer
});
