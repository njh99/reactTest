//객체 순회 방법
const person = {
    name:"njh",
    age: 26,
    tall: 176
};

console.log(person.name);
console.log(person["name"]);


//객체에서 맴버변수이름을 배열로 가져오기
const persoKey = Object.keys(person);
const persoKeyValue = Object.values(person);
console.log(persoKey);
console.log(persoKeyValue);
//반복문을 이용해서 객체값에 있는 모든 원소값을 출력한다.
for(let i=0;i<persoKey.length;i++){
    let key =persoKey[i];
    console.log(person[key]);
};