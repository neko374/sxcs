var yn = document.getElementsByTagName("span")
var nam = document.getElementsByTagName("input")[0]
var pas = document.getElementsByTagName("input")[1]
var btn = document.getElementsByTagName("button")[0]
var reg1 = /^[0-9]{11}$/
var reg2 = /^\S{6,8}$/
var word = document.getElementsByTagName("input")[2]
var sure;
// 用户名
nam.onchange = function () {
    var val1 = nam.value
    res1 = reg1.test(val1)
    console.log(res1)
    if (res1) {
        yn[1].style.display = "none"
        yn[0].style.display = "inline-block"
        res1 = true
    } else {
        yn[0].style.display = "none"
        yn[1].style.display = "inline-block"
        res1 = false
    }
}
// 密码
pas.onchange = function () {
    var val2 = pas.value
    res2 = reg2.test(val2)
    console.log(res2)
    if (res2) {
        yn[3].style.display = "none"
        yn[2].style.display = "inline-block"
        res2 = true
    } else {
        yn[2].style.display = "none"
        yn[3].style.display = "inline-block"
        res2 = false
    }
}
// 注册按钮验证
btn.onclick = function () {
    var na = localStorage.getItem("name")
    var pa = localStorage.getItem("pass")
    if (nam.value == "" || pas.value == "") {
        alert("请填写完整")
    }
    else if (na === nam.value && pa === pas.value) {
        location.href = "../page/my.html"
    }
    else {
        alert("填写有误")
    }
}
