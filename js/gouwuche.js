$(function () {

    var sjh = document.querySelector('.sjh');
    var sj = localStorage.getItem('sj');
    sjh.innerHTML = 'hi 欢迎' + sj;
    //下载板块，鼠标经过显示二维码，离开消失
    var down = document.querySelector('.down');
    var download = document.querySelector('.download')
    console.log(download);
    down.onmouseover = function () {
        download.style.display = 'block';
    }
    down.onmouseout = function () {
        download.style.display = 'none';
    }

    //二级菜单
    var dis = document.querySelectorAll('.nav ul li');
    var disp = document.querySelector('.disp');
    dis[8].onmouseover = function () {
        disp.style.display = 'block'
    }
    dis[8].onmouseout = function () {
        disp.style.display = 'none';
    }
    //
    var ban_o = document.querySelectorAll('.ban-one');
    var ban_i = document.querySelectorAll('.ban-one i');
    var ban_t = document.querySelectorAll('.ban-two');
    for (var i = 0; i < ban_o.length; i++) {
        ban_o[i].index = i;
        ban_o[i].onmouseover = function () {
            ban_t[this.index].style.display = 'block';
        }

        ban_o[i].onmouseout = function () {
            ban_t[this.index].style.display = 'none';
        }

    }

    var je = document.querySelector('.jeb');
    var fx = document.querySelector('.fx');
    var fxsp = document.querySelector('.fx>span');

    je.onclick = function () {
        fx.style.display = 'block';
    }
    fxsp.onclick = function () {
        fx.style.display = 'none';
    }
})