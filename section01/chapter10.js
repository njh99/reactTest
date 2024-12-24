//forEach(함수(value,index,객체배열)): 향상된포문for( 객체:객체배열 )
const array = [1,2,3,4];
const array2 = [];
//일반 for문
//일반 for문
//for(let i=0;i<array.length;i++){
//    console.log(array[i]);
//};
//console.log("=========");
//forEach문
//console.log(array);
array.forEach((v)=>array2.push(v*2)   
);
//console.log(array2);

let array3 = [ 
    { name: "구길동",age:10}, 
    { name: "김길동",age:10}, 
    { name: "홍길동",age:10 }, 
    { name: "이길동",age:10}, 
    { name: "나길동",age:20}, 
    { name: "홍길동",age:20 }, 
    ];
//array3.forEach((v)=>{console.log(v)});
//find
const findValue = array3.find((v)=>{
   return v.name ==="홍길동";
    
});
//console.log(findValue);

//filter
const findArray = array3.filter((v)=>{
    return v.name ==="홍길동";
    
});
//console.log(findArray);

//Map
const nameArray = array3.map((v)=>{
    return v.age;
});


//findIndex 해당된 객체를 찾아서 그 위치를 리턴
const findIdx= array3.findIndex((v)=>{
    return v.name === "홍길동";
});
//console.log(findIdx);

//includes (true,false)
const flag = array.includes(3);
//console.log(flag);

//indexof(index)
const array6 = [1,2,2,2,4];
const value = array6.indexOf(1);
//console.log(value);

//slice
const array7 = [1,2,3,4,5,6,7];
const sliceArray = array7.slice(2,5);
//console.log(sliceArray);


let array8 = [ 
    { name: "구길동",age:10}, 
    { name: "김길동",age:10}, 
    { name: "홍길동",age:10 }, 
    { name: "이길동",age:10}, 
    { name: "나길동",age:20}, 
    { name: "홍길동",age:20 }, 
    ];
    const sliceArray2 = array8.slice(2,5);
    //console.log(sliceArray2);

    //배열 합치기
    let array9 = [ 
        { name: "구길동",age:10}, 
        { name: "김길동",age:10},
    ];
    let array10 = [ 
        { name: "나길동",age:10}, 
        { name: "조길동",age:10},
    ];
    //const returnArray = array9.concat(array10);
    //console.log(returnArray);
    //sort: (a,b)=>{return b-a}역정렬 a-b 정렬
    const array11 = [10,8,35,4,5,6,7];

    array11.sort((a,b)=>{return b-a});
    //console.log(array11);

    //join
    const array12 = ["김동진","님","안녕하세요","반가워요"]; 
    //console.log(array12.join("=="));

    //for of 반복문(자바의 향상된 for문)
    let array13 = [1, 2, 3]; 
    for (let item of array13) { 
    //console.log(item); 
    }; 

    // 4 for in 
    const person = {
        name:"njh",
        age: 26,
        tall: 176
    };
    for (let key in person) { 
    const value = person[key]; 
    console.log(key, value); 
    };