var gongNengZhuangTai = 0;
var yvEr = 5000;
var qvKuanJinE = 0;

//功能代码
function qvKuan() {
    gongNengZhuangTai = Number(prompt("请选择您需要的功能:\n1.查询\n2.取款\n3.转账\n退卡"));
    if (gongNengZhuangTai === 2) {

        //获取取款金额，如果输入负数变成正数
        qvKuanJinE = prompt("请输入要取几张100");
        qvKuanJinE = Math.abs(qvKuanJinE);

        //限制输入整数
        if (qvKuanJinE % 1 === 0) {
            if (yvEr >= qvKuanJinE) {
                yvEr = yvEr - qvKuanJinE * 100;
                alert("正在吐钱");
                alert("您的余额还剩" + yvEr + "元");
                alert("取款成功");
                alert("已退出系统，欢迎下次光临");
            } else {
                alert("金额不足，请充值冥币");
            }
        } else {
            alert("请输入整数");
        }

    } else {
        alert("功能开发中，请稍等");
    }
}


alert("欢迎来到天地银行");


//判断用户卡号是否是666666,如果不是，循环，让用户重新输入
while (!(kaHao === "666666")) {
    var kaHao = prompt("请输入您的卡号");
    if (kaHao === "666666") {


        //获取密码，进行判断是否是正确密码
        var pwd = prompt("请输入卡号密码");
        if (pwd !== "888888") {


            //循环，密码输入三次自动锁死
            for (var i = 2; i >= 0; i--) {
                alert("密码错误，还有" + i + "次尝试机会");
                if (i === 0) {
                    alert("密码连续输入错误，请联系柜台人员");
                    break;
                }
                pwd = prompt("请输入卡号密码");
                if (pwd === "888888") {
                    alert("密码正确，正在进入系统，请稍后");

                    //调用函数，进行功能代码
                    qvKuan();
                    break;
                }
            }


        } else {
            alert("密码正确，正在进入系统，请稍后");
            qvKuan();
        }
    } else {
        alert("卡号不正确，请重新输入");
    }
}
