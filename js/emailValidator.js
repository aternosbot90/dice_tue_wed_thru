let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let container = document.querySelector(".container");
let button = document.querySelector(".dbutton");
let bg = document.querySelector(".bg");
let error = document.querySelectorAll(".error");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

     document.querySelector("#emailError").textContent = ""
     document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect"
        error[0].style.display = "initial";
        isValid = false;
    }
     
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "password is incorrect";
        error[1].style.display = "initial";
        isValid = false;
    }
     
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Form submitted successfully!";
    }
});

button.addEventListener("click", function(){
    container.classList.toggle("dark-mode-container"),
    bg.classList.toggle("dark-mode")
    input.forEach(el => {
    if (el.style.backgroundColor === "black") {
      el.style.backgroundColor = "white";
      el.style.color = "black";
    } else {
      el.style.backgroundColor = "black";
      el.style.color = "white";
    }
  });

})
