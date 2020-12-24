def on_bluetooth_connected():
    global start_sending
    start_sending = 1
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global start_sending
    start_sending = 0
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

noofperson = 0
start_sending = 0
basic.show_string("S")
basic.pause(200)
bluetooth.start_uart_service()
start_sending = 0

def on_forever():
    global noofperson
    noofperson = 0
    if pins.analog_read_pin(AnalogPin.P0) < 200:
        noofperson += 1
    if pins.analog_read_pin(AnalogPin.P1) < 200:
        noofperson += 1
    if noofperson == 2:
        basic.show_leds("""
            . . . . .
            . # . . #
            # . # . #
            # . . # #
            . # . . #
            """)
        basic.pause(200)
    else:
        if noofperson == 1:
            basic.show_leds("""
                . . . . .
                . . . . #
                # # # # #
                . # . . #
                . . . . .
                """)
            basic.pause(200)
        else:
            basic.show_leds("""
                . . . . .
                . # # # .
                # . . . #
                # . . . #
                . # # # .
                """)
            basic.pause(200)
basic.forever(on_forever)
