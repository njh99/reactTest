//1. 객체 생성
let obj = new Object();
let obj2 ={};

//2. 객체 프로퍼티(객체속성)
let person = {
    name: "홍길동",
    age: 26,
    hobby: "축구",
    job: "개발자",
    extra: {},
    extra2: function (){},
    islike: true
};
//맴버변수 추가
person.address="수원시 영통구";

console.log(person["address"]);
//맴버변수 삭제
delete person.address;
console.log(person);
//맴버변수 유무
let flag = "name" in person;
console.log(`flag = ${flag}`)