Object.prototype.img = new Image()
Object.prototype.img.src = "src/game.png"
window.onload = function() {

	Object.prototype.ctx = document.getElementById("canvas").getContext("2d")
	const manager = new Manager()
    var flag=false
	window.onkeydown = function(e) {
		// console.log(e.keyCode)
		
		if (e.keyCode == 32) {
			flag=!flag
			if(flag){manager.play()}
			else{manager.stop()}			
		}
		else if(e.keyCode == 38){
			manager.dinosaur.jump()
		}
	}



}
