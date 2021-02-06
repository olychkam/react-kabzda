import React, {useState} from "react";

export type OnOffPropsType = {
    // on:boolean
    onChange: (on: boolean) => void
}

function UnControlledOnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(false)

    const OnStyle = {
        height: '20px',
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const OffStyle = {
        height: '20px',
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

return <div>
        <div style={OnStyle} onClick={onClicked}>On</div>
        <div style={OffStyle} onClick={offClicked}>Off</div>
        <div style={indicatorStyle}></div>

    </div>
}

export default UnControlledOnOff;