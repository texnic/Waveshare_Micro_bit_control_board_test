WSJoyStick.onKey(KEY.F, function () {
    basic.showString("F")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
WSJoyStick.onKey(KEY.P, function () {
    basic.showString("P")
})
WSJoyStick.onKey(KEY.E, function () {
    basic.showString("E")
})
WSJoyStick.onKey(KEY.D, function () {
    basic.showString("D")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
WSJoyStick.onKey(KEY.C, function () {
    basic.showString("C")
})
WSJoyStick.JoyStickInit()
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.NONE)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
