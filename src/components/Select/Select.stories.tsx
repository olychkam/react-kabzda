import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}
const SelectMemo=React.memo(Select)
export const BaseExampleOne = () => {
    const [value,setValue]=useState('2')
    return (
        <SelectMemo value={value} onChange={setValue}
            items={[{value: '1', title: 'Moscow'},
                {value: '2', title: 'Minsk'},
                {value: '3', title: 'Ross'},
            ]}/>
    )}
export const BaseExampleTo = () => {
    const [value,setValue]=useState(null)
    return(
        <SelectMemo value={value} onChange={setValue}
            items={[{value: '1', title: 'Moscow'},
                {value: '2', title: 'Minsk'},
                {value: '3', title: 'Ross'},
            ]}/>
    )}