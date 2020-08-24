class cloud{
	constructor(){
		this.cx1=552
		this.cx2=552*2
		this.cy1=Math.random()*100
		this.cy2=Math.random()*100
		this.cw1=48
		this.ch1=15
		this.imgx=86
		this.imgy=0
		this.imgw=48
		this.imgh=15
	}
	draw(){
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.imgw, this.imgh, this.cx1, this.cy1, this.cw1,this.ch1)
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.imgw, this.imgh, this.cx2, this.cy2, this.cw1,this.ch1)
	}
	move(){
		this.cx1-=2
		this.cx2-=2
		if(this.cx1<=0){
			this.cy1=Math.random()*100
			this.cx1=552*2
		}
		if(this.cx2<=0){
			this.cy2=Math.random()*100
			this.cx2=552*2
		}
	}
}