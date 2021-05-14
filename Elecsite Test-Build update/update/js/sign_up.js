function Checkkey() {
    var pwd1 = document.getElementById('pwd1');
    var pwd2 = document.getElementById('pwd2');
    if (pwd1.value == pwd2.value && pwd2.value == pwd1.value) {
        pwd1.style.borderBottomColor = "#2EFE2E";
        pwd2.style.borderBottomColor = "#2EFE2E";
        pwd1.title = "两次密码输入一致";
        pwd2.title = "两次密码输入一致";
        pwd1.style.cursor = "pointer";
        pwd2.style.cursor = "pointer";
        subbtn.disabled = "";
    }
    else {
        pwd1.style.borderBottomColor = "#FE2E2E";
        pwd2.style.borderBottomColor = "#FE2E2E";
        pwd1.title = "两次密码输入不一致";
        pwd2.title = "两次密码输入不一致";
        pwd1.style.cursor = "pointer";
        pwd2.style.cursor = "pointer";
        subbtn.disabled = "true";
    }
    pwd1, pwd2.style.transition = "all 0.5s linear";
}
function CheckName() {
    var submit = document.getElementById('subbtn');
    var usrname = document.getElementById('usrname');
    if (usrname.value.length > 5) {
        usrname.style.borderBottomColor = "#FE2E2E";
        usrname.style.transition = "all 0.5s linear";
        usrname.style.cursor = "pointer";
        usrname.title = "长度不可超过5字节";
        subbtn.disabled = "true";
    }
    else {
        usrname.style.borderBottomColor = "#2EFE2E";
        usrname.style.transition = "all 0.5s linear";
        usrname.style.cursor = "pointer";
        subbtn.disabled = "";
    }
}

