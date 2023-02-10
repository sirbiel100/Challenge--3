
const displayContent1 = document.querySelector('.first-content-header')
const displayContent2= document.querySelector('.first-content-main')
const displayContent3 = document.querySelector('.first-content-footer')
const thankContainer = document.querySelector('.second-content')
const submitButton = document.querySelector('.submit')
const rating = document.querySelector('#rating')
const rates = document.querySelectorAll('.rating-number')


submitButton.addEventListener("click", () => {
   
    displayContent1.style.display = "none"
    displayContent2.style.display = "none"
    displayContent3.style.display = "none"
    thankContainer.style.display = "block"
    
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

