export const ActionTypes = {
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  TIMER_TICK: "TIMER_TICK",
  PAUSE_TIMER: "PAUSE_TIMER"
};

export const tick = () => ({
  type: ActionTypes.TIMER_TICK
});

export const startTimer = timerSetup => ({
  type: ActionTypes.START_TIMER,
  timerSetup
});

export const stopTimer = () => ({
  type: ActionTypes.STOP_TIMER
});

export const pauseTimer = () => ({
  type: ActionTypes.PAUSE_TIMER
});
