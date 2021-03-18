import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'UseEffect'
}

export const UseState = () => {
    console.log('UseState')
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1)
    useEffect(() => {
        console.log('UseEffect first render')
        document.title = counter.toString()
    },)
    useEffect(() => {
        console.log('UseEffect counter')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}

export const UseSetTimeout = () => {
    console.log('SetTimeout')
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1)
    useEffect(() => {
        console.log('UseEffect first render')
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}