game = new Game()
var config = {
  backgroundColor:'#C0C0C0',
  height: 224,
  parent:'#canvas',
  physics:{
    default:'arcade',
    arcade:{
      //debug: true,
      gravity: {
        y:750
      }
    }
  },
  scale: {
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    mode: Phaser.Scale.FIT,
  },
  scene : {
    create: game.create,
    preload: game.preload,
    update: game.update
  },
  title: 'Flower Power',
  width:256,
}
phaser = new Phaser.Game(config)
