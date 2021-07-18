const board = document.querySelector("#board")
const colors = ['#ff1900', '#b300ff', '#0099ff', '#ff7700', '#00ff6a']
const SQUARES_NUMBER = 840

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div")
  square.classList.add("square")

  square.addEventListener("mouseover", () => setColor(square))
  square.addEventListener("mouseleave", () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = "rgb(236, 202, 202)"
  element.style.boxShadow = "0 0 2px #fff"
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}