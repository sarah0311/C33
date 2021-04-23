class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200 && gameState === "launched"){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    } else if(gameState === "onSling"){
    //  this.trajectory = [];
    }
   //if statement to sop finding positions of the bird to stop making the smoke images becuase they are appearing in the position stored in the trajectory
   // clear the bird positions when gameState is onSling

   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
