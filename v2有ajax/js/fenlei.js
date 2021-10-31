var header = document.getElementsByClassName("header")[0]
var center = document.getElementsByClassName("center")[0]
var wh = document.documentElement.clientHeight//页面高度
var hh = header.offsetHeight//获取头高度
var ch = wh - hh//计算center高度
center.style.height = ch + "px"
var swiper = document.getElementsByClassName("swiper")[0]
var wapper = document.getElementsByClassName("wapper")[0]
var pag = document.getElementsByClassName("pag")[0]
var point = pag.children//获取 pag 的子元素
console.log(point)
var n = 0;
var t;


function move() {//封装图和点的移动
    wapper.style.top = -100 * n + "%"
    for (var i = 0; i < point.length; i++) {
        point[i].className = ""
    }
    point[n].className = "point"
}
//圆点切换图
for (var i = 0; i < point.length; i++) {
    point[i].index = i
    point[i].onclick = function () {
        for (var j = 0; j < point.length; j++) {
            point[j].className = ""
        }
        n = this.index
        this.className = "point"
        wapper.style.top = -100 * n + "%"
    }
}