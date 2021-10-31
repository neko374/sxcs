$.ajax({
    url: "../data/list.json",//请求地址
    type: "get",//请求方式
    async: true,//true异步，false同步
    data: {},//发送给服务器的数据
    success: function (res) {//请求成功回调
        $.each(res.shop, function (aaa, bbb) {//es6模板字符串
            //data是自定义的属性添加给div
            $(".box").append(`<div class="sh" data="${bbb.sid}">
                <img src="${bbb.Src}">
                <span class="nam">${bbb.sname}</span><br>
                <span class="dis">${bbb.des}</span><br>
                <span class="price">${bbb.price}</span>
                </div><br>`)
            $(".box").click(function () {
                alert($(this).find(".sid").text())
            })
        })
        //跳转详情页并在地址栏添加?sid=  1234
        $(".box>div").click(function () {
            var sid = $(this).attr("data")//获取sid
            console.log(sid)
            window.open("../page/shop.html" + sid)
        })
        console.log(res)
    },
    error: function (err) {//请求失败时回调
        console.log(err)
    }
})