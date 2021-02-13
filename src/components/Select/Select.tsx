import React from "react";
import styles from './Select.module.css';

type ItemType = {
    value: any
    title: string
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const selectItems = props.items.find(i => i.value === props.value)
    return (
        <>
            <select>
                <option value=''>Minsk</option>
                <option value=''>Moscow</option>
                <option value=''>Ross</option>
            </select>
            <div className={styles.select}>
            <h3>{selectItems && selectItems.title}</h3>
            </div>
            <div className={styles.items}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>
        </>
    )
}