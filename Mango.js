class Mango{


    constructor(x,y,radius)
    {
    var mango_options={
    
        isStatic:true,
        restitution:0,
			friction:0
			
    }
    this.radius=radius;
    
    this.image=loadImage("mango.png");
        this.body=Bodies.circle(x,y,this.radius,mango_options);
        World.add(world,this.body);
    }
    
    display()
    {var pos=this.body.position;
        push ();
        imageMode(CENTER);
    image (this.image,pos.x,pos.y,this.radius,this.radius);
     pop ();
    
    }
    
    }