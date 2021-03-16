import React, {useMemo, useState} from "react";

export default {
    title: 'UseState'
}

function generateData() {
    console.log('generateDate')
    return 1
}

export const UseState = () => {
    console.log('UseState')
    //const initialValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData);


    return <>
        <button onClick={() => {
            setCounter((state)=>{return state+1})
        }}>+
        </button>
        {counter}
    </>
}