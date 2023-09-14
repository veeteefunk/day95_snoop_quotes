let quoteForm = document.getElementById("quoteForm")
let quoteResult = document.getElementById("quoteResult")
let imageContainer = document.querySelector(".image-container")

quoteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let quote = document.getElementById("quote")
    // quoteResult.innerHTML= quote.value + ", motherfucker!"

    imageContainer.style.visibility = "visible"
    let str = quote.value
    let stringArray = str.split(/(\s+)/)
    let arrayToString = stringArray.join("")
    console.log(arrayToString + " fo shizzle!")
    quoteResult.innerHTML= arrayToString  + ", fo shizzle, my nizzle!"
})
