$(function() {
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })
})


// 自定义校验规则
var form = layui.form
form.verify({
    // 自定义密码规则
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    // 确认密码是否一致的规则
    repwd: function(value) {
        // 属性选择器 [] 前要带空格,input可以省略
        var pwd = $('.reg-box input[name=password]').val()

        // 比较两次输入的value值
        if (pwd !== value) {
            return '两次密码输入不一致,请重新输入!'
        }
    }
})

// 注册功能
$('#form-reg').on('submit', function(e) {
    e.preventDefault()
    $.ajax({
        method: 'POST',
        url: 'http://ajax.frontend.itheima.net/api/reguser',
        data: {
            username: $('#form-reg input[name=username]').val(),
            password: $('#form-reg input[name=password]').val(),
        },
        success: function(res) {
            if (res.status != 0) {
                return alert(res.message)
            }
            alert(res.message)
        }
    })
})