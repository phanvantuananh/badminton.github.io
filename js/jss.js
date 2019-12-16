
function dangnhap() {
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var regx_name=/^[A-Za-z ]{3,20}$/;
	var check_name=regx_name.test(username);
	var regx_password=/^[a-z0-9_@]{8,20}$/;
	var check_password=regx_password.test(password);
	if (username=='') {
		document.getElementById('username_').innerHTML='Bạn không được để rỗng !';
		return false;
	}else if (!check_name) {
		document.getElementById('username_').innerHTML='Bạn nhập sai định dạng !';
		return false;
	}else {
		document.getElementById('username_').innerHTML='';
	}
	if (password=='') {
		document.getElementById('password_').innerHTML='Bạn không được để rỗng !';
		return false;
	}else if (!check_password) {
		document.getElementById('password_').innerHTML='Bạn nhập sai định dạng !';
		return false;
	}else {
		document.getElementById('password_').innerHTML='';
	}
	if (typeof(Storage) !== 'undefined') {
    Username=localStorage.setItem('Username',username);
    Pass=localStorage.setItem('Password',password);
} if (username&&password) {
	alert('Bạn đã đăng ký thành công');

	}
}