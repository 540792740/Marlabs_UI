function* g(){
    yield "a";
    yield "b";
    yield "c";
    return "ending";
}

var gen = g()

// Generator Use
function next(){
    let {value, done} = gen.next();
    console.log(value);
    if(!done) next();
}

// next();

function* say(){
    let a = yield "1";
    console.log(a);
    let b = yield "2";
    console.log(b);
}
let it = say();

console.log(it.next());
// console.log(it.next("I am Number 1"));
console.log(it.next());
// console.log(it.next("I am Number 2"));
