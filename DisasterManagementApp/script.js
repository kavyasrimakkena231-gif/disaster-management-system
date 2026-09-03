function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("loginMessage");

    // PARTICULAR LOGIN DETAILS
    let correctEmail = "admin@gmail.com";
    let correctPassword = "admin123";

    // Empty fields check
    if(email === "" || password === ""){

        message.innerHTML = "Please enter email and password.";
        message.style.color = "red";

        return;
    }

    // Check username and password
    if(email === correctEmail && password === correctPassword){

        message.innerHTML = "Login successful!";
        message.style.color = "green";

        setTimeout(function(){

            document.getElementById("loginPage").style.display = "none";
            document.getElementById("app").style.display = "block";

        },1000);

    }else{

        message.innerHTML = "Invalid email or password!";
        message.style.color = "red";

    }

}