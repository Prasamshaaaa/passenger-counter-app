//  select and ctrl+k+c for commenting multiple lines together

// initialize the count as 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count= 0
function increment(){
    console.log(" clicked")
    count += 1
   countEl.textContent = count
}
 // create a function, save(), which logs out the count when it is called
 
 function save(){
     let countStr = count + " - "
     saveEl.textContent += countStr // save garda - paxi space naako vayera innertText ko satta textContent rakheko
     countEl.textContent = 0
     count = 0
     console.log(count)
 }