//let redBtn = document.querySelector('#red_btn')
//let yellowBtn = document.querySelector('#yellow_btn')
//let greenBtn = document.querySelector('#green_btn')

//let redColor = document.querySelector('#red')
//let yellowColor = document.querySelector('#yellow')
//let greenColor = document.querySelector('#green')

//function switchRed() {
    //redColor.classList.add('red')

    //yellowColor.classList.remove('yellow')
    //greenColor.classList.remove('green')
//}

//function switchGreen() {
    //greenColor.classList.add('green')

    //redColor.classList.remove('red')
    //yellowColor.classList.remove('yellow')
//}

//function switchYellow() {
    //yellowColor.classList.add('yellow')

    //redColor.classList.remove('red')
    //greenColor.classList.remove('green')
//}

//redBtn.onclick = switchRed
//yellowBtn.onclick = switchYellow
//greenBtn.onclick = switchGreen

const buttons = document.querySelectorAll('button')
const colors = ['red', 'yellow', 'green']

buttons.forEach((button) => {
    button.onclick = () => {
        const circleID = button.id.split('_')[0]
        document.getElementById(circleID)
        .classList.toggle(circleID)

        colors.filter((colorr) => color !== circleID)
        .forEach((color) => document.getElementById(color)
        .classList.remove(color))
    }
})
