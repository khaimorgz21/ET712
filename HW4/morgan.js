console.log("Makhai Morgan")
// collect elements
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")

window.addEventListener("load",function(){
    // disabled the submit button when the webpage is loaded
    btnsubmit.disable = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()


    // collect the username
    let username = document.queryselector("#username")
    let usernamevalue = username.value

   
    // remove whitespace before and after the username
    usernamevalue = usernamevalue.trim()
   

    //testing
    // console.log(usernamevalue)
    // validation of username
    if(usernamevalue===""){
        alert("Please enter a username")
        return; // stop nfurther exercution
    }



    // print the username in the greeting message
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"

    // clear input value
    username.value =""
})
let password = document.querySelector("#password")
password.addEventListener("input", function(){
    // collect the password
    let password = document.querySelector("#password")
    let passwordvalue = password.value

    passwordvalue = passwordvalue.trim()

    // validate the password to have 8+ character
if (passwordvalue < 8){
    errormsg.style.display = "block"
    btnsubmit.disabled = true
}else{
    errormsg.style.display = "none"
    btnsubmit.disabled = false
}
})