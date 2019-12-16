function good () {
	var username=document.getElementById('username').value;
	var diachi=document.getElementById('diachi').value; 
	var phone=document.getElementById('phone').value; 
	var chon=document.getElementById('hinhthuc').value;
	var regx_name=/^[A-Za-z ]{3,20}$/;
	var check_name=regx_name.test(username);
	var regx_diachi=/^[A-Za-z -]{3,20}$/;
	var check_diachi=regx_diachi.test(diachi);
	var regx_phone=/^[0][3|6|8|9][0-9]{8}$/;
	var check_phone=regx_phone.test(phone);
	if (username=='') {
		document.getElementById('username_').innerHTML='Bạn không được để rỗng trường này !';
		return false;
	}else if (!check_name) {
		document.getElementById('username_').innerHTML='Bạn nhập sai định dạng !';
		return false;
	}else {
		document.getElementById('username_').innerHTML='';
		document.getElementById('name').innerHTML=username;
	}
	if (diachi=='') {
		document.getElementById('diachi_').innerHTML='Bạn không được để rỗng trường này !';
		return false;
	}else if (!check_diachi) {
		document.getElementById('diachi_').innerHTML='Bạn nhập sai định dạng !';
		return false;
	}else {
		document.getElementById('diachi_').innerHTML='';
		document.getElementById('address').innerHTML=diachi;
	}
	if (phone=='') {
		document.getElementById('phone_').innerHTML='Bạn không được để rỗng trường này !';
		return false;
	}else if (!check_phone) {
		document.getElementById('phone_').innerHTML='Bạn nhập sai định dạng !';
				return false;
	}else {
		document.getElementById('phone_').innerHTML='';
		document.getElementById('tell').innerHTML=phone;
	}

	if (chon=='') {
		document.getElementById('hinhthuc_').innerHTML='Bạn chưa chonh hình thức thanh toán !'
		return false;
	}
	else{
		document.getElementById('hinhthuc_').innerHTML=' ';
		document.getElementById('phongthuc').innerHTML=chon;
	}
	var date = new Date();
	document.getElementById('date').innerText= date;
}

function thanhtoan () {
	alert('Bạn đã đăng ký thành công');

	}
	