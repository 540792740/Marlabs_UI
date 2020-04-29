function* g(){
    yield "a";
    yield "b";
    yield "c";
    return "ending";
}

console.log(g());
console.log(g().toString());
