//1. 배열 생성
let arrayA = new Array();
let arrayB ={};

//2. 배열에 들어올 수 있는 맴버
let arrayC =[
    1,
    1.0,
    true,
    "hello",
    undefined,
    null,
    {},
    [],
    ()=>{
        console.log("hello j")
    }  
];

console.log(arrayC[8]());