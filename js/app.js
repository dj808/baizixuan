var url = '';

var countdown = 60; // 验证码60秒

// 页面跳转
function urlApp( url ){
    window.location.href = url;
}

function settime( obj ){
    var data = {};
    data.phone = $("input[name='user']").val();
    ajaxCode( obj )

    // $.post(url + 'index/index/code', data, function(rs){
    //     if (rs.code == 200){
    //         ajaxCode( obj )
    //     } else {
    //
    //     }
    // });

}

function ajaxCode( obj ){
    var code = $(obj);
    if (countdown == 0) {
        code.removeAttr('disabled');
        code.text("获取验证码");
        countdown =60;
        return;
    } else {
        code.text("重新发送(" + countdown + ")");
        code.attr('disabled',true);
        countdown--;
    }
    setTimeout(function() {
        settime(obj)
    }, 1000);
}