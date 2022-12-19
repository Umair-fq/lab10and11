
const {sum,difference,multiplication,division} = require('./cal')


test("test case 1 testing sum method", () =>{

    expect(sum(50,19)).toBe(69)
});

test("test case 2 testing differnce method", () =>{

    expect(difference(50,20)).toBe(30)
});

test("test case 3 testing multiplication method", () =>{

    expect(multiplication(5,2)).toBe(10)
});

test("test case 4 testing division method", () =>{

    expect(division(40,20)).toBe(2)
});