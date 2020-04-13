import React, {useState} from 'react';

function Apr13HookCounter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    );
}

export default Apr13HookCounter;