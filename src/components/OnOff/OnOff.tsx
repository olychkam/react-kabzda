import React, {useState} from "react";

type OnOffPropsType={
   on:boolean
    onChange:(on:boolean)=>void
}
function OnOff(props:OnOffPropsType){

    const OnStyle={
        height:'20px',
        width:'30px',
        border:'1px solid black',
        display:'inline-block',
        padding:'2px',
        backgroundColor:props.on?'green':'white'
    }
    const OffStyle={
        height:'20px',
        width:'30px',
        border:'1px solid black',
        display:'inline-block',
        padding:'2px',
        marginLeft:'2px',
        backgroundColor:props.on?'white':'red'
    }
    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft:'5px',
        backgroundColor:props.on?'green':'red'
    }

    return(
        <div>
            <div style={OnStyle} onClick={()=>{props.onChange(true)}}>On</div>
            <div style={OffStyle} onClick={()=>{props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}

export default OnOff;