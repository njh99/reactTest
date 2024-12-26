//1단계 음식을 제작주문하는 상황
function orderFood(food,callback){
    console.log(food+"음식주문");
    
    setTimeout(() => {
        callback(food);
    }, 3000);
};
//1단계 음식을 차게 주문하는 상황
function coolfood(food,callback){
    console.log(food+"를(을) 차갑게 주문");
    setTimeout(() => {
        callback(food);
    }, 2000);
}

//orderFood("떡볶이",(food)=>{console.log(food+"음식제작 완성");});

//coolfood("바닐라라떼",(food)=>{console.log("원하시는 " +food+" 나왔습니다");});

//1단계 음식을 냉동주문하는 상황
function freezefood(food,callback){
    console.log(food+"를(을) 냉동 주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
};

//freezefood("피자",(food)=>{console.log("원하시는 " +food+" 나왔습니다");});
//1단계 끝.


//2단계 음식을 주문하고 => 음식을 차게 주문하느 상황
/*orderFood('오리백숙',(food)=>{
    console.log(food+"음식제작 완성");
    let food2 = `뜨거운 ${food}`
    coolfood(food2,(food2)=>{
        console.log("원하시는 " +food+" 식혀 나왔습니다");
    });
});*/

//2단계 끝

//3단계 음식을 주문후 => 음식을 식혀달라고 주문 => 냉동포장 하나 주문
orderFood('오리백숙',(food)=>{
    console.log(food+"음식제작 완성");
    let food2 = `${food}`
    coolfood(food2,(food2)=>{
        console.log("원하시는 " +food2+" 식혀 나왔습니다");
        let food3 = `${food2}`
        freezefood(food3,(food3)=>{
            console.log("원하시는 " +food3+" 냉동포장주문 나왔습니다");}
        );
    });
});