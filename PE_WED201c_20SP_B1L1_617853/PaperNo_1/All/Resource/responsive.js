window.onload = function() {
	document.getElementById('para2').style.display = "none";
}
function show(){
	var form = document.getElementById('para2');
	var text = document.getElementById('para3');
	if(form.style.display == "none"){
		form.style.display = "block";
		text.innerHTML = "SHOW LESS";
	}else {
		form.style.display = "none";
		text.innerHTML = "SHOW ALL";
	}
}

function Enroll(){
	var t1 = document.getElementById('t1');
	var t2 = document.getElementById('t2');
	var t3 = document.getElementById('t3');
	var t4 = document.getElementById('t4');
	var t5 = document.getElementById('t5');
	var t6 = document.getElementById('t6');
	var t7 = document.getElementById('t7');
	if (t1.value == '' && t2.value == '' && t3.value == '' && t4.value == '') {
		alert("please fill all fields");
		return false;
	}
	if(t3.value != t4.value){
		alert("password/repassword is invalid");
		return false;
	}
	else{
		confirm("would you like to choose options");
		return true;
	}
}