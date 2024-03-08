var register = document.querySelector(".buttons");

register.addEventListener("click", ()=>{
    var selectPassword = document.querySelector("#select-password").value;
    var confirmPassword = document.querySelector("#confirm-password").value;
    var email =  document.querySelector("#email").value;

    if(selectPassword == "" || selectPassword == null || email == "" || email == null){
        document.querySelector('#msg').style.display = 'block';
        document.querySelector('#msg').textContent = 'mandatory fields are blank !!';

    }
    else{
        if(selectPassword != confirmPassword){
            document.querySelector('#msg').style.display = 'block';
            document.querySelector('#msg').textContent = 'password does not match !!';

        }
        if(selectPassword == confirmPassword){
            document.querySelector('#msg').style.display = 'none';
            //user ko database me add karenge.
        }
    }

    
});