var na = localStorage.getItem("nam")
var ph = localStorage.getItem("phone")
var ci = localStorage.getItem("city")
var ho = localStorage.getItem("home")
var home = document.getElementsByClassName("home")[0]
var p = document.getElementById("home")
window.onload = function () {
    var newdiv = document.createElement("div")
    if (na != null) {
        newdiv.innerHTML = '收货人:' + na + '<br>' + '手机号:' + ph + '<br>' + '地址  &nbsp; :' + ci + ' ' + ho
        home.appendChild(newdiv)
        p.remove()
    }
}
home.onclick = function () {
    location.href = "../page/home.html"
}