class rank{
	constructor(){
		this.rank=0
	}
	draw(){
	// 设置字体
	this.ctx.font = "18px bold 黑体";
	// 设置颜色
	this.ctx.fillStyle = "#000";
	// 设置水平对齐方式
	this.ctx.textAlign = "center";
	// 设置垂直对齐方式
	this.ctx.textBaseline = "middle";
	// 绘制文字（参数：要写的字，x坐标，y坐标）
	this.ctx.fillText(this.rank.toString().padStart(5,'0'), 500, 10);
	}
	change(){
		this.rank++
	}
}