var isperfect = false;
$(function () {

    //数字跳动
    setInterval(function () {
        var total = fRandomBy(50000, 200000);
        var materialPay = Math.round(total * 0.469);
        var artificialPay = Math.round(total * 0.471);
        var designPay = Math.round(total * 0.042);
        var qualityPay = Math.round(total * 0.017);
        total = materialPay + artificialPay + designPay + qualityPay;
        $('#bprice01').text(total);
        $('#materialPay01').text(materialPay);
        $('#artificialPay01').text(artificialPay);
        $('#designPay01').text(designPay);
        $('#qualityPay01').text(qualityPay);
    }, 300);

    //刷新图片验证码
    $('.random-code').click(function () {
        flushImgCode();
    });

    //计算报价
    $('.start-btn01').click(function () {

        var provinceId = $('#jsq_province').val();
        if (provinceId === '' || provinceId === 1) {
            alert('请选择省份');
            return;
        }
        var cityId = $('#jsq_city').val();
        if (cityId === '' || cityId === 0) {
            alert('请选择城市');
            return;
        }

        var housearea = $('#Area01').val();
        if (housearea === '' || housearea <= 0) {
            $('#Area01').val('');
            $('#Area01').focus();
            return;
        }
        var room = $('#room01').val();
        var hall = $('#hall01').val();
        var kitchen = $('#kitchen01').val();
        var toilet = $('#toilet01').val();
        var balcony = $('#balcony01').val();

        var username = $('#ApplyUser01').val();
        if (username === '') {
            $('#ApplyUser01').focus();
            return;
        }
        var mobile = $('#Mobile01').val();
        if (!isMobil(mobile)) {
            $('#Mobile01').focus();
            return;
        }
        //var mobilecode = $('#MobileCode').val();
        //if (mobilecode == '' && mobilecode.length != 6) {
        //    $('#MobileCode').focus();
        //    return;
        //}

        $(this).html('<span class="one">计算中...</span>');//text("计算中...");
        //设置按钮不可用
        $(this).attr("disabled", true);

        var args = {
            'UserName': username,
            'Mobile': mobile,
            //'MobileCode': mobilecode,
            'ProvinceId': provinceId,
            'CityId': cityId,
            'ClassId': $('#ClassId01').val(),
            'HouseArea': housearea,
            'Room': room,
            'Hall': hall,
            'Kitchen': kitchen,
            'Toilet': toilet,
            'Balcony': balcony
        };

        $.ajax({
            url: '/api/webhelper/dealbaojia/',
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(args),
            success: function (data) {
                if (data.result.success) {

                    if (data.result.data !== null) {
                        $('#OrderGuid01').val(data.result.data.orderGuid);
                        $('#ResultModel01').val(data.result.data.mobile);
                        $('#result_total01').text(data.result.data.total);
                        $('#result_material01').text(data.result.data.material);
                        $('#result_artificial01').text(data.result.data.artificial);
                        $('#result_design01').text(data.result.data.design + "元");
                        $('#result_quality01').text(data.result.data.quality + "元");
                        $('.calculator-before01').hide();
                        $('.calculator-after01').show();
                    } else {
                        resetinput();
                        $(this).html('<span class="two">开始<br />计算</span>');
                        alert("计算错误,请刷新页面重试");
                    }

                } else {
                    resetinput();
                    $(this).html('<span class="two">开始<br />计算</span>');
                    alert("计算错误,请刷新页面重试");
                }
            }
        });

        $(this).attr("disabled", false);

    });

    //信息完善提交
    $('.sub-btn01').click(function () {

        if (isperfect) {
            alert('信息已完善,请等待客服联系');
            return;
        }

        var ste = $('input:radio[name="ste01"]:checked').val();
        if (ste === null) {
            alert('请选择您的房屋现状');
            return;
        }
        var tm = $('input:radio[name="tm01"]:checked').val();
        if (tm === null) {
            alert('请选择装修时间');
            return;
        }
        var address = $("#address01").val();
        if (address === '') {
            alert('请选择您的小区地址');
            $("#address01").focus();
            return;
        }

        $(this).text("信息完善中...");
        //设置按钮不可用
        $(this).attr("disabled", true);

        var args = {
            'OrderGuid': $('#OrderGuid01').val(),
            'Mobile': $('#ResultModel01').val(),
            'HouseStatus': ste,
            'OpenTime': tm,
            'ApartmentAdderss': address
        };

        $.ajax({
            url: '/api/webhelper/updatabaojiainfo/',
            type: 'post',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(args),
            success: function (data) {
                if (data.result.success) {
                    $("#address01").val('');
                    $('.sub-btn01').text("完善成功");
                    isperfect = true;
                    alert("完善成功");
                    layer.close(index_globe);
                } else {
                    $("#address01").val('');
                    alert("完善失败");
                }
            }
        });
        $(this).attr("disabled", false);

    });

    //根据面积动态更改户型
    $('#Area01').bind('input propertychange', function () {
        var mj = $(this).val();
        if (mj >= 60 && mj < 90) {
            $("#room01").val('2室');
        } else if (mj >= 90 && mj < 150) {
            $("#room01").val('3室');
            $("#hall01").val('2厅');
            $("#toilet01").val('2卫');
        } else if (mj >= 150) {
            $("#room01").val('4室');
            $("#hall01").val('2厅');
            $("#toilet01").val('2卫');
            $("#balcony01").val('2阳台');
        }
    });

});

