//Create a test suite

describe('Mar_31_calculator.js', function () {


//    Example 1
/*
    it('should add numbers to total', function () {
        const calculator = new Calculator();
        calculator.add(5);

        //    expect the total to be 5
        expect(calculator.total).toBe(5);
    });
    it('should subtract numbers to total', function () {
        const calculator = new Calculator();
        calculator.total = 50;
        calculator.subtract(5);

        expect(calculator.total).toBe(45);
    });

    it('should multiple numbers to total', function () {
        const calculator = new Calculator();
        calculator.total = 50;
        calculator.multiple(5);

        expect(calculator.total).toBe(250);
    });

    it('should divide numbers to total', function () {
        const calculator = new Calculator();
        calculator.total = 50;
        calculator.divide(5);

        expect(calculator.total).toBe(10);
    });

    it('toEqual', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        calculator1.total = 50;
        calculator2.total = 50;
        expect(calculator1).toEqual(calculator2);
    });
    it('Truthy', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator1).toBeTruthy();
        expect(calculator2).toBeTruthy();
    });

    it('negative', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator1).not.toBe(calculator2);
    });
    it('toBeDefined, toBeUndefined', function () {
        const calculator1 = new Calculator();
        expect(calculator1.add).toBeDefined();
    });
    it('toBeNull', function () {
        const calculator1 = new Calculator();
        calculator1.total=null;
        expect(calculator1.total).toBeNull();
    });
    it('toContain', function () {
        const calculator1 = new Calculator();
        expect(calculator1.constructor.name).toContain('Calc');
    });
    it('toBeNaN', function () {
        const calculator1 = new Calculator();
        calculator1.total=20;
        calculator1.multiple('a');
        expect(calculator1.total).toBeNaN();
    });
    it('toThrow', function () {
        const calculator1 = new Calculator();
        expect(function (){calculator1.divide(0)}).toThrow();
        expect(function (){calculator1.divide(0)}).toThrowError(Error);
        expect(function (){calculator1.divide(0)}).toThrowError(Error);
    });
    it('toMatch', function () {
        const calculator1 = new Calculator();
        calculator1.total=-50;
        expect(calculator1.total).toMatch(/-?\d+/);
        expect(typeof calculator1.total).toMatch('number')
    });

    it('toMatch', function () {
        const calculator1 = new Calculator();
        calculator1.total=-50;
        expect(calculator1.total).toMatch(/-?\d+/);
        expect(typeof calculator1.total).toMatch('number')
    });


*/


//Example 2
    describe("Calculator", function () {

        let calculator2;
        let calculator1;
        beforeEach(function () {
            calculator1 = new Calculator();
            calculator2 = new Calculator();
        });

        afterEach(function () {

        });
        xit('toMatch', function () {
            const calculator1 = new Calculator();
            calculator1.total=-50;
            expect(calculator1.total).toMatch(/-?\d+/);
            expect(typeof calculator1.total).toMatch('number')
        });
        it('toThrow', function () {
            const calculator1 = new Calculator();
            expect(function (){calculator1.divide(0)}).toThrow();
            expect(function (){calculator1.divide(0)}).toThrowError(Error);
            expect(function (){calculator1.divide(0)}).toThrowError(Error);
        });


    })

});

