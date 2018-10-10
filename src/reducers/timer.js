import { ActionTypes } from '../actions/timer';

const initialState = {
    duration: 0,
    workTime: 0,
    intervalTime: 0,
    isInterval: false,
}

const audioContext = new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.START_TIMER:
            return {
                ...state,
                duration: action.workTime,
                workTime: action.workTime,
                intervalTime: action.intervalTime,
                isInterval: false,
            }

        case ActionTypes.STOP_TIMER:
            return {
                ...initialState,
            }

        case ActionTypes.TIMER_TICK:
            if (state.duration <= 0) {
                // const audio = new Audio('beep.mp3');
                // audio.play();
                beep(10, 2000, 500)
                navigator.vibrate(200);
            }
            return {
                ...state,
                isInterval: state.duration <= 0 ? !state.isInterval : state.isInterval,
                duration: state.duration <= 0 ? (state.isInterval ? state.workTime : state.intervalTime) : state.duration - 1,
            }

        default:
            return state
    }
}

function beep(vol, freq, duration) {
    const v = audioContext.createOscillator()
    const u = audioContext.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(audioContext.destination)
    u.gain.value = vol * 0.01
    v.start(audioContext.currentTime)
    v.stop(audioContext.currentTime + duration * 0.001)
}