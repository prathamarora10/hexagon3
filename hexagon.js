class Hexagon
{
    constructor(x,y){
       
        var option = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x,y,20,20,option)
        this.width = width
        this.height = height
        this.image = loadImage("download.png")
        World.add(world,this.body)
    }
    display(){

        var pos = this.body.position

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
        rectMode(CENTER)
        rect(pos.x,pos.y,20,20)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
    }
}