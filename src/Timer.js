import React, { useEffect, useState } from 'react'
import './Timer.css';

function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'October, 17, 2023';

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor(time / (1000 * 60 * 60) % 24));
        setMinutes(Math.floor(time / (1000 * 60) % 60));
        setSeconds(Math.floor(time / (1000) % 60));
    }


    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    })


    return (
        <>
            <div className='content'>
                <h1>Until Deadline</h1>
                <div className='times'>
                    <span>
                        <h4 className='days'>{days}</h4>
                        <h5>Days</h5>
                    </span>
                    <span>
                        <h4 className='hours'>{hours}</h4>
                        <h5>Hours</h5>
                    </span>
                    <span>
                        <h4 className='minutes'>{minutes}</h4>
                        <h5>Minutes</h5>
                    </span>
                    <span>
                        <h4 className='seconds'>{seconds}</h4>
                        <h5>Seconds</h5>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Timer