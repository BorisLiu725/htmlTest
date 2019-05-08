$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3000/users/isLog',
        dataType :'JSON',
        method: 'get',
        xhrFields:{
            withCredentials: true
        },
        success: function(data){
            // console.log(data);
            if(data.res == 'ok'){
                $.cookie('Username',data.username,{ expires: 7 });
                $("body").load("JOIN.html");
            }
            else{
                window.history.go(-1);
            }
        },
        error: function () {
            alert('false');

        }

    });


    // console.log($("#Homepage_Register").get(0));
    $("#Home_Register").click(function () {

        $("#Homepage_Register").show();
        $("#Homepage_Login").hide();
    })
    $("#Home_Login").click(function () {
        $("#Homepage_Register").hide();
        $("#Homepage_Login").show();
    })

    $("#Login").click(function(){
        alert("准备登录。。。");
        // $.ajax({
        //     url:'http://localhost:3000/users/login',
        //     data:{
        //         username:$("#get_username").val(),
        //         password:$("#get_password").val()
        //     },
        //     dataType: 'JSON',
        //     method: 'get',
        //     xhrFields: {
        //         withCredentials: true
        //     },
        //     success: function(data){
        //         // console.log(data);
        //         if(data.res == 'ok'){
        //             $("body").load("JOIN.html");
        //             // $("#UserName").innerText= data.username;
        //         }
        //         else{
        //             alert('密码错误！');
        //         }
        //
        //
        //     },
        //     error: function(xhr) {
        //         // 出错
        //         alert('error:' + JSON.stringify(xhr));
        //     }
        // })
        Login($("#get_username").val(),$("#get_password").val());
    });


    //登录用户
    function Login(username,password){
        $.ajax({
            url:'http://localhost:3000/users/login',
            data:{
                username:username,
                password:password
            },
            dataType: 'JSON',
            method: 'get',
            xhrFields: {
                withCredentials: true
            },
            success: function(data){
                // console.log(data);
                if(data.res == 'ok'){
                    $("body").load("JOIN.html");
                    $("#UserName").innerText= data.username;
                }
                else{
                    alert('密码错误！');
                }


            },
            error: function(xhr) {
                // 出错
                alert('error:' + JSON.stringify(xhr));
            }
        })
    }

    //注册点击事件
    $("#Register").click(function(){
        check_Username();
    });

    //检查用户名是否被注册
    function check_Username(){
        $.ajax({
            url: 'http://localhost:3000/users/checkusername',
            data:{
                username:$("#post_username").val()
            },
            dataType: 'JSON',
            method: 'get',
            xhrFields:{
                withCredentials: true
            },
            success: function(result){
                // alert('请求成功!');
                if(result.res == 'ok'){
                    check_email();
                }
                else{
                    alert('该用户已被注册!');
                }
            },
            error: function () {
                alert('请求失败!');
            }
        })
    }
    //检查邮箱是否被注册
    function check_email(){
        alert('开始');
        debugger;
        $.ajax({
            url: 'http://localhost:3000/users/checkemail',
            data:{
                email:$("#post_mail").val()
            },
            dataType: 'JSON',
            method: 'get',
            xhrFields:{
                withCredentials: true
            },
            success: function(result){
                alert('yes');
                if(result.res == 'ok'){
                    register();
                }
                else{
                    alert('该邮箱已被注册!');
                }
            },
            error: function(){
                alert('请求失败2');
            }
        })
    }
    // 注册用户
    function register() {
        $.ajax({
            url: 'http://localhost:3000/users/reg',
            data:{
                username:$("#post_username").val(),
                password:$("#post_password").val(),
                email:$("#post_mail").val()
            },
            dataType: 'JSON',
            method: 'get',
            xhrFields: {
                withCredentials: true
            },
            success: function(result){
                // alert(1);
                console.log(result);
                if(result.res == 'ok'){
                    alert('注册成功');
                    // $.cookie('Username',$("#post_username"));
                    Login($("#post_username").val(),$("#post_password").val());
                    // $("body").load("JOIN.html");
                }
            },
            error: function(xhr) {
                // 出错
                // alert(2)
                alert('error:' + JSON.stringify(xhr));
            }

        })
    }

});