//common js 모듈시스템 math 모듈(계산하는 모듈: 라이브러리(함수)), 클래스
function add(a,b){
    return a+b;
}



function sub(a,b){
    return a-b;
}

//모듈을 외부로 보낸다.
/*module.exports = {
    add: add,
    sub: sub,
}*/

//ems 모듈방식으로 전환한다.
export {add, sub};