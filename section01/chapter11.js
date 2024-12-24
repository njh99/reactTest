//1. push 배열에 요소 첨가
let array1 = [1,2,3];
let count = array1.push(5);
//console.log(array1);
//console.log(count);

//2. pop (shifrt기능이 같다 위치 뒤에서 제거)배열에서 가져온다.
let array2 = [1,2,3];
let value = array2.pop();
//console.log(value);
//console.log(array2);

//3. shift(pop과 기능이 같다 앞에서 제거)
let array3 = [1,2,3];
let value3 = array3.shift();
console.log(value3);
console.log(array3);

//4. unshift(push와 기능이 같다 위치 앞에서 넣는다.)
let array4 = [1,2,3];
let value4 = array3.unshift(10);
console.log(value3);
console.log(array3);
//5. tosorted(): 기존의 배열을 정렬하는것이 아닌 새로 정렬된 배열을 리턴한다.
let arr5 = ["c", "a", "b"]; 
const sorted = arr5.toSorted();