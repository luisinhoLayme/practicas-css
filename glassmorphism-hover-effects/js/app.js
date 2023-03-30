
let marker = document.querySelector('.marker')
let list = document.querySelectorAll('ul li')

const handleMoveIndicator = (e) => {
  marker.style.left = e.target.offsetLeft+'px'
  marker.style.width = e.target.offsetWidth+'px'
}

list.forEach(link => {
  link.addEventListener('mousemove', handleMoveIndicator)
})

// add active class in hovered list item
// function handleActiveLink() {
//   list.forEach((item) => {
//     item.classList.remove('active')
//   })
//   this.classList.add('active')
// }

// remove all active class
const handleClearActive = () => {
  list.forEach(item => item.classList.remove('active'))
}

list.forEach((item) => {
  item.addEventListener('mouseover', () => {
    handleClearActive()
    // add active class
    item.classList.add('active')
  })
})
