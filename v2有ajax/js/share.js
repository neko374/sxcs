var na = localStorage.getItem("name")
$("button").click(function () {
    var val = $('input').val()//获取
    if (val == "") {
        alert("请输入内容")
    } else if (na == null) {
        alert("请先登录再发表")
        location.href = "../page/login.html"
    } else {
        $(".down").prepend('<div class="step">' +
            '<div class="head">' +
            '<a href="./my.html"><img src="../favicon.ico"></a>' +
            '</div>' +
            '<div class="x">X</div>' +
            '<a href="./my.html">' + na + '</a><br>' +
            '<span class="fabu">' + val + '</span><br>' +
            '<p>收藏</p>' + '<p>投币</p>' + '<p>点赞</p>' +
            '</div>'
        )
        $("input").val("")
        $(".x").click(function () {
            $(this).parent().remove()//删除
        })
        $("p").click(function () {
            if ($(this).css('color') == "#fb435b") {
                var num = $(this).siblings("span").children().eq(0).html()
                num--
                $(this).siblings("span").children().eq(0).html(num)
                $(this).css('color', 'grey')
            } else {
                var num = $(this).siblings('span').children().eq(0).html(num)
                num++
                $(this).siblings('span').children().eq(0).html(num)
                $(this).css('color', '#fb435b')
            }
        })
    }
})

