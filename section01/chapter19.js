//1. promise pending(대기) 상태
/*
const promise =  new Promise(()=>{
    //2초동안 작업처리한것
    setTimeout(() => {
        console.log("hello");
    }, 2000);
});
*/
//2초후에 부르는게 아니라 바로 리턴되는 promise 콜한것
//console.log(promise);



//2. promise fulfilled(성공) 상태
/*
const promise2 =  new Promise((resolve,reject)=>{
    //2초동안 작업처리한것
    setTimeout(() => {
        console.log("hello");
        resolve("Hello");
    }, 2000);
});

setTimeout(() => {
    console.log(promise2);
}, 3000);
*/


//3. promise reject(실패) 상태
/*
const promise3 =  new Promise((resolve,reject)=>{
    //2초동안 작업처리한것
    setTimeout(() => {
        console.log("hello");
        reject("실패 점검이 필요");
    }, 2000);
});

setTimeout(() => {
    console.log(promise3);
}, 3000);
*/

//4. promise 실제 적용
/*
const promise4 =  new Promise((resolve,reject)=>{
    //2초동안 작업처리한것
    //executor 처리문
    //숫자값을 주면 타입을 점검해서 number resolve, 아니면 reject if문으로 점검
    setTimeout(() => {
        const num = "십";
        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject(`${num}은 숫자가 아닙니다.`);
        }
       
    }, 2000);
});

setTimeout(() => {
    console.log(promise4);
}, 3000);
*/

//5. promise 실제적용 성공했을때와 실패했을때를 처리한다.
/*
const promise5 =  new Promise((resolve,reject)=>{
    //2초동안 작업처리한것
    //executor 처리문
    //숫자값을 주면 타입을 점검해서 number resolve, 아니면 reject if문으로 점검
    setTimeout(() => {
        const num = 10;
        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject(`${num}은 숫자가 아닙니다.`);
        }
       
    }, 2000);
});

//성공했을때 실행하는 함수로 결과를 화면에 출력
promise5.then((value)=>{
    console.log(value);
});
//실패했을때 실행하는 함수로 결과를 화면에 출력
promise5.catch((value)=>{
    console.log(value);
});
*/


//6.  promise 실제적용 성공했을때와 실패했을때를 처리한다. => 편리하게처리
/*
const promise5 =  new Promise((resolve,reject)=>{
    //2초동안 작업처리한것
    //executor 처리문
    //숫자값을 주면 타입을 점검해서 number resolve, 아니면 reject if문으로 점검
    setTimeout(() => {
        const num = null;
        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject(`${num}은 숫자가 아닙니다.`);
        }
        
    }, 2000);
});

//promise 체인
promise5.then((value)=>{
    console.log(value+10);
}).catch((value)=>{
    console.log(value);
});
*/

//7. 함수를 통해서 promise 실행하기
//선언적인함수
/*
function add(num){
    const promise5 =  new Promise((resolve,reject)=>{
        setTimeout(() => {
            //const num = null;
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject(`${num}은 숫자가 아닙니다.`);
            }
            
        }, 2000);
    });
    return promise5;
};

const promise6 = add(null);
promise6.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});
*/

//8. 함수를 통해서 promise 두번 콜백처리하기
function add(num){
    const promise5 =  new Promise((resolve,reject)=>{
        setTimeout(() => {
            //const num = null;
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject(`${num}은 숫자가 아닙니다.`);
            }
            
        }, 2000);
    });
    return promise5;
};
/*
const promise7 = add(10);
promise7.then((value)=>{
    console.log("promise7 "+value);
    const promise8 = add(20);
    promise8.then((result)=>{
        console.log("promise8 "+result);
    }).catch((result)=>{
        console.log("promise8 "+result);
    });
}).catch((value)=>{
    console.log("promise7 "+value);
});
*/


//콜백지옥 해결
//promise chain
/*
const promise7 = add(10);
promise7.then((value)=>{
    console.log("promise7 "+value);
    return add(20);
}).then((result)=>{
    console.log("promise8 "+result)
    return add(30);
}).then((data)=>{
    console.log("promise9 "+data)
}).catch((error)=>{
    console.log("promise7~9 "+error);
});


*/
//음식을 주문하는 상황으로 promise chain 진행
//1.
function orderFood(food,callback){
    console.log(food+"음식주문");
    
    setTimeout(() => {
        callback(food);
    }, 3000);
}
function orderFood2(food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+"음식주문");
        setTimeout(() => {
            let flag = true
            if(flag === true){
                resolve(food+"음식완료");
            }else{
                reject(food+"실패");
            }
           
        }, 3000);
    });
    return promise;
}

//const promise9 = orderFood2("떡볶이");


function coolfood(food,callback){
    console.log(food+"를(을) 차갑게 주문");
    setTimeout(() => {
        callback(food);
    }, 2000);
}

function coolfood2(food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+"를(을) 차갑게 주문")
        setTimeout(() => {
            let flag = true
            if(flag ===  true){
                resolve(food+"차갑게 나왔습니다.");
            }else{
                reject(food+"실패");
            }
        }, 3000);
    });
    return promise;
}


function freezefood(food,callback){
    console.log(food+"를(을) 냉동 주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
};

function freezefood2(food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+"를(을) 냉동포장 주문")
        setTimeout(() => {
            let flag = true
            if(flag ===  true){
                resolve(food+" 냉동포장 나왔습니다.");
            }else{
                reject(food+"실패");
            }
        }, 3000);
    });
    return promise;
}
/*
//테스트
freezefood2("떡볶이").then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});
*/

//2단계 음식주문 => 차갑게 음식 주문
/*
orderFood2("떡볶이")
.then((value)=>{
    console.log(value);
    return coolfood2("떡볶이");
}).then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});
*/
//3단계 음식주문 => 차갑게 주문후 => 냉동 포장주문
orderFood2("떡볶이")
.then((value)=>{
    console.log(value);
    return coolfood2("떡볶이");
}).then((value)=>{
    console.log(value);
    return freezefood2("떡볶이");
}).then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});