//test suit
describe('String Match test',()=>{
  it('Test String, toBe',()=>{
    let str1 = "Hello World!";
    expect(str1).toBe('Hello World!');
  });

  it('Test String, .not.toBe',()=>{
    let str1 = "Hello World!";
    expect(str1).not.toBe('Hello World');
  });

  it('Test String, toEqual',()=>{
    let str1 = "Hello World!";
    expect(str1).toEqual('Hello World!');
  });

  it('Test String, not.toEqual',()=>{
    let str1 = "Hello World!";
    expect(str1).not.toEqual('Hello World');
  });

  it('Test String, toContain',()=>{
    let str1 = "Hello World!";
    expect(str1).toContain('Hello');
  });

  it('Test String, toContain with Arrays',()=>{
    let a = ['a','b','c'];
    expect(a).toContain('b');
  })


});
