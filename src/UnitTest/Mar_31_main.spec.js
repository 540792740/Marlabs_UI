describe("Mar_31_main.js", function () {
    describe('calculate', function(){
        it("Validate expression when first number is invalid", function () {
            spyOn(window, "updateResult").and.stub();
            calculator('A + 3');
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized");
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        xit("Validate Expression");
        xit("Calls add");
        xit("Calls Substract");
        xit("Calls multiple");
        xit("Calls Divide");
    });




    it('calls add', function () {
        spyOn(Calculator.prototype, "add");

        calculator("3 * 4");

        expect(Calculator.prototype.multiple).toHaveBeenCalledWith(4);
    });


    it('calls divide', function () {
        spyOn(Calculator.prototype, "divide");

        calculator("3/4");

        expect(Calculator.prototype.divide).toHaveBeenCalledWith(4);
    });

    it('calls updateResult(.callThrough)', function () {
        spyOn(window, "updateResult").and.stub();
        spyOn(Calculator.prototype, "multiple").and.callThrough();

        calculator('3*4');

        expect(Calculator.prototype.divide).toHaveBeenCalledWith(12);
    });






    describe('updateResult()', function () {
       let element;
       beforeAll(function () {

           element = document.createElement('span');
           element.setAttribute("id","result");
           document.body.appendChild(element);
        });

        afterAll(function () {
            const element = document.getElementById('result');
            document.body.removeChild(element);
        });

        it("add result to Dom element", function () {
            updateResult(5);
            expect(element.innerText).toBe("5")
        });
     });
});
