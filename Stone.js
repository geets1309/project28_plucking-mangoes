class Stone{


    constructor(x,y,radius)
    {
    var stone_options={
    
        isStatic:false,
        restitution:0,
			friction:1,
			density:1.2
    }
    this.radius=radius;
    
    this.image=loadImage("stone.png");
        this.body=Bodies.circle(x,y,this.radius,stone_options);
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