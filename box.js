class Box
{
    constructor(x,y,width,height){

        var option = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.width = height
        World.add(world,this.body)
        this.Visiblity = 255
    }
    display(){
        var pos = this.body.position

        if(this.body.speed > 3){
            World.remove(world,this.body)
            push()
            this.Visiblity = this.Visiblity - 5
            tint(255,this.Visiblity)
            pop()
        }

        fill('blue')
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}
