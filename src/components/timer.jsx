import React from "react";
import { connect } from "react-redux";
import { startTimer, stopTimer, pauseTimer, tick } from "../actions/timer";
import { timerFormatter } from "../utils/timerFormatter";
import { TimerSetup } from "../models/timer-setup";

let startUp = true;

const Timer = ({ duration, timerSetup, isInterval, timerPaused, cycle, dispatch }) => {
  if (startUp) {
    setInterval(() => dispatch(tick()), 1000);
    startUp = false;
  }

  return (
    <div className="wrapper">
      <div className={"carousel " + (timerSetup ? "is-set" : "")}>
        <div className={"timerForm "}>
          <h1 className="text-center">Settings</h1>
          <form>
            <div className="form-group">
              <label>Workout time [seconds]</label>
              <input type="text" className="form-control" ref={input => (this.secondsInput = input)} defaultValue={75} />
            </div>
            <div className="form-group">
              <label>Interval time [seconds]</label>
              <input type="text" className="form-control" ref={input => (this.intervalInput = input)} defaultValue={15} />
            </div>
          </form>
          <button className="btn btn-primary col-6 offset-3" onClick={() => dispatch(startTimer(new TimerSetup(this.secondsInput.value, this.intervalInput.value)))}>
            Start
          </button>
        </div>

        <div className={"timer " + (timerPaused ? "text-secondary" : "")}>
          <span className="cycles">
            Finished cycles: {cycle} {isInterval || timerSetup === null ? "" : `(${timerFormatter(cycle * timerSetup.workTime + (timerSetup.workTime - duration))})`}
          </span>
          <span className={"duration mb-3 " + (isInterval ? "text-info" : "")}>
            {timerFormatter(duration)} {isInterval ? "(interval)" : ""}
          </span>
          <button className={"btn btn-primary col-3 offset-3 " + (timerPaused ? "btn-warning" : "")} onClick={() => dispatch(pauseTimer())}>
            {timerPaused ? "Replay" : "Pause"}
          </button>
          <button className="btn btn-danger col-3 ml-2" onClick={() => dispatch(stopTimer())}>
            Stop
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h2 className="text-center">Predefined workouts</h2>
        <button className="btn btn-primary col-6 offset-3 my-1" onClick={() => dispatch(startTimer(new TimerSetup(60, 15)))}>
          60/15
        </button>
        <button className="btn btn-primary col-6 offset-3 my-1" onClick={() => dispatch(startTimer(new TimerSetup(75, 15)))}>
          75/15
        </button>
        <button className="btn btn-primary col-6 offset-3 my-1" onClick={() => dispatch(startTimer(new TimerSetup(90, 15)))}>
          90/15
        </button>
        <button className="btn btn-primary col-6 offset-3 my-1" onClick={() => dispatch(startTimer(new TimerSetup(120, 15)))}>
          120/15
        </button>
        <button className="btn btn-primary col-6 offset-3 my-1" onClick={() => dispatch(startTimer(new TimerSetup(30, 5)))}>
          30/5 (streching)
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  duration: state.timer.duration,
  timerSetup: state.timer.timerSetup,
  isInterval: state.timer.isInterval,
  timerPaused: state.timer.timerPaused,
  cycle: state.timer.cycle
});

export default connect(mapStateToProps)(Timer);
