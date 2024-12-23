//1. 숫자 양수 무한대값, 음수 무한대
let infi = Infinity;
let mininfi = -Infinity;
//나는 숫자가 아니야
let notinfi = NaN;

//덧셈으로 문자열 만들기
let name = "나"+"종호";

//템플릿리터널 기능을 잘 사용하자
let name2 = "나종호";
let location1 = "수원";
let intro ="저는"+location1+"에서 살고 있는 "+name2+"입니다.";
let intro2 =`저는${location1}에서 살고 있는 ${name}입니다.`;
console.log(intro);


//형변환 Number, parsInt(앞에 있는 숫자만) -> 넘버타입으로 바꿔준다.
let str2 = "10개";
//console.log(Number(str2)+10);
//console.log(parseInt(str2)+10);

//산술연산자에서 주의할점
let num1 =1;
let num2 =2;
console.log(num1/num2);

//비교연산자(==)x (===)o, (!=)x, (!===)o (타입과 값을 같이 비교한다.)
let comA="1";
//onsole.log(1 ==="1");

//typeof 연산자
let num3 = 21;
console.log(typeof num3);

//병합연산자(java x) -> ??
let num5;
num5 = num5 ?? 10;//변수가 undefined, null 타입이면 다른값을 준다.


if(num5 ===undefined){
num5=10;
}
console.log(num5);