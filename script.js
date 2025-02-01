let lightbulb = document.getElementById('lightbulb')
let container = document.querySelector('.container') 
let buttons = document.getElementsByTagName('button')

let broken = false

function createParams(image, backgroundColor, buttonColor, borderColor, fontColor) {
    let frontParams = {
        image: image,
        backgroundColor: backgroundColor,
        buttonColor: buttonColor,
        borderColor: borderColor,
        fontColor: fontColor
    };

    return frontParams
}

function doubleClick() {
    let params = createParams("imgs/lightbulbBroken.png", "#17141a", "#766583", "#2a252f", "#d1d1d1")
    changeLightBulbAndButtons(params)
    broken = true
}

function turnOn() {
    let params = createParams("imgs/lightbulbTurnedOn.png", "#68443a", "#fff5ad", "#6c3f36")
    changeLightBulbAndButtons(params)
}

function turnOff() {
    let params = createParams("imgs/lightbulbTurnedOff.png", "#2d1f3d", "#c8b8fa", "#4f366b")
    changeLightBulbAndButtons(params)
}

function mouseHover() {
    let params = createParams("imgs/lightbulbTurnedOn.png", "#68443a", "#fff5ad", "#6c3f36")
    changeLightBulbAndButtons(params)
}

function mouseOut() {
    let params = createParams("imgs/lightbulbTurnedOff.png", "#2d1f3d", "#c8b8fa", "#4f366b")
    changeLightBulbAndButtons(params)
}

function changeLightBulbAndButtons(params) {
    if (!broken) {
        lightbulb.src = params.image
        container.style.backgroundColor = params.backgroundColor

        for (let button of buttons) {
            button.style.backgroundColor = params.buttonColor
            button.style.borderColor = params.borderColor
            if (params.fontColor)
                button.style.color = params.fontColor
        }
    }
}