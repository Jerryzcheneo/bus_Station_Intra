bluetooth.onBluetoothConnected(function () {
    start_sending = 1
})
bluetooth.onBluetoothDisconnected(function () {
    start_sending = 0
    basic.showIcon(IconNames.No)
    basic.pause(200)
})
let noofperson = 0
let start_sending = 0
basic.showString("S")
basic.pause(200)
bluetooth.startUartService()
start_sending = 0
basic.forever(function () {
    noofperson = 0
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        noofperson += 1
    }
    if (pins.analogReadPin(AnalogPin.P1) < 200) {
        noofperson += 1
    }
    if (start_sending == 1) {
        bluetooth.uartWriteNumber(noofperson)
    }
    if (noofperson == 2) {
        basic.showLeds(`
            . . . . .
            . # . . #
            # . # . #
            # . . # #
            . # . . #
            `)
        basic.pause(200)
    } else {
        if (noofperson == 1) {
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # #
                . # . . #
                . . . . .
                `)
            basic.pause(200)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                # . . . #
                . # # # .
                `)
            basic.pause(200)
        }
    }
})
