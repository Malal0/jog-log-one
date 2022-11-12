import React, { useState, useEffect } from "react"
import '../SCSS/Timer.scss'

export default function Timer({ handleMouseDown, handleMouseUp, holdBtnTime, handleStyle }) {
    const [mainTimer, setMainTimer] = useState({ min: 0, sec: 0 });
    const [timerOn, setTimerOn] = useState(false);
    const [beginRun, setBeginRun] = useState(false);

    useEffect(() => {
        if (timerOn) {
            const timer = setInterval(() => {
                setMainTimer({ ...mainTimer, sec: mainTimer.sec + 1 })
                if (mainTimer.sec === 59) {
                    setMainTimer({ min: mainTimer.min + 1, sec: 0 })
                }
            }, 1000)

            return () => clearInterval(timer)
        }
    });

    return (
        <div className="timer">
            {beginRun ?
                <div className="timer-grid">
                    <h2>minutes</h2>
                    <h2>seconds</h2>
                    <h1>
                        {mainTimer.min < 10 ? '0' + mainTimer.min : mainTimer.min}
                        :
                        {mainTimer.sec < 10 ? '0' + mainTimer.sec : mainTimer.sec}
                    </h1>
                </div> :
                <h1>begin run</h1>
            }
            <button
                onClick={() => { setTimerOn(!timerOn); setBeginRun(true) }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >| |</button>
            <p>press here</p>
            <div className="progress-bar" style={handleStyle}>
                {holdBtnTime < 10 ? '0' + holdBtnTime : holdBtnTime}s
            </div>
        </div>
    )
}