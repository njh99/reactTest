//1.date 객체생성
let date1 = new Date();
//console.log(date1);

let date2 = new Date(1999,11,17);
//console.log(date2);

//2. timestemp 시간 => 숫자로 표현하는 방법 
let date3 = new Date();
let ts1 = date3.getTime();
//console.log(date3);
//console.log(ts1);
let date4 = new Date(ts1+10000000);
//console.log(date4);

// 3. 시간 요소들을 추출하는 방법 
let date5 = new Date();
let year = date5.getFullYear();
let month = date5.getMonth();
let hour = date5.getHours();
let min = date5.getMinutes();
let sec = date5.getSeconds();
let day = date5.getDay();
console.log(year,month,hour,min,sec,day);
//day: 0일 1 월 2화 3수 4목 5금 6토

//4. 시간을 설정할 수 있다.
let date6 = new Date();
date6.setFullYear(2023);
date6.setMonth(12-1);

//5.사간은 뺴고 날짜만 출력
console.log(date6.toDateString)

//6. 현지에 맞는 로컬 시간
console.log(date6.toLocaleDateString)