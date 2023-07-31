// setTimeout()
// setTimeout(code, delay) delay 동안 기다리다가 code 를 실행

// console.log(1);
// setTimeout( () => {
//     console.log(2);
// }, 2000);
// console.log(3);

// 편의점에 들어가서 음료수를 사고 나오는 상황

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다')
}

function pinkDrink(callback) {
    setTimeout( () => {
        console.log('고민 끝!')
        product = `제로 콜리`
        price = 2000;
        pay(product,price);
    }, 3000);
}

function pay (product,price) {
    console.log(`상품명 ${product}, 가격 ${price}`);
}

let product;
let price;
goMart();
pinkDrink(function pay (product,price) {
    console.log(`상품명 ${product}, 가격 ${price}`);
});
// pay(product,price);

// 콜백함수 : 함수 타입 파라미터 맨 마지막에 하나 더 선언
function mainFunc (param1, param2, callBack) {
    console.log(param1, param2);
    callBack();
}

function callBackFunc (param) {
    console.log(`콜백 함수 입니다.`)
}

mainFunc(1,2, callBackFunc);

