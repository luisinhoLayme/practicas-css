
const cursorMeter = document.getElementById('cursorMeter')

const percent = document.getElementById('percent')
const pregressBar = document.getElementById('pregressBar')


let totalHeight = document.body.scrollHeight - window.innerHeight

document.addEventListener('mousemove', (e) => {
  cursorMeter.style.top = e.clientY + 'px'
  cursorMeter.style.left = e.clientX + 'px'
})


window.addEventListener('scroll', () => {
  let progress = (window.pageYOffset / totalHeight) * 100
  pregressBar.style.width = progress + '%'
  percent.innerHTML = 'Page Scroll ' + Math.round(progress) + '%'
})
