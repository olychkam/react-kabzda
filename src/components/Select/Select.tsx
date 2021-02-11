import React from "react";

type ItemType={
    value:any
    title:string
}
type SelectPropsType = {
    value:any
    onChange:(value:any)=>void
    items:ItemType[]
}


export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}

        </div>
    )
}