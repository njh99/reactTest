//1. 함수 선언식 함수 선언식 자동으로 호이스팅 발생
// 함수 표현식 함수 선언식 자동으로 호이스팅 안됨
// 화살표 함수 선언식 자동으로 호이스팅 안됨
function getArea(width, height){
    //중첩함수
    function another(){
        console.log("another 함수 입니다.");
    }    
    
    return width * height
};
let area1 = getArea(101,20);
console.log(area1);
