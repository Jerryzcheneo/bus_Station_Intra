let people = 0
basic.forever(function () {
    people = 0
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        people += 1
        if (pins.analogReadPin(AnalogPin.P1) < 200) {
            people += 1
            basic.showLeds(`
                . . . . .
                . # . . #
                # . # . #
                # . . # #
                . # . . #
                `)
            basic.pause(500)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # #
                . # . . #
                . . . . .
                `)
            basic.pause(500)
        }
    } else {
        if (pins.analogReadPin(AnalogPin.P1) < 200) {
            people += 1
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # #
                . # . . #
                . . . . .
                `)
            basic.pause(500)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                # . . . #
                . # # # .
                `)
            basic.pause(500)
        }
    }
})
