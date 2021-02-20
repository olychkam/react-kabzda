import React, {useState} from "react";

export default {
    title: 'Example'
}

const AddUsers = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}
const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users=React.memo(UsersSecret)

export const Example = () => {
    const [users, setUsers] = useState(['Olya', 'Slava']);
    const [counter, setCounter] = useState(0);
    const addUsers = () => {
        const newUser = [...users, 'Katya' + new Date().getTime()];
        setUsers(newUser);
    }
    return (<div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUsers}>Users
            </button>
            <AddUsers count={counter}/>
            <Users users={users}/>
        </div>
    )
}