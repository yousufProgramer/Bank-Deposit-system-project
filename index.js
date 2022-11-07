document.getElementById('login-btn').addEventListener('click',function(e){
    let inputEmail1 = document.getElementById('inputEmail1');
    let getEmail = inputEmail1.value;

    let inputPassword1 = document.getElementById('inputPassword1');
    let getPassword = inputPassword1.value;

    if(getEmail == 'yousuf@gmail.com' && getPassword == 'yousuf'){
        e.preventDefault();
        window.location.href = "account.html";
    } 
    
    else{
        document.write('your email or password is incorrect');
    }
    
});