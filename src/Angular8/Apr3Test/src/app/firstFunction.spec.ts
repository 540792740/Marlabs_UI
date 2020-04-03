import {addition} from './firstfunction'


//test suit

describe('Test Addition ', function () {
    it('testing addition function' ,()=>{
      expect(addition(10,20)).toBe(30);
  })
});
