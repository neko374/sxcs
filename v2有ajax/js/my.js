var he = document.getElementsByClassName("he")[0]
var na = localStorage.getItem("name")
var img = document.getElementsByTagName("img")[0]
var sp = document.getElementsByClassName("sp")[0]
var head = document.getElementsByClassName("head")[0]
console.log(img)
window.onload = function () {
    var newdiv = document.createElement("div")
    newdiv.className = "head"
    if (na != null) {
        newdiv.innerHTML = '<img src="../favicon.ico">' + '<span>' + na + '</span>' + '<br><span>个性签名</span>'
        he.appendChild(newdiv)
        img.remove()
        sp.remove()
        head.remove()
    }
}
he.onclick = function () {
    if (na == null) {
        alert("请登录")
        location.href = "../page/login.html"

    } else {
        alert("您已登录")
    }
}