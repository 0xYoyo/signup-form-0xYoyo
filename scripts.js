const pass = document.querySelector("#pass");
const passConfirm = document.querySelector("#confirm_pass");
const inputs = document.querySelectorAll("input");

passConfirm.addEventListener("input", (e)=>{
    if(pass.value !== passConfirm.value){
        passConfirm.setCustomValidity("Passwords do not match, try again.");
    } else {
        passConfirm.setCustomValidity("");
    }
})
