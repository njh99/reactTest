//1. 단락평가
let a = false;
let b = true;


let funca = ()=>{
    console.log("funca")
    return false;
};
let funcb= ()=>{
    console.log("funcb")
    return true;
};
//주의
//console.log(funca() || funcb());
//실제사용하는 방법
//함수선언, 표현식, 화살표함수
function printName(person){
    const name = person && person.name;
    console.log(name || "person 값이 없음")
};
function printName2(person){
    if(typeof person === 'object'){
        console.log(person.name);
    }else{
        console.log(name || "person 값이 없음");
    }
   
};
//console.log(typeof{})
//printName();
//printName({name: "njh"});
//printName2();
printName2({name:"njh"});