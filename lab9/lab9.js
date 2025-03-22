console.log("Makhai Morgan")
// example 1
// collect the element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})
/**
 * example 3
 */
let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxTop = window.scrollY
    if(pxTop>80){
        topcontainer.style.display = "block"
    }
    else{
        topcontainer.style.display = "none"
    }
})
/**
 * example 2
 */
// collect the elements
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")


function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left: pexels,
        behavior: "smooth"
    })
}

btnleft.addEventListener("click", function(){
    scrollgallery(-600)
})

btnright.addEventListener("click", function(){
    scrollgallery(600)
})
