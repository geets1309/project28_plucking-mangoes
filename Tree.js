class Tree{


constructor(x,y,width,height)
{
var tree_options={

    isStatic:true
}
this.width=width;
this.height=height;
this.image=loadImage("tree.png");
    this.body=Bodies.rectangle(x,y,this.width,this.height,tree_options);
    World.add(world,this.body);
}

display()
{var pos=this.body.position;
    imageMode (CENTER);
image (this.image,pos.x,pos.y,this.width,this.height);

}

}