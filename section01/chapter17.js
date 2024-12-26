//비동기 처리 작업진행
function task(){
    setTimeout(() => {
        console.log("hello");
    }, 3000);    
};
function task2(callback){
    setTimeout(callback, 3000);    
};

//task();
//이 방법을 선호
task2(()=>{
    //console.log("hello2");
});

//이 방법은 잘 안씀
let callback = ()=>{
    console.log("hello2");
};
//task2(callback);

//비동기 처리 작업진행
function add(a,b){
    setTimeout(() => {
        const sum = a+b;
        console.log(sum);
    }, 3000);    
};
add(10,20);
//add2를 실행하려면 함수안에 함수를 또 실행해야한다.
function add2(a,b,callback2){
    setTimeout(callback2, 3000);    
};
function add22(a,b,callback2){
    setTimeout(()=>{
        const sum = a+b;
        callback2(sum);
    }, 3000);    
};

add22(10,20,(sum)=>{
    console.log(sum);
});

//add3
function add3(a,b,callback3){
    setTimeout(() => {
        const sum = a+b;
        callback3(sum);
    }, 3000);    
};

add3(100,200, (sum)=>{console.log(sum);});


