//콜백함수 :  자바콜백함수(서비스, 두겟 , 두포스트)
//1. 함수 선언식
function checkMood(mood,type){
    if(mood === "good"){
        if(type === 1){
            sing();
        }else{

            dance();
        }
    }else {
        angry();
    }
}
/*
//콜백처리(콜백함수)
checkMood2("bad",()=>{
    console.log("ACTION :: sing");
}, ()=>{
    console.log("ACTION :: cry");
});
*/
//콜백처리2
function repeat(idx,callback){
    for(let i=1;i<idx;i++){
        callback(i);
       // console.log(i*5+" ");
    }
}

repeat(5,(i)=>{
    console.log(i*10);
});

function calculate(i){
    console.log(i*2);
}

