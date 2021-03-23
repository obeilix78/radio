radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . # . . .
    # . . . .
    `)
radio.setGroup(10840)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("" + (images.iconImage(IconNames.Skull)))
        basic.showString("Send")
    }
})
