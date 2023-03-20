input.onButtonPressed(Button.A, function () {
    makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
        # . # . #
        . . . . .
        . . . . .
        # . # . #
        # . # . #
        . . . . .
        . . . . .
        # . # . #
        `))
    if (veces < 16) {
        veces += 1
        makerbit.lcdShowCharacter1602(LcdChar.c1, veces)
        makerbit.showStringOnLcd1602("" + (veces), makerbit.position1602(LcdPosition1602.Pos1), 2)
        radio.sendNumber(veces)
    }
})
let veces = 0
makerbit.connectLcd(39)
veces = 0
radio.setGroup(183)
basic.forever(function () {
	
})
