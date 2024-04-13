

/*$('#loginSubmit').click((event)=>{
    var Data = {
        username: $('#username').val(),
        password: $('#password').val(),
    };
    console.log(Data);

    $.ajax({
        url: 'http://localhost/project1/project1/forjquery/control/reqdata.php',
        type: 'POST',
        data:Data,
        success: function(res){
            alert(res);
        }
    })

    event.preventDefault();
});*/

$('#loginSubmit').click((event)=>{
    var hello = "hello";
    // console.log(hello);
    if($('#username').val()==""){
        $('#usernameSpan').html("Require");
    }
    if($('#password').val()==""){
        $('#passwordSpan').html("Require");
    }

    if($('#username').val()!="" && $('#password').val()!=""){
        $data = {
            username: $('#username').val(),
            password: $('#password').val(),
        }
        console.log("username" + $('#username').val());
        console.log("password" + $('#password').val());
        $.ajax({
            url: 'http://localhost/project1/project1/forjquery/control/reqdata.php',
            type: 'POST',
            data: $data,
            success: function(res){
                $('#responses').html(res);
            },
            error: function(err){
                $('#responses').html("fail");
            }
        })
    }
    event.preventDefault();
});






