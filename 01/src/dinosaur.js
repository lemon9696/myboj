class dinosaur {
	constructor() {
		this.cx1 = 100
		// this.cx2=552
		this.cy1 = 90+13
		this.cw1 = 42
		this.ch1 = 45
		this.i=0
		this.imgx = 850 + 44 * this.i
		this.imgy = 0
		this.imgw = 42
		this.imgh = 45
		this.g=1
		this.speed=0
	}
	draw() {
		// console.log(this.imgx)
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.imgw, this.imgh, this.cx1, this.cy1, this.cw1, this.ch1)
	}

	move() {
		this.i++
		this.i=this.i%2
		this.imgx = 938 + 44 * this.i
	}
	
	drop(){
		this.speed+=this.g
		this.cy1+=this.speed
		if(this.cy1>=103){
			this.cy1=103
		}
	}
	jump(){
		this.speed=-15
	}
}
