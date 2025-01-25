document.getElementById('signup').addEventListener('click',function(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirm-password').value;
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!email.includes("@")){
        alert ("email is not valid");
        return;
    }
    // Aa1$56sameerHassan
    if(!regexp.test(password)){
        alert("password must be strong and atleast 8 character long");
        return;
    }

    if(password!==confirmpassword){
        alert("password do not match");
        return;
    }

    alert("successfull");
    document.getElementById('form').reset();
});