// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Justin Meddaugh" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbAddBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let ccAddBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let sugarAddBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')
let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
let cookieTotal = document.querySelector('#qty-total')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbAddBtn.addEventListener('click', function(e) {
    gb++
    updateTotal()
    gbQty.textContent=`${gb}`
})    

gbMinusBtn.addEventListener('click',function(e) {
    gb--
    updateTotal()
    gbQty.textContent=`${gb}`
})

ccAddBtn.addEventListener('click', function(e) {
    cc++
    updateTotal()
    ccQty.textContent=`${cc}`
})    

ccMinusBtn.addEventListener('click',function(e) {
    cc--
    updateTotal()
    ccQty.textContent=`${cc}`
})

sugarAddBtn.addEventListener('click', function(e) {
    sugar++
    updateTotal()
    sugarQty.textContent=`${sugar}`
})    

sugarMinusBtn.addEventListener('click',function(e) {
    sugar--
    updateTotal()
    sugarQty.textContent=`${sugar}`
})    

function updateTotal (){
    let total = gb+cc+sugar
console.log(total)
cookieTotal.textContent = total 
}
 









// TODO: Hook up event listeners for the rest of the buttons


