class Manager {
	constructor() {
		this.isplay = false
		this.land = new land()
		this.dinosaur = new dinosaur()
		this.cloud = new cloud()
		this.obstacles = new obstacles()
		this.rank = new rank()
	}

	play() {

		//每16.66...毫秒绘制一次
		//FPS 60为最巴适的帧率
		this.t1 = setInterval(() => {
			this.ctx.clearRect(0, 0, 552, 150)
			this.cloud.draw()
			this.land.draw()
			this.obstacles.draw()
			this.dinosaur.draw()
			this.rank.draw()
			//碰撞监听
			this.isgameover()
		}, 17)

		//大地移动
		this.t2 = setInterval(() => {
			this.land.move()
		}, 17)
		//龙变换形态
		this.t3 = setInterval(() => {
			this.land.move()
			this.dinosaur.move()
		}, 170)
		//龙往地上掉
		this.t4 = setInterval(() => {
			this.dinosaur.drop()
		}, 17)
		//云移动
		this.t5 = setInterval(() => {
			this.cloud.move()
		}, 17)

		//障碍物移动
		this.t6 = setInterval(() => {
			this.obstacles.move()
		}, 17)
		
		//计分板计分
		this.t7=setInterval(() => {
			this.rank.change()
		},100)
	}
	stop() {
		clearInterval(this.t1)
		clearInterval(this.t2)
		clearInterval(this.t3)
		clearInterval(this.t4)
		clearInterval(this.t5)
		clearInterval(this.t6)
		clearInterval(this.t7)
	}
	isgameover() {
		// 假设有两个矩形A和B，矩形A 的中心坐标为A(x1, y1)，宽度和高度分别为rx1、ry1，矩形B 的中心坐标为B(x2, y2)，宽度和高度分别为rx1、ry1，矩形B 的中心坐标为B(x2, y2)，宽度和高度分别是rx2、ry2，则采用这种包围盒检测方式如下。

		//如果满足两个矩形在x方向的距离小于两个矩形宽度和的一半，并且在y方向上的距离小于两个矩形高度和的一半则表示两个矩形有重叠，即表示发生碰撞，换成公式如下：

		//X方向满足：|x2-x1|<=rx1+rx2并且Y方向满足：|y2-y1|<=ry1+ry2
		//参考网址:https://www.jb51.net/article/152671.htm
        var x1=this.dinosaur.cx1+this.dinosaur.cw1/2
		var y1=this.dinosaur.cy1+this.dinosaur.ch1/2
		var rx1=this.dinosaur.cw1-20//20是懒得做多个碰撞盒子判断   你们自己判断
		var ry1=this.dinosaur.ch1-30
		this.obstacles.points.forEach((e)=>{
			var x2=e.cx+e.cw/2
			var y2=e.cy+e.ch/2
			var rx2=e.cw
			var ry2=e.ch
			var isBoom=(Math.abs(x2-x1)<=(rx1+rx2)/2)&&(Math.abs(y2-y1)<=(ry1+ry2)/2)
			if(isBoom){this.stop()}
		})

	}

}
