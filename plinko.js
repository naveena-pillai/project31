class Plinko {
   constructor(x, y, radius){
       var options = {
           'isStatic':true
       }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
   } 
   display(){
       var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(164,172,176);
        ellipse(pos.x,pos.y,this.radius);
        pop();
   }
}