//发送验证码
function sendCode(thisBtn, container, mobileValue, imgvalue) {
    var clock = '', nums = 60, btn;
    btn = thisBtn;
    var con = container;//图片验证码容器
    var txt = imgvalue;//图片验证码输入框
    var mobile = mobileValue;//手机号码输入框
    if (!isMobil(mobile.value)) {
        mobile.focus();
        return;
    }
    if (con.style.display === "none") {
        con.style.display = "block";
        txt.focus();
        btn.value = "确认发送";
        btn.style.backgroundColor = "#FF890B";
        btn.style.color = "#ffffff";
        return;
    } else {
        if (txt.value === '' || txt.value.length !== 6) {
            txt.focus();
            return;
        }
        con.style.display = "none";
        btn.style.backgroundColor = "#DDDDDD";
        btn.style.color = "#666666";
        btn.disabled = true; //将按钮置为不可点击
        btn.value = nums + 's';
        clock = setInterval(function () {
            nums--;
            if (nums > 0) {
                btn.value = nums + 's';
            } else {
                clearInterval(clock); //清除js定时器
                btn.disabled = false;
                btn.value = '重新发送';
                nums = 60; //重置时间
            }
        }, 1000); //一秒执行一次
        //发送
        $.ajax({
            url: '/api/webhelper/sendsmscode/',
            type: 'post',
            data: JSON.stringify({ template: 'mobileverfycode', mobile: mobile.value, code: txt.value }),
            contentType: "application/json",
            dataType: 'json',
            success: function (dataJson) {
                if (dataJson.result.success) {
                    //刷新图片验证码
                    flushImgCode();
                    txt.value = '';
                    alert("验证码已发送到您的手机！");
                } else {
                    //刷新图片验证码
                    flushImgCode();
                    txt.value = '';
                    alert(dataJson.result.message);
                    clearInterval(clock); //清除js定时器
                    btn.disabled = false;
                    btn.value = '重新发送';
                    nums = 60; //重置时间
                }
            }, error: function () {
                //刷新图片验证码
                flushImgCode();
                txt.value = '';
                alert("发送失败");
                clearInterval(clock); //清除js定时器
                btn.disabled = false;
                btn.value = '重新发送';
                nums = 60; //重置时间
            }
        });
    }
}

//刷新图片验证码
function flushImgCode() {
    $('.imgCode').attr("src", "/api/webhelper/getverifycode/?v=" + Math.random());
}

//重置输入框
function resetinput() {
    $('#Area01').val('');
    $('#ApplyUser01').val('');
    $('#Mobile01').val('');
    $('#MobileCode01').val('');
}

//获取 under 和 over 之间的随机数
function fRandomBy(under, over) {
    switch (arguments.length) {
        case 1: return parseInt(Math.random() * under + 1);
        case 2: return parseInt(Math.random() * (over - under + 1) + under);
        default: return 0;
    }
}

// Js 去除字符串前后空格
function Trim(str) {
    if (str !== null && str !== '') {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    return str;
}

//手机号码验证信息
function isMobil(s) {
    var patrn = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|((\(\d{2,3}\))|(\d{3}\-))?(13|15|17|18|14)\d{9}$/;
    if (!patrn.exec(s)) {
        return false;
    }
    return true;
}