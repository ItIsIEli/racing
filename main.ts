let checkPoint = 0
let direction = 0
let mySprite: Sprite = null
let startTime = 0
let bestTime = 0
let lapTime = 0
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    checkPoint = 1
})
function initTimeView () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(392, music.beat(BeatFraction.Eighth))
    direction += 1
    direction = direction % 4
    setSpriteDirection()
})
function setSpriteDirection () {
    let dy: number[] = []
    let dx: number[] = []
    let accel = 0
    let cars: Image[] = []
    mySprite.setImage(cars[direction])
    mySprite.ax = accel * dx[direction]
    mySprite.ay = accel * dy[direction]
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    if (checkPoint == 1) {
        checkPoint = 0
        startTime = game.runtime()
        if (bestTime == 0 || lapTime < bestTime) {
            bestTime = lapTime
            music.powerUp.play()
        }
    }
})
game.onUpdate(function () {
    mySprite.vx = mySprite.vx * 0.97
    mySprite.vy = mySprite.vy * 0.97
    lapTime = game.runtime() - startTime
})
