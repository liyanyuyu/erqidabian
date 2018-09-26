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
    var pimg = document.querySelector('.pro-max img');
    var limg = document.querySelectorAll('.lis-i img');
    var yimg = document.querySelectorAll('.pro-bo img');

    for (var i = 0; i < limg.length; i++) {
        limg[i].onclick = function () {
            pimg.src = this.src;
        }
    }
    for (var i = 0; i < yimg.length; i++) {
        yimg[i].onclick = function () {
            pimg.src = this.src;
        }
    }
    var inpn = document.querySelector('.pro-a input');
    console.log(inpn.value);

    inpn.onclick = function () {
        if (inpn.value >= 20) {
            alert('每人最多限购20件');
        }
    }

})