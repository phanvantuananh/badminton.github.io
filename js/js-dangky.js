function dangky() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var confirmPassword= document.getElementById('confirmPassword').value;
	var phone = document.getElementById('phone').value;
	// alert("message?: DOMString");
	// return false;
	var regx_name=/^[A-Za-z ]{3,20}$/;
	var check_name=regx_name.test(username);
	var regx_password=/^[a-z0-9_@]{8,20}$/;
	var check_password=regx_password.test(password);
	var regx_confirmPassword=/^[a-z0-9_@]{8,20}$/;
	var check_confirmPassword=regx_confirmPassword.test(confirmPassword);
	var regx_phone=/^[0][3|6|8|9][0-9]{8}$/;
	var check_phone=regx_phone.test(phone);

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
	if (confirmPassword=='') {
		document.getElementById('confirmPassword_').innerHTML='Bạn không được để rỗng !';
		return false;
	}else if (!check_confirmPassword) {
		document.getElementById('confirmPassword_').innerHTML='Bạn nhập sai định dạng !';
		return false;
	}
	else {
		document.getElementById('confirmPassword_').innerHTML='';
	}
	if (phone=='') {
		document.getElementById('phone_').innerHTML='Bạn không được để rỗng !';
		return false;
	}else if (!check_phone) {
		document.getElementById('phone_').innerHTML='Bạn nhập sai định dạng !';
		return false;
	}
	else {
		document.getElementById('phone_').innerHTML='';
	}
	if (password!=confirmPassword) {
		document.getElementById('confirmPassword_').innerHTML='Mật khẩu xác nhận chưa đúng !';
		return false;
	}
	if (typeof(Storage) !== 'undefined') {
    Username=localStorage.setItem('Username',username);
    Phone=localStorage.setItem('Phone',phone);
    Pass=localStorage.setItem('Password',password);
} if (username&&password&&confirmPassword&&phone) {
	alert('Bạn đã đăng ký thành công');

	}
	
}