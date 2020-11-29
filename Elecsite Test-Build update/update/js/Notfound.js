var t = 5;
setInterval("refer()", 1000);
function refer() {
    if (t == 0) {
        location = "./index.html";
    }
    document.getElementById('gotoone').innerHTML = " " + t + " 秒跳转回主页~";
    document.getElementById('gototow').innerHTML = " " + t + "'s After Goto The Home~";
    t--;

}


