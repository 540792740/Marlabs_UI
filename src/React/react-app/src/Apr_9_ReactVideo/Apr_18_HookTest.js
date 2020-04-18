import React, {useState} from 'react';

function Apr18HookTest(props) {

    const [count, setCount] = useState(0);
    const [age] = useState(20);
    const [fruit, setFruit] = useState('Banana');
    const [input, setInput] = useState("");
    const [fruits, setFruits] = useState(["apple", "Banana"]);

    return (
        <div>
            <p>Click {count} times</p>
            <button onClick={() => setCount(count + 1)}>CLick</button>

            <p>Age{age}</p>
            <p>Selected Fruit : {fruit}</p>
            <p>
                <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                <button onClick={() => setFruits([...fruits, input])}>New Fruit</button>
            </p>
            <ul>
                {fruits.map(f => (<li onClick={()=>setFruit(f)} key={{f}}>{f}</li>))}
            </ul>

        </div>
    );
}

export default Apr18HookTest;
