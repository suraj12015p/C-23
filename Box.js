class Box {
constructor(x,y,width,height){
    var options = {
        friction:1.0,
        restitution:1
    }
this.body = Bodies.rectangle(x,y,width,height,options);
this.width =width
this.height=height
World.add(suraj_world,this.body);
}
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
   rotate (angle) 
   translate(pos.x,pos.y)
    rectMode (CENTER)
    fill (255);
    rect(0,0,this.width,this.height)
    pop();
}
}