console.log("Hello world")

// 변수란 특정 값을 저장하는 공간.
// abc = "abcdefgh---"

// 키워드 변수이름 = 값.
// 키워드 : var , let , const 

var number = 5; // 변수의 선언과 할당이 동시에 일어난다.
var number; // 재선언

// var 보다 let 사용을 권장한다.

// for (var i = 0; i < 10; i++) {
//     var sss = "sss"
// }
// console.log(sss)

// function aaa {
//     var string = "가나다";
// }

var number1; // 변수를 선언한다. 
number1 = 5; // 변수의 값을 할당한다.
number1 = 6; // 재 할당, 값을 다시 설정해준다.

// var let const 차이점.
// var : 재선어언, 재할당이 가능하다. 

// let string;
// let string1 = "따옴표 처리 필수" ;

// let : 재선언 불가능,재할당은 가능.

const Name = "이름";
const Name1 = "Stirng2";
console.log(Name);

// let lll;
// console.log(lll);

// const : 재선언 불가능, 재할당도 불가능

// 변수 기본규칙 : 변수 이름으로는 문자 / 숫자 / $ / _ 만 사용가능하다.

let myName = "minhyun";
let firstName = "kim";

// 변수 기본규칙 : 첫글자는 숫자가 될 수 없다.
// 변수 기본규칙 : let (예약어) 사용 불가능.
// 변수 기본규칙 : 변수 이름은 읽기 쉽도록 센스 있게!
// 변수 기본규칙 : 상수는 대문자로 알기 쉽게 해준다.

const VARIABLE = 1; // 상수 : 한번 선언하고 바꾸지 않는 값, 알기쉽게 해준다.

// 문자열 선언 및 할당
var number = 1;
var string = "aaaa";
var string = "1abc2";
console.log(number);
console.log(string);
console.log(number , string);
console.log(number + string);

let name = `minhyun`
let hihi = `안녕하세요 ${name} 입니다.`
// ES6 부터 `백틱 내에서는 이렇게 사용가능하다.`
console.log(`안녕하세요 ${name} 입니다.`)
console.log(hihi)

// 문자형 데이터는 '' , "" 을 사용하는데 백틱으로 가능한데 맥은 없다.

let na = null; // "" 로 감싸면 안된다.

let name1 = "홍길동";
let name2 = "성춘향";
let names = ['홍길동','성춘향','변사또','짱구']
console.log(names)

// 인덱싱
// 인덱스 : 0부터 시작!!!!!

console.log(names[0])
console.log(names[1])
console.log(names[2])

//
console.log(names.length) // 배열의 길이를 출력, 배열안에 저장되어 있는 값의 개수.

names.push('짱아')
console.log('push',names); // 배열의 마지막에 원하는 값을 추가한다.

names.unshift('신형만'); // 배열의 제일 앞에 값을 추가하는 기능
console.log('unshift',names)

names.pop(); // 배열의 가장 마지막 값을 삭제.
console.log('pop', names);

names.shift(); // 배열의 가장 앞에 값을 삭제한다.
console.log('shift',names)

let index = names.indexOf('짱구')
names.indexOf('짱구'); // 배열안에 "짱구" 가 몇번 인덱스에 위치해있는지 알려준다.
console.log(index) // 만약 값이 없는경우엔 -1 이 출력됨.

names.includes(); // 값이 포함되어 있는지 판별하느 기능.
let isIncludes = names.includes("변사또") // 값이 포함되어 있는지 판별하는 기능.
console.log(isIncludes);

// let 으로 새로운 변수로 저장해주어야 사용가능하다. true or false 로 하면 다음번 true , false 을 사용하지 못하게된다.