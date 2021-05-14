$(function () {
    $("#input_usr").css("borderBottom", "2px solid white");
    $("#input_pwd").css("borderBottom", "2px solid white");
    $(function Submit() {
        $(".input_submit").submit(function (e) {
            if (($("#input_usr".val() == "") || ($("input_pwd").val() == ""))) {
                if ($("#input_usr".val() == "")) {
                    $("#tips_usr")
                        .css("borderBottom")
                }
                e.preventDefault();
            }
        });
    })

    // 获取焦点
    $(function Focus() {
        $("#input_usr").focus(function () {
            $("#tips_usr").css("fontSize", "12px")
                .css("bottom", "24%");
        });
        $("#input_pwd").focus(function () {
            $("#tips_pwd").css("fontSize", "12px")
                .css("bottom", "24%");
        });
    });

    // 失去焦点
    $(function Blur() {
        $("#input_usr").blur(function () {
            if ($("#input_usr").val() == "") {
                $("#tips_usr")
                    .css("borderBottom", "red")
                    .css("bottom", "0")
                    .css("fontSize", "16px")
            }
        });
        $("#input_pwd").blur(function () {
            if ($("#input_pwd").val() == "") {
                $("#tips_pwd")
                    .css("borderBottom", "red")
                    .css("bottom", "0")
                    .css("fontSize", "16px")
            }
        });
    })
    $("hr")
        .css("width", "99.5%")
        .css("transition", "all 2s ")
        .css("background", "#008cffb0")
});