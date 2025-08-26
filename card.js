const slides = document.querySelectorAll(".slide")
slides.forEach(slide =>{
slide.addEventListener("click",()=>{
    removecurrentActive()
    slide.classList.add("active")
})
})

function removecurrentActive(){
    slides.forEach(slide =>{
        slide.classList.remove("active")
    })
}