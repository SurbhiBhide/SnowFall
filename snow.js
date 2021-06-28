class snow1 {
    constructor(x, y) {
        var options = {
            restitution: 1,
            frictionAir: 0.05,
            isStatic:false,
        }
        this.x=x;
		this.y=y;
		this.r=15;
        this.body = Bodies.circle(this.x,this. y, this.r, options);
        this.image= loadImage("snow5.webp");
        World.add(world, this.body);
    }
    

 display() {

		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0, 3*this.r,2.5*this.r)
		pop()
 
}
}