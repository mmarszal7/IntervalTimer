import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, pauseTimer, tick } from '../actions/timer';
import { timerFormatter } from '../utils/timerFormatter'
import { TimerSetup } from '../models/timer-setup';

let startUp = true;

const Timer = ({ duration, timerSetup, isInterval, timerPaused, cycle, dispatch }) => {
    if (startUp) {
        setInterval(() => dispatch(tick()), 1000);
        startUp = false;
    }

    return (
        <div className="wrapper">
            <div className={"carousel " + (timerSetup ? 'is-set' : '')}>

                <div className={"timerForm "}>
                    <h1>Timer</h1>
                    <form>
                        <div className="form-group">
                            <label>Timer [seconds]</label>
                            <input type="text" className="form-control" ref={(input) => this.secondsInput = input} defaultValue={60} />
                        </div>
                        <div className="form-group">
                            <label>Interval time [seconds]</label>
                            <input type="text" className="form-control" ref={(input) => this.intervalInput = input} defaultValue={15} />
                        </div>
                    </form>
                    <button className="btn btn-primary col-6 offset-3" onClick={() => dispatch(startTimer(new TimerSetup(this.secondsInput.value, this.intervalInput.value)))}>Start</button>
                </div>

                <div className={"timer " + (timerPaused ? 'text-secondary' : '')}>
                    <span className="cycles">Cycle: {cycle}</span>
                    <span className={'duration mb-3 ' + (isInterval ? 'text-info' : '')}>{timerFormatter(duration)} {isInterval ? '(interval)' : ''}</span>
                    <button className={"btn btn-primary col-3 offset-3 " + (timerPaused ? 'btn-warning' : '')} onClick={() => dispatch(pauseTimer())}>{timerPaused ? 'Replay' : 'Pause'}</button>
                    <button className="btn btn-danger col-3 ml-2" onClick={() => dispatch(stopTimer())}>Stop</button>
                </div>

            </div >
        </div >
    )
}

const mapStateToProps = state => ({
    duration: state.timer.duration,
    timerSetup: state.timer.timerSetup,
    isInterval: state.timer.isInterval,
    timerPaused: state.timer.timerPaused,
    cycle: state.timer.cycle,
});

export default connect(mapStateToProps)(Timer);
