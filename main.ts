scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    checkPoint = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(392, music.beat(BeatFraction.Eighth))
    direction += 1
    direction = direction % 4
    setSpriteDirection()
})
function setSpriteDirection () {
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
let startTime = 0
let checkPoint = 0
let cars: Image[] = []
let dy: number[] = []
let dx: number[] = []
let direction = 0
let accel = 0
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(sprites.vehicle.carRedLeft, SpriteKind.Player)
mySprite.setPosition(192, 48)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
accel = 220
direction = 0
dx = [
-1,
0,
1,
0
]
dy = [
0,
1,
0,
-1
]
cars = [
sprites.vehicle.carRedLeft,
sprites.vehicle.carRedFront,
sprites.vehicle.carRedRight,
sprites.vehicle.carRedBack
]
setSpriteDirection()
let bestTime = 0
let lapTime = 0
checkPoint = 0
game.showLongText("Turn your car by \"A\" button.", DialogLayout.Bottom)
startTime = game.runtime()
game.onUpdate(function () {
    mySprite.vx = mySprite.vx * 0.97
    mySprite.vy = mySprite.vy * 0.97
    lapTime = game.runtime() - startTime
})
