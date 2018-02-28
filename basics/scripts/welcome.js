/**
 * Created by York on 2018/2/27.
 */
function welcome() {
    alert("Welcome!Apple");
    alert("You can see the future");
}
welcome();

var password=prompt("请输入密码");
if (isNaN(password)){
    alert("请输入数字");
}
else {
    if(password==123) {
        alert("密码正确");
    }
    else {
        alert("密码错误，请重新输入！");
    }
}
var years=prompt("请输入年龄");
if(years>=18) {
    if (years>30||years<50){
        if (years>100){
            alert("祝您福如东海！");
        }
        else{
            alert("年纪不小了");
        }
    }
    else{
        alert("成年了！");
    }
}
else {
    alert("未成年，请退出！");
}
var count = prompt("你要几部手机？"),iphone=10;
    if (count>1){
        if (count%2==0){
            price = (iphone + iphone / 2 )* count/2;
        }
        else
        {
            price = (count/2+0.5)*( iphone + iphone / 2) -iphone/2;
        }
    }
    else {
        price = iphone;
    }
    alert("你需要支付"+price+"元");