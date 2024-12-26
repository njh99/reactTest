//1. spread 연산자
let array1 = [1,2,3];
let array2 =[4,5,...array1];
console.log(array2);


// 4. rest 매개변수 
// rest는 나머지 , 나머지 매개변수 
arr1 = [1, 2, 3]; 
function funcB(one, ...ds) { 
  console.log(ds);     
} 
funcB(...arr1); 