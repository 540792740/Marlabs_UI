 function* r(num){
    const r1 = yield compute(num);
    yield compute(r1);
}

function compute(num) {
    return new Promise(resolve => {
        setTimeout(()=>{
            const ret = num * num;
            console.log(ret);
            resolve(ret);
        }, 1000);
    });
}

// Async
let it = r(2);
// it.next().value.then(num => it.next(num));

function next(data) {
    let{ value, done } = it.next(data);
    if (!done){
        value.then(num =>{
            next(num);
        });
    }
}

next();
