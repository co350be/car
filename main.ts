let seed_dropped = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, Position.HALF_DOWN)
        basic.pause(500)
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, Position.UP)
        basic.pause(1000)
        seed_dropped += 1
    }
})
basic.forever(function () {
	
})
