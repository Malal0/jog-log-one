import React, { useState, useEffect } from "react"

export default function Timer() {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const startTimer = useEffect(() => {
        const timer = setInterval(() => {
            setSec(sec++);
            if (sec > 59) {
                setSec(0)
            }
        }, 1000)
    })

    return (
        <>
            <h2>minutes</h2>
            <h2>seconds</h2>
            <h1>
                {min < 10 ? '0' + min : min}
                :
                {sec < 10 ? '0' + sec : sec}
            </h1>
            <button onClick={startTimer}>| |</button>
            <p>press here</p>
        </>
    )
}