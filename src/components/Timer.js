import React, { useState, useEffect } from "react"

export default function Timer() {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if (timerOn) {
            const timer = setInterval(() => {
                setSec(sec + 1);
                if (sec === 59) {
                    setMin(min + 1);
                    setSec(0);
                }
            }, 1000)

            return () => clearInterval(timer)
        }
    });

    return (
        <>
            <h2>minutes</h2>
            <h2>seconds</h2>
            <h1>
                {min < 10 ? '0' + min : min}
                :
                {sec < 10 ? '0' + sec : sec}
            </h1>
            <button
                onClick={() => setTimerOn(!timerOn)}
            // onMouseUp={() => {
            //     setTimerOn(!timerOn)
            //     setMin(0)
            //     setSec(0)
            // }}
            >| |</button>
            <p>press here</p>
        </>
    )
}