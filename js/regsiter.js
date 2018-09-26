$(function () {
    var inp = document.querySelectorAll('.reg ul li input');
    var p = document.querySelectorAll('.reg ul p');
    var yzm = document.querySelector('.reg ul li button');
    var zc = document.querySelector('.reg ul>button');
    var zc = document.querySelector('.reg ul>a');
    console.log(inp)
    var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    var reg1 = /^[0-9a-zA-Z_]{6,12}$/;
    var mat;
    inp[0].onfocus = function () {
        p[0].innerHTML = '请输入11位手机号';
        p[0].style.color = 'red';
    }
    inp[0].onblur = function () {
        if (reg.test(inp[0].value)) {
            p[0].innerHTML = '格式正确';
            p[0].style.color = 'green';
        } else {
            p[0].innerHTML = '格式不正确，重新输入'
            p[0].style.color = 'red';
        }
    }
    inp[1].onfocus = function () {
        p[1].innerHTML = '请输入6-12位数字.字母.下划线密码';
        p[1].style.color = 'red';
    }
    inp[1].onblur = function () {
        if (reg1.test(inp[1].value)) {
            p[1].innerHTML = '格式正确';
            p[1].style.color = 'green';
        } else {
            p[1].innerHTML = '格式不正确，重新输入'
            p[1].style.color = 'red';
        }
        inp[2].onfocus = function () {
            p[2].innerHTML = '请输入验证码';
            p[2].style.color = 'red';
        }
        inp[2].onblur = function () {
            if (num == inp[2].value) {
                p[2].innerHTML = '输入正确';
                p[2].style.color = 'green';
            } else {
                p[2].innerHTML = '输入不正确，重新输入'
                p[2].style.color = 'red';
            }
        }
        var bool = true;
        inp[3].onclick = function () {
            if (bool) {
                bool = false;
                p[3].innerHTML = '我已阅读';
                p[3].style.color = 'green';
            } else {
                bool = true;
                p[3].innerHTML = '&nbsp;'
            }
        }
        //获取验证码
        var num;

        function math() {
            yzm.onclick = function () {
                num = Math.floor(Math.random() * (9999 - 1000) + 1000);
                if (p[0].innerHTML == '格式正确') {
                    alert(num);
                } else {
                    alert('请输入手机号')
                }
            }
        }
        math();
        zc.onclick = function () {
            if ((p[0].innerHTML == '格式正确') && (p[1].innerHTML == '格式正确') && (p[2].innerHTML == '输入正确') && (p[3].innerHTML == '我已阅读')) {
                alert('注册成功，点击确定跳转到登录页面');
                console.log(inp[0].value);
                console.log(inp[1].value);
                localStorage.setItem('sj', inp[0].value);
                localStorage.setItem('mm', inp[1].value);
                window.location.href = 'login.html';
            } else if ((p[0].innerHTML == '格式正确') && (p[1].innerHTML == '格式正确') && (p[2].innerHTML == '输入正确') && (p[3].innerHTML != '我已阅读')) {
                alert('请先阅读美丽说注册条款');

            } else {
                alert('登录失败，检查所有项');
                a.href = '#';
            }
        }


    }
})