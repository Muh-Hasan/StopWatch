import React, { useState } from 'react'

export default function Timer() {

    // let [mil, setMil] = useState(0)
    // let [sec, setSec] = useState(0)
    // let [min, setMin] = useState(0)
    // const [isActive, setActive] = useState(true)
    // const [interv, setInterv] = useState<any>()

    // function time() {
    //     setMil(mil++)
    //     if (mil === 100) {
    //         setSec(sec++)
    //         setMil(mil = 0)
    //     } else if (sec === 10) {
    //         setMin(min++)
    //         setSec(sec = 0)
    //     }
    //     console.log('min' + min);

    // }
    // function start() {
    //     setActive(false)
    //     setInterv(setInterval(time, 10))
    // }
    // function stop() {
    //     setActive(true)
    //     setInterv(clearInterval(interv))
    // }
    // function reset() {
    //     setInterv(clearInterval(interv))
    //     setMil(mil = 0)
    //     setSec(sec= 0)
    //     setMin(min = 0)
    //     setActive(true)
    // }
    // return (
    //     <div>
    //         <div>
    //             <div>{min}</div>
    //             <div>{sec}</div>
    //             <div>{mil}</div>
    //         </div>
    //         <div>
    //             <button onClick={isActive ? start : stop}>{isActive ? 'Start' : 'Stop'}</button>
    //             <button onClick={reset}>Reset</button>
    //         </div>
    //     </div>
    // )
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
    const [interv, setInterv] = useState<any>();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    }

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;
    const run = () => {
        if (updatedS === 6) {
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
        <div>
            <div>
                <span>{(time.m >= 10) ? time.m : "0" + time.m + ' '}</span>:
                <span>{(time.s >= 10) ?  time.s : " 0" + time.s + ' '}</span>:
                <span>{(time.ms >= 10) ? time.ms : " 0" + time.ms}</span>
            </div>
            <div>
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