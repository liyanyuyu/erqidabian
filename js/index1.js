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
    //
    var fixw = document.querySelectorAll(".fix-w li");
    var fixwimg1 = document.querySelectorAll(".fix-w1");
    var fixwimg2 = document.querySelectorAll(".fix-w2");
    for (var i = 0; i < fixw.length; i++) {
        fixw[i].index = i;
        fixw[i].onmouseover = function () {

            fixwimg1[this.index].style.display = "none";
            fixwimg2[this.index].style.display = "block";
        }
        fixw[i].onmouseout = function () {
            fixwimg2[this.index].style.display = "none";
            fixwimg1[this.index].style.display = "block";
        }
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
            ban_i[this.index].removeAttribute('class', 'actives');
        }

    }
    //轮播图
    //
    //    $(function () {
    var lis = document.querySelectorAll('.list li');
    var nis = document.querySelectorAll('.num li');
    var box = document.querySelector('.ban-right');
    var btn = document.querySelectorAll('.ban-right>a');
    console.log(box);
    console.log(btn);
    //        //我需要声明一个变量来当做索引
    var i = 0;
    //        //我需要一个变量来接收循环 方便清除
    var xh;
    //        //用一个函数来做一个自动播放功能
    function run() {
        //            //做一个循环来实现自动播放
        xh = setInterval(function () {
            lis[i].style.display = 'none'
            nis[i].removeAttribute('class', 'active');
            i++;
            if (i >= 4) {
                i = 0;
            }
            lis[i].style.display = 'block';
            nis[i].setAttribute('class', 'active');
        }, 2000)
    }
    //        //自动播放功能是一个函数  不调用不会执行
    run();
    for (var j = 0; j < lis.length; j++) {
        lis[j].onmouseover = function () {
            clearInterval(xh);
        }
        lis[j].onmouseout = function () {
            run();
        }
    }
    box.onmouseover = function () {
        btn[0].style.display = 'block';
        btn[1].style.display = 'block';
    }
    box.onmouseout = function () {
        btn[0].style.display = 'none';
        btn[1].style.display = 'none';
    }
    btn[0].onmouseover = function () {
        clearInterval(xh);
    }
    btn[1].onmouseover = function () {
        clearInterval(xh);
    }
    btn[0].onmouseout = function () {
        run();
    }
    btn[1].onmouseout = function () {
        run();
    }
    btn[0].onclick = function () {
        lis[i].style.display = 'none'
        nis[i].removeAttribute('class', 'active');
        i--;
        if (i < 0) {
            i = 3;
        }
        lis[i].style.display = 'block';
        nis[i].setAttribute('class', 'active');
    }
    btn[1].onclick = function () {
        lis[i].style.display = 'none';
        nis[i].removeAttribute('class', 'active');
        i++;
        if (i >= 3) {
            i = 0;
        }
        lis[i].style.display = 'block';
        nis[i].setAttribute('class', 'active');

    }
    for (var n = 0; n < nis.length; n++) {
        nis[n].index = n;
        nis[n].onmouseover = function () {
            clearInterval(xh);
            for (var a = 0; a < lis.length; a++) {
                lis[i].style.display = 'none';
                nis[i].removeAttribute('class', 'active');
            }
            i = this.index;
            lis[i].style.display = 'block';
            nis[i].setAttribute('class', 'active');
        }
    }
    //选项卡

    var mai = document.querySelectorAll('.main-lis ul li a');
    var ma = document.querySelectorAll('.main-lis-t ul');
    for (var g = 0; g < mai.length; g++) {
        mai[g].index = g;
        mai[g].onmouseover = function () {
            for (var h = 0; h < ma.length; h++) {
                mai[h].removeAttribute('class', 'wz');
                ma[h].style.display = 'none';
            }
            mai[this.index].setAttribute('class', 'wz');
            ma[this.index].style.display = 'block';
        }
    }
    //选项卡
    var mais = document.querySelectorAll('.main-li ul li a');
    var mas = document.querySelectorAll('.main-li-t ul');

    for (var g = 0; g < mais.length; g++) {
        mais[g].index = g;
        mais[g].onmouseover = function () {
            for (var h = 0; h < mas.length; h++) {
                mais[h].removeAttribute('class', 'wz');
                mas[h].style.display = 'none';
            }
            mais[this.index].setAttribute('class', 'wz');
            mas[this.index].style.display = 'block';
        }
    }

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $('.fix-t').fadeIn(500);
            } else {
                $('.fix-t').fadeOut(500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $('.fix-t').click(function () {
            $('body').animate({
                scrollTop: 0
            }, 1500);
        });
    });
    $('.fix-t').hover(function () {
        //用指定的html内容或元素替换被选元素或内容
        $('.fix-t>img').replaceWith("<h5>返回顶部</h5>");
    }, function () {
        $('.fix-t>h5').replaceWith("<img src='./img/tops.png'>");
    })
    var fixis = document.querySelector('.fix1 span');
    var fixii = document.querySelector('.fix1 img');
    console.log(fixis)
    console.log(fixii)
    fixis.onclick = function () {
        fixii.style.display = 'none';
    }
    fixii.onclick = function () {
        window.location.href = 'progress.html';
    }
})