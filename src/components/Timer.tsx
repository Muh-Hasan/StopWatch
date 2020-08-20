import React, { useState } from 'react'
import './timer.css'

export default function Timer() {

    const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
    
    // set interval
    const [interv, setInterv] = useState<any>();
    
    // just to displpay buttns when needed 
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    }

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;
    const run = () => {
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0 })
    };
    const resume = () => start();


    return (
        <div className='timer'>
            <div className='heading'>
                <h4>stop watch</h4>
            </div>
            <div className='display-timer'>
                <div className='timer-flex'>
                    <div className='d-two'>
                        <span className='timer-num one'>{(time.m >= 10) ? time.m : "0" + time.m}</span>
                        <span className='timer-text one1'>Minutes</span>
                    </div>
                    <div className=''>
                        <span className='timer-num '>{(time.s >= 10) ? time.s : "0" + time.s}</span>
                        <span className='timer-text'>Seconds</span>
                    </div>
                    <div className=''>
                        <span className='timer-num two'>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
                        <span className='timer-text two2'>MiliSeconds</span>
                    </div>
                </div>
            </div>

            <div className='btn-div'>
                {(status === 0) ?
                    <button className=""
                        onClick={start}>Start</button> : ""
                }

                {(status === 1) ?
                    <div>
                        <button className=""
                            onClick={stop}>Stop</button>
                        <button className=""
                            onClick={reset}>Reset</button>
                    </div> : ""
                }

                {(status === 2) ?
                    <div>
                        <button className=""
                            onClick={resume}>Resume</button>
                        <button className=""
                            onClick={reset}>Reset</button>
                    </div> : ""
                }

            </div>
        </div>
    )

}