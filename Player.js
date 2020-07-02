function Player(){
  this.gameObject = null
  this.doubleJumping = false
  this.horizontalVelocityModifier = 3.5
  this.horizontalIntertiaModifier = 20
  this.jumpDelay = 500
  this.lastJump = null
  this.maxHorizontalSpeed = 300
  this.maxVerticalSpeed = 225
  this.verticalVelocityModifier = 100
  this.unjump = null

  this.jump = function(){
    console.log('jump')
  }
  this.left = function(){
    console.log('left')
  }
  this.right = function(){
    console.log('right')
  }
  this.stopJump = function(){

  }
  this.stopLeft = function(){

  }
  this.stopRight = function(){

  }
}
