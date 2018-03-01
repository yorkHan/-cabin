/**
 * Created by York on 2018/2/27.
 */
// function welcome() {
//     alert("Welcome!Apple");
//     alert("You can see the future");
// }
// welcome();
//
// var password=prompt("请输入密码");
// if (isNaN(password)){
//     document.write("请输入数字");
// }
// else {
//     if(password==123) {
//         document.write("密码正确");
//     }
//     else {
//         document.write("密码错误，请重新输入！");
//     }
// }
// var years=prompt("请输入年龄");
// if(years>=18) {
//     if (years>30||years<50){
//         if (years>100){
//             document.write("祝您福如东海！");
//         }
//         else{
//             document.write("年纪不小了");
//         }
//     }
//     else{
//         document.write("成年了！");
//     }
// }
// else {
//     document.write("未成年，请退出！");
// }
// var count = prompt("你要几部手机？"),iphone=10;
//     if (count>1){
//         if (count%2==0){
//             price = (iphone + iphone / 2 )* count/2;
//         }
//         else
//         {
//             price = (count/2+0.5)*( iphone + iphone / 2) -iphone/2;
//         }
//     }
//     else {
//         price = iphone;
//     }
//     document.write("你需要支付"+price+"元");
//
// var radom = Math.random(), ok = false, str;
// radom = Math.floor(radom * 6) + 1;
// console.info(radom);
// //document.write(radom);
// //document.write("<img src=\"image/"+radom+".jpg\"/> ");
//
// function guess() {
//     if (ok) {
//         return;
//     }
//     else {
//         var guess = prompt("请猜是几点？");
//         if (!Number.isInteger(guess / 1) || guess > 6 || guess < 1) {
//             document.getElementById("message").innerHTML = "您输入有误，请重新输入！";
//             return;
//         }
//
//         var diff = Math.abs(radom - guess);
//         console.info("diff=====" + diff);
//         if (guess == radom) {
//             str = "你猜对了!" + "<img src=\"image/" + radom + ".jpg\"/> ";
//             ok = true;
//         }
//         else {
//             if (guess > radom) {
//                 if (diff > 1) {
//                     str = "你猜太大了!";
//                 }
//                 else {
//                     str = "你猜有点大了!";
//                 }
//             }
//             else {
//                 if (diff > 1) {
//                     str = "你猜太小了!";
//                 }
//                 else {
//                     str = "你猜有点小了!";
//                 }
//             }
//         }
//     }
//     document.getElementById("message").innerHTML = str;
// }
// guess();
// guess();
// guess();

function getanswer() {
    var ramdom=Math.floor(Math.random()*4+1);
    str=String.fromCharCode(ramdom+64);
    document.write(str);
}
function get5answer() {
    getanswer();
    getanswer();
    getanswer();
    getanswer();
    getanswer();
    document.write("<br/>");
}
get5answer();
get5answer();
get5answer();
get5answer();
get5answer();