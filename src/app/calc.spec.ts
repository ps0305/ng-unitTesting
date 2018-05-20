import {Calculator} from "./calc";

//Jasmine start the execution from describle function
describe("calculator testing",()=>{

    //to overcome repeated code beforeEach
    /*//beforeEach excute before each describe function
    beforeEach(()=>{
        this.obj= new Calculator();
    })*/

    //beforeAll to overcome beforeEach

    beforeAll(()=>{
        this.obj=new Calculator();
    })

    //describe =inner describe function in order to write unit test cases
    describe("increment function testing",()=>{
        // "it"=to write test suit code
        it("increment function increments the count by 1",()=>{
                //objection to calculator
                var obj:Calculator = new Calculator();
            const result=obj.increment();
            expect(result).toBe(1);
        });
    });

    //decrement function
    describe("decrement function testing",()=>{
        it("decrement function decrements the count by 1",()=>{
            var obj:Calculator = new Calculator();
            const result=obj.decrement();
            //expect result
            expect(result).toBe(-1)//developer result=tester result=-1
            
        });
    });
});

