class land{
	constructor(){		
		this.cx1=0
		this.cx2=552
		this.cy1=135
		this.cw1=552
		this.ch1=15
		this.imgx=0
		this.imgy=52
		this.imgw=1200
		this.imgh=15
	}
	draw(){
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.imgw, this.imgh, this.cx1, this.cy1, this.cw1,this.ch1)
		this.ctx.drawImage(this.img, this.imgx, this.imgy, this.imgw, this.imgh, this.cx2, this.cy1, this.cw1,this.ch1)
	}
	move(){
		this.cx1-=6
		this.cx2-=6
		//552
		if(this.cx2==0){
			this.cx1=0
			this.cx2=552
		}
	}
}