import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const useMemories = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for a:{resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>

}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('UsersSecretHelp');
    const [users, setUsers] = useState(['Olya', 'Slava','Ker']);
    const [counter, setCounter] = useState(0);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])
    const addUsers = () => {
        const newUsers = [...users, 'Katya' + new Date().getTime()];
        setUsers(newUsers);
    }
    return <div>
        <button onClick={() =>
            setCounter(counter + 1)
        }>+
        </button>
        <button onClick={() =>
            addUsers()
        }>Users
        </button>
        {counter}
        <Users users={newArray}/>
    </div>
}
