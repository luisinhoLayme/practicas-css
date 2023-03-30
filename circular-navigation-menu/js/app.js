const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

const handleToggle = () => {
  menu.classList.toggle('active')
}

toggle.addEventListener('click', handleToggle)
