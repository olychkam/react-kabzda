import React from "react";

type RatingPropsType = {
    value:RatingValueType
    onClick:(value:RatingValueType)=>void
}
export type RatingValueType=1|2|3|4|5

export function Rating(props: RatingPropsType) {
    console.log("Star Rating")
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value:RatingValueType
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={()=>{props.onClick(props.value)}}>
        {props.selected ? <b>Star </b> : ' Star'}
    </span>
}
