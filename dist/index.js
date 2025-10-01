"use strict";
// 문자열
let mystring = "yeeun";
console.log("String : ", mystring);
// Number
let myNum = 25;
console.log("Number", myNum);
// boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job is not completed");
}
//null ( 한가지 이상의 타입: 유니언타입으로 활용을 많이 한다. )
// 객체가 존재하지 않거나, 값이 없음!
//user 는 문자열이나 null 값을 갖는다.
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("yeeun"); //login함수에서 string으로 받아왔기 때문에 타입은 string
logout(); //그러나 logout함수에서 null로 재할당을 받아서 타입은 null
// any 모든 타입 가능 -> 타입의 안정성 포기함.
let someValue;
someValue.toString(); // 다 가능
someValue = false; // 다 가능
