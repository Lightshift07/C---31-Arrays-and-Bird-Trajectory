class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imageSmoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200 && gameState === "launched"){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

 for(var i = 0 ; i<this.trajectory.length; i++ ){
 image(this.imageSmoke, this.trajectory[i][0], this.trajectory[i][1])
 }
    super.display();
  }
}
// position = [200,300]
// position = [250, 350]
//position = [100,200]

// trajectory = [[200,300] , [250,350] , [100,200]]
// trajectory[0][0] , trajectory[0][1]
// trajectory[1][0] , trajectory[1][1]
//trajectory[2][0] , trajectory[2][1]

