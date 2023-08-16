import { randomNumBetween } from "./utils.js"

export default class Particle {
  constructor(r) {
    this.r = r
    //대각선방향으로발사

    this.angle = randomNumBetween(0, 360)
    //돌아갈각도


    //위 두개합치면 대각선으로이동

    
    this.rAlpha = randomNumBetween(0, 5)
    //앞으로감


    this.rFriction = randomNumBetween(0.95, 1.01)
   // 가면갈수록 직진이 느려지게하는힘

    this.angleAlpha = randomNumBetween(1, 2)
    //오른쪽으로감

    this.angleFriction = randomNumBetween(0.97, 0.99)
// 가면갈수록 느려지게하는힘
    this.opacity = randomNumBetween(0.2, 1)
  }
  update() {
    this.rAlpha *= this.rFriction
    this.r += this.rAlpha

    this.angleAlpha *= this.angleFriction
    this.angle += this.angleAlpha

    this.x = innerWidth / 2 + this.r * Math.cos(Math.PI / 180 * this.angle)
    this.y = innerHeight / 2 + this.r * Math.sin(Math.PI / 180 * this.angle)

    this.opacity -= 0.003
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.fill()
    ctx.closePath()
  }
}