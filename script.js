// if 語法
// if (布林值) { 程式區塊 }
// 布林值為 true 才會執行 程式區塊
if (true) {
    console.log("我是判斷式");
}

// else 否則，語法：
// else { 程式區塊 }
// 布林值為 false 才會執行 else { 程式區塊 }

var price1 = 50;

if (price1 >= 200) {
    console.log("大於 200 塊的商品");
}
else {
    console.log("小於 200 塊的商品");
}

// else if 語法：
// else if (布林值) {}
// else if 布林值為 true 才會執行 else if () { 程式區塊 }
var score = 50;

if (score >= 60) {
    console.log("及格");
}
else if (score >= 40) {
    console.log("補考");
}
else {
    console.log("當掉");
}
