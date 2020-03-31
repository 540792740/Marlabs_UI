function calculator(inputNumber) {
    // alert(inputNumber)
    const expression = /\+|\-|\*|\//;
    const number = inputNumber.split(expression);
    //Debugger;

    const numberA = parseInt(number[0]);
    const numberB = parseInt(number[1]);
    const numberC = parseInt(number[2]);

    const operation = inputNumber.match(expression);
    if(Number.isNaN(numberA) || Number.isNaN(numberB) || Number.isNaN(numberC) || operation ===null){
        updateResult("Operation not recognized");
        return;
    }

    const calculator = new Calculator();
    calculator.add(numberA);
    let result;

    switch (operation[0]) {
        case '+':
            result = calculator.add(numberB);
            break;
        case '-':
            result = calculator.subtract(numberB);
            break;
        case '*':
            result = calculator.multiple(numberB);
            break;
        case '/':
            result = calculator.divide(numberB);
            break;
    }
updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById('result');
    if(element){
        element.innerHTML = result
    }
}
// debugger;
