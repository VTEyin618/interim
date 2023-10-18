$(function() { 
	$('.body-btn').click(function() {//为登录按钮定义点击事件
		if ($('#zhang').val() != '' && $('#mima').val() != '') {//判断输入框是否为空
			if ($('#zhang').val() == 'admin' && $('#mima').val() == 'admin123') {//判断用户输入的账号密码是否正确
				alert('登录成功！');//弹窗提示登录成功
				location.href = 'index.html';//登录成功后跳到首页
			} else {
				alert('账号或密码输入错误！');//提示账号或密码输入错误
			} 
		} else {
			alert('文本框不能为空！');//提示文本框不能为空
		}
	})
})  
 