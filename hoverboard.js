var container = document.getElementById('container')
var colors = ['red' , 'blue' , 'greem' , 'yellow' , 'pink']

var SQUARES = 500

for(let i = 1; i < SQUARES; i++){
    var square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover' , () => setColor(square))
    square.addEventListener('mouseout' , () => removeColor(square)
    )

    container.appendChild(square)
}

function setColor(element){
    var color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow = '0 0 2px black'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}