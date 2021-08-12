//app.js
 import { scrollTo } from './utilities.js'

const eduButton = document.querySelector('#edu')
const knowButton = document.querySelector('#know')
const eduList = document.querySelector('.edulist')
const knowList = document.querySelector('.knowlist')

// Toggling show.
function toggleShow(element) {
  element.classList.toggle("show");
}

// Adding eventListener
eduButton.addEventListener("click", (e) => {
  toggleShow(eduList)
  scrollTo(eduList.lastElementChild)
})

// Adding eventListener
knowButton.addEventListener("click", (e) => {
  toggleShow(knowList)
  scrollTo(knowList.lastElementChild)
})


// const headshotImage = document.querySelector('#me')

// headshotImage.addEventListener("click", () => {
//   console.log('kossa')
// })