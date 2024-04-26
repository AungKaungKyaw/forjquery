const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('loginSubmit');
const responses = document.getElementById('responses');

submit.addEventListener('click',function(e){
    e.preventDefault();
    if((username.value === '' || username.value == null) || (password.value === '' || password.value == null)){
        document.getElementById('passwordSpan').innerText = "enter username and password";
    }
    if(username.value != '' && password.value != ''){
        let userData = {
            username : username.value,
            password : password.value,
            status : "action"
        };
        req(userData,function(res){

            let res1 = JSON.parse(res);
            if(res1.status == 'success'){
                localStorage.setItem('username',res1.username);
                window.location.href = "http://localhost/project1/project1/forjquery/StaffDashboard.html";
            }
        });
    }

});
function req(data,callback){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/project1/project1/forjquery/control/reqdata2.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    let jsonData = JSON.stringify(data);
    xhr.send(jsonData);
}