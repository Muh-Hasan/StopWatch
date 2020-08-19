import React, { useState } from 'react'

export default function Timer() {

    let [mil, setMil] = useState(0)
    let [sec, setSec] = useState(0)
    let [min, setMin] = useState(0)
    const [isActive, setActive] = useState(true)
    const [interv, setInterv] = useState<any>()

    function time() {
        setMil(mil++)
        if (mil === 100) {
            setSec(sec++)
            setMil(mil = 0)
        } else if (sec === 10) {
            setMin(min++)
            setSec(sec = 0)
        }
        console.log('min' + min);
        
    }
    function start() {
        setActive(false)
        setInterv(setInterval(time, 10))
    }
    function stop() {
        setActive(true)
        setInterv(clearInterval(interv))
    }
    function reset() {
        setInterv(clearInterval(interv))
        setMil(mil = 0)
        setSec(sec= 0)
        setMin(min = 0)
        setActive(true)
    }
    return (
        <div>
            <div>
                <div>{min}</div>
                <div>{sec}</div>
                <div>{mil}</div>
            </div>
            <div>
                <button onClick={isActive ? start : stop}>{isActive ? 'Start' : 'Stop'}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}