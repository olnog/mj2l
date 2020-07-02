function Game(){
  this.create = function(){
    this.map = this.add.tilemap('map')
    this.tiles = this.map.addTilesetImage('tiles', 'art')
    this.background = this.map.createStaticLayer ('background', this.tiles, 0, 0).setDepth(-2)
    this.layer = this.map.createStaticLayer ('layer', this.tiles, 0, 0).setDepth(-1)
    this.layer.setCollisionBetween(0, 16)

    player = new Player()
    player.gameObject = this.physics.add.sprite(config.width / 2, config.height / 2 + 20, 'art', 0)
    player.gameObject.setScale(3)
    player.gameObject.body.setSize(8, 8).setOffset(4, 8)

    //this.cop = this.physics.add.sprite(config.width / 2 + 40, config.height / 2 + 20, 'art', 16)
    //this.cop.setScale(3)

    this.physics.add.collider(player.gameObject, this.layer);

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('art', {start:0, end:1}, ),
      repeat: 1,
    })
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNames('art', {frames: [2, 3]} ),
      repeat: -1,
    })
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNames('art', {frames: [0, 4]} ),
      repeat: -1,
    })
    this.cursors = this.input.keyboard.createCursorKeys()
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(player.gameObject);
  }

  this.preload = function(){
    this.load.spritesheet('art', 'art.png', {frameWidth: 16, frameHeight:16})
    this.load.tilemapTiledJSON('map')
  }
  this.update = function (){
    this.cursors.left.isDown
      ? player.left()
      : player.stopLeft()
    this.cursors.right.isDown
      ? player.right()
      : player.stopRight()
    this.cursors.up.isDown
      ? player.jump()
      : player.stopJump()
  }
}




    /*
  console.log(this.girl.body.velocity.x)
  if (this.girl.body.blocked.down){
    if (this.girl.body.velocity.x < 0){
      this.girl.flipX= true
      this.girl.anims.play('walk', true)
    } else if (this.girl.body.velocity.x > 0 ){
      this.girl.flipX= false
      this.girl.anims.play('walk', true)
    }
  } else {
    this.girl.setFrame(4)
  }
  if (this.girl.body.blocked.down){
    if (this.girl.body.velocity.x > -(this.girl.maxHorizontalSpeed)){
      this.cursors.left.isDown
        ? this.girl.body.setVelocityX(this.girl.body.velocity.x - this.girl.horizontalVelocityModifier)
        :this.girl.body.setVelocityX(this.girl.body.velocity.x + this.girl.horizontalVelocityModifier)
    } else if (this.girl.body.velocity.x < (this.girl.maxHorizontalSpeed)){
      this.cursors.right.isDown
        ? this.girl.body.setVelocityX(this.girl.body.velocity.x + this.girl.horizontalVelocityModifier)
        : this.girl.body.setVelocityX(this.girl.body.velocity.x - this.girl.horizontalVelocityModifier)
    } else if (this.girl.body.velocity.x < this.girl.horizontalVelocityModifier
    && this.girl.body.velocity.x > -this.girl.horizontalVelocityModifier){
      this.girl.body.setVelocityX(0)

    }
    if (this.cursors.up.isDown && (this.girl.lastJump == null || Date.now() - this.girl.lastJump > this.girl.jumpDelay)){
      this.girl.body.setVelocityY(-this.girl.maxVerticalSpeed)
      this.girl.lastJump = Date.now()
      this.girl.doubleJumping = this.girl.body.blocked.down

    }
  }

  if (!this.girl.body.blocked.down){
    if (this.cursors.left.isDown && this.girl.body.velocity.x > -(this.girl.maxHorizontalSpeed)){
        this.girl.body.setVelocityX(this.girl.body.velocity.x - (this.girl.horizontalVelocityModifier / 2))
    } else if (this.cursors.right.isDown && this.girl.body.velocity.x < (this.girl.maxHorizontalSpeed)){
        this.girl.body.setVelocityX(this.girl.body.velocity.x + (this.girl.horizontalVelocityModifier / 2))
    }

    if (this.cursors.up.isDown
    && ( this.girl.unjump == null || Date.now() - this.girl.unjump < 750)
    && this.girl.doubleJumping && Date.now() - this.girl.lastJump > 100){
      this.girl.doubleJumping = false
      this.girl.body.setVelocityY(-this.girl.maxVerticalSpeed)
    }
  }
  if (!this.girl.body.blocked.down && (this.girl.body.blocked.left || this.girl.body.blocked.right)){
    console.log('climb')
  }
  if (!this.cursors.up.isDown && (this.girl.lastJump == null || Date.now() - this.girl.lastJump<100)){
    this.girl.unjump = Date.now()
  }
}
*/
