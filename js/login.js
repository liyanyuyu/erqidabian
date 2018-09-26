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
    var sj = localStorage.getItem('sj');
    var mm = localStorage.getItem('mm');
    console.log(sj);
    console.log(mm);
    inp[0].onfocus = function () {
        p[0].innerHTML = '请输入11位手机号';
        p[0].style.color = 'red';
    }
    inp[0].onblur = function () {
        //        if(inp[0].value==sj){
        //            alert('123');
        //        }else{
        //            alert('456');
        //        }
        if (reg.test(inp[0].value)) {
            p[0].innerHTML = '格式正确';
            p[0].style.color = 'green';
        } else {
            p[0].innerHTML = '格式不正确，重新输入'
            p[0].style.color = 'red';
        }
    }
    //    inp[1].onfocus=function(){
    //        p[1].innerHTML='请输入6-12位数字.字母.下划线密码';
    //        p[1].style.color='red';
    //    }
    //    inp[1].onblur=function(){
    //        if(reg1.test(inp[1].value)){
    //            p[1].innerHTML='格式正确';
    //            p[1].style.color='green';
    //        }else{
    //            p[1].innerHTML='格式不正确，重新输入'
    //            p[1].style.color='red';
    //        }
    zc.onclick = function () {
        if ((p[0].innerHTML == '格式正确') && (inp[0].value == sj) && (inp[1].value == mm)) {
            alert('登录成功，点击确定跳转到主页面');
            window.location.href = 'index1.html';
        } else if ((p[0].innerHTML == '格式正确') && (inp[0].value != sj) || (inp[1].value != mm)) {
            alert('账号密码错误，检查后在登录');

        } else {
            alert('检查格式正确后登录');
        }
    }


})