import React from 'react';

function Apr10ListRen(props) {
    const names = ["Samgsung", "LG", "Apple", "Google"];
    const nameList = names.map((name,index) => <h3 key={index}>{name}</h3>)
    const persons = [
        {id:1, name:'Peter',age: 18,skill:"Everything"},
        {id:2, name:'Jay',age: 25,skill: "Angular"},
        {id:3, name:'ZeKai',age: 26,skill: "React"},
        {id:4, name:'Nick',age:27,skill: "Jquery"}
    ];
    const personList = persons.map(person=>
        <h3 key={person.name.toString()}>I am {person.name}, I am {person.age} years old.</h3>
    );
    return (
        <div>
            {/*example 1*/}
            {/*<h3>{names[0]}</h3>*/}
            {/*<h3>{names[1]}</h3>*/}
            {/*<h3>{names[2]}</h3>*/}
            {/*<h3>{names[3]}</h3>*/}

            {/*example 2   */}
            {nameList}

            {/*example3*/}

            {/*{personList}*/}

        </div>
    );
}

export default Apr10ListRen;