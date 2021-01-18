class Tree{
    constructor(x,y,h,angle){
        var option={
            isStatic:true
        }
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}