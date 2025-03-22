console.log("Makhai Morgan")
// collect elements
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")

myform.addEventListener("submit", function(event){
   event.preventDefault()

   // collect the input value
   let username = document.querySelector("#username")
   let usernamevalue = username.value

   // remove whitespace before and after the username
    usernamevalue = usernamevalue.trim()

    //testing
    // console.log(usernamevalue)
    // validation of username
    if(usernamevalue===""){
        alert("please enter a username")
        return; // stop further execution
   }

    // print the username in the greeting message
    greetuser.InnerHTML = usernamevalue
    greeting.style.display = block



    // clear the input value
    username.value =""
})