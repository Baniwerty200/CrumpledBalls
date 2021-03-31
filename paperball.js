class paperball{
constructor(x,y,r){
var options={
    restitution:0.8,
    friction:1.0,
    density:4.0
}

this.image=loadImage("paper.png");
this.body=Bodies.circle(x,y,(r-20)/2,options);
this.x=x;
this.y=y;
this.radius=r;
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
}
}