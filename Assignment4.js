//Assignment 4 Js (Primitive Types)

let x = 20; // or x = 'ARRR!';
const type1 = x =>{
    if (typeof x == 'number') {
        
        return Math.pow(x,3);
        
      } else if (typeof x == 'string') {

        return x;
      } else {
          return x ;
      }
      
};
type1(x);
console.log(type1(x));
