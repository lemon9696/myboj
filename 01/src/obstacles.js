class obstacles {
	constructor() {
		this.speed=6//速度 用于调难度
		this.grad=200//最小间隔
		this.gradmax=450//最大间隔
		this.points = [{
			//第3种
			cx: 552+this.grad*0,
			cy: 148 - 34,
			cw: 15,
			ch: 34,
			imgx: 229,
			imgy: 0,
			imgw: 15,
			imgh: 34,
		},{
			//第1种
			cx:  552+this.grad*1,
			cy: 148 - 32-18,
			cw: 44,
			ch: 32,
			imgx: 136,
			imgy: 9,
			imgw: 44,
			imgh: 32
		},{
			//第2种
			cx: 552+this.grad*2,
			cy: 148-29-28-20,
			cw: 45,
			ch: 29,
			imgx: 181,
			imgy: 3,
			imgw: 45,
			imgh: 29
		},{
			//第4种
			cx: 552+this.grad*3,
			cy: 148-50,
			cw: 25,
			ch: 50,
			imgx: 333,
			imgy: 2,
			imgw: 25,
			imgh: 50
		},
		{
			//第5种
			cx:  552+this.grad*4,
			cy: 148-50,
			cw: 52,
			ch: 50,
			imgx:431,
			imgy: 2,
			imgw: 52,
			imgh: 50
		}
		]
		
	}
	draw() {
		this.points.forEach((e) => {
			this.ctx.drawImage(this.img, e.imgx, e.imgy, e.imgw, e.imgh, e.cx, e.cy, e.cw, e.ch)
		})
	}
	move(){
		this.points.forEach((e) => {
			e.cx-=this.speed		
		})
		if(this.points[0].cx<=-this.points[0].cw){
			this.points.shift()
			this.points.push(this.random())
		}
	}
	random(){
		var count=Math.round(Math.random()*(3-1)+1)
		var arr = [{
			//第3种
			cx: 0,
			cy: 148 - 34,
			cw: 15*count,
			ch: 34,
			imgx: 229,
			imgy: 0,
			imgw: 15*count,
			imgh: 34,
		},{
			//第1种
			cx:  0,
			cy: 148 - 32-18,
			cw: 44,
			ch: 32,
			imgx: 136,
			imgy: 9,
			imgw: 44,
			imgh: 32
		},{
			//第2种
			cx: 0,
			cy: 148-29-28-20,
			cw: 45,
			ch: 29,
			imgx: 181,
			imgy: 3,
			imgw: 45,
			imgh: 29
		},{
			//第4种
			cx: 0,
			cy: 148-50,
			cw: 25*count,
			ch: 50,
			imgx: 333,
			imgy: 2,
			imgw: 25*count,
			imgh: 50
		},
		{
			//第5种
			cx: 0,
			cy: 148-50,
			cw: 52,
			ch: 50,
			imgx:431,
			imgy: 2,
			imgw: 52,
			imgh: 50
		}]
		var point=arr[Math.round(Math.random()*(arr.length-1))]
		var point2=this.points[this.points.length-1]
		point.cx=point2.cx+point2.cw+Math.round(Math.random()*(this.gradmax-this.grad)+this.grad)
		return point 
	}
	
}
