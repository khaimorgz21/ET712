console.log("Makhai Morgan")
/**
 * example 1
 */
// collect the element
let btnpressme = document.querySelector(".btnpressme")

// add a click event to change the button text and background color when the button is clicked

btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME"){
        e.target.textContent = "Button was pressed!"
    }
    else{
        e.target.textContent = "PRESS ME"  
    }
    //toggle between class 'btnactive' and 'btnpressme'
    e.target.classList.toggle("btnactive")
})

/**
 * Example 2
 */
// remove the <li> if it's clicked
// collect the element
let veggielist = document.querySelector("#veggielist")

// click event to remove the <li> when its clicked
veggielist.addEventListener("click", function(event){
    // check if the clicked element is a 'li'
    if(event.target.tagName === 'LI'){
        // remove the 'li' that was clicked
        event.target.remove()
    }
    else{
        console.log(event.target)
    }
})

/**
 * example 3: prevent default
 */
// collect the element
let linkqcc = document.querySelector(".linkqcc")

linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC Website is off")

})

/**
 * example 4
 */
// collect element
let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let closex = document.querySelector(".closex")

linkreadmore.addEventListener("click", function(){
    modalwindow.style.display = "block"
})
closex.addEventListener("click", function(){
    modalwindow.style.display = "block"
})

/**
 * lab exercise
 */

let counter = 0;

const circle = document.getElementById('circle');
const counterDisplay = document.getElementById('counter');
const resetButton = document.getElementById('resetButton');

circle.addEventListener('click' , () => {
    counter++;
    counterDisplay.textContent = `Touches: ${counter}`;
});

resetButton.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = `Touches: ${counter}`;
});