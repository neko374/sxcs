//底栏跳转
var sy = document.getElementsByClassName("shouye")[0]
var fl = document.getElementsByClassName("shouye")[1]
var share = document.getElementsByClassName("shouye")[2]
var gwc = document.getElementsByClassName("shouye")[3]
var wd = document.getElementsByClassName("shouye")[4]
sy.onclick = function () {
    location.href = "../index.html"
}
fl.onclick = function () {
    location.href = "../page/fenlei.html"
}
share.onclick = function () {
    location.href = "../page/share.html"
}
gwc.onclick = function () {
    location.href = "../page/shopcar.html"
}
wd.onclick = function () {
    location.href = "../page/my.html"
}