import React, { useState, useEffect } from "react"

export default function Timer({ handleMouseDown, handleMouseUp, holdBtnTime }) {
    const [mainTimer, setMainTimer] = useState({ min: 0, sec: 0 });
    const [timerOn, setTimerOn] = useState(false);
    // const [holdBtnDown, setHoldBtnDown] = useState(false);
    // const [holdBtnTimer, setHoldBtnTimer] = useState(0);

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

    // useEffect(() => {
    //     if (holdBtnDown && holdBtnTimer < 15) {
    //         const timer = setInterval(() => {
    //             setHoldBtnTimer(holdBtnTimer + 1);
    //         }, 1000)
    //         return () => clearInterval(timer)
    //     }
    // });

    return (
        <>
            <h2>minutes</h2>
            <h2>seconds</h2>
            <h1>
                {mainTimer.min < 10 ? '0' + mainTimer.min : mainTimer.min}
                :
                {mainTimer.sec < 10 ? '0' + mainTimer.sec : mainTimer.sec}
            </h1>
            <button
                onClick={() => setTimerOn(!timerOn)}
                // onMouseDown={() => setHoldBtnDown(true)}
                onMouseDown={handleMouseDown}
                // {() => {
                //     setHoldBtnDown(true)
                //     continueNextPage()
                // }
                // }
                onMouseUp={handleMouseUp}
            // {() => {
            //     setHoldBtnDown(false)
            //     setHoldBtnTimer(0)
            // }}
            >| |</button>
            <p>press here</p>
            <h1>
                {holdBtnTime < 10 ? '0' + holdBtnTime : holdBtnTime}s
                {holdBtnTime === 15 ? 'next page' : ''}
            </h1>
        </>
    )
}