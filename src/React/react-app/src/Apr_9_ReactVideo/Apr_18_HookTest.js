import React, {useEffect, useState} from 'react';

function useAge() {
    const [age, setAge] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setAge(20);
        }, 2000)
    });
    return age;
}

function Apr18HookTest(props) {
    const [count, setCount] = useState(0);
    const age = useAge(20);
    const [fruit, setFruit] = useState('Banana');
    const [input, setInput] = useState("");
    const [fruits, setFruits] = useState(["apple", "Banana"]);

    // useEffect hook, executed when render
    // useEffect(() => {
    //     document.title = `You click ${count} times`;
    // });
    useEffect(() => {
        //Api, second para is dependence
        console.log("Api executed")
    }, [count]);
    return (
        <div>
            <p>Click {count} times</p>
            <button onClick={() => setCount(count + 1)}>CLick</button>

            <p>Age{age? age: ' loading'}</p>
            <p>Selected Fruit : {fruit}</p>
            <p>
                <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                <button onClick={() => setFruits([...fruits, input])}>New Fruit</button>
            </p>
            <ul>
                {fruits.map(f => (<li onClick={()=>setFruit(f)} key={{f}[1]}>{f}</li>))}
            </ul>

        </div>
    );
}

export default Apr18HookTest;
