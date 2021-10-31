var flag = true;
var open = document.getElementsByTagName("img")[0]
var close = document.getElementsByTagName("img")[1]
var moren = document.getElementsByClassName("line")[5]

moren.onclick = function () {
    if (flag) {
        open.style.display = "none"
        close.style.display = "block"
        flag = false
    } else if (flag == false) {
        open.style.display = "block"
        close.style.display = "none"
        flag = true
    }
}
$('#save').click(function () {
    if ($('input').eq(0).val() == "" || $('input').eq(1).val() == "" || $('input').eq(2).val() == "" || $('input').eq(3).val() == "") {
        alert("请填写完整")
    } else {
        localStorage.setItem("nam", $('input').eq(0).val())
        localStorage.setItem("phone", $('input').eq(1).val())
        localStorage.setItem("city", $('input').eq(2).val())
        localStorage.setItem("home", $('input').eq(3).val())
        location.href = "./order.html"
    }
})

var back = document.getElementsByTagName("svg")[0]
back.onclick = function () {
    history.go(-1)
}