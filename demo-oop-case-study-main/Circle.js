const anh =new Image()
 anh.src ='frame.png'




class Circle {
    constructor(x,y,color="blue") {
        this.x = x;
        this.y = y;
        this.originalWidth=950;
        this.originalHeight=680;
        this.width = 20;
        this.height = 20;
        this.radius = 20;
        this.speed = 2;
        this.color = color;
        this.dir = "right";
    }

    render(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        // pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.drawImage(anh,0,0,this.originalWidth,this.originalHeight,this.x-30,this.y-30,this.width*2.5,this.height*2.5)
        pen.strokeStyle = "black";
        pen.stroke();
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    move(){
        switch (this.dir) {
            case "right":
                this.x += this.speed;
                break;
            case "left":
                this.x -= this.speed;
                break;
            case "up":
                this.y -= this.speed;
                break;
            case "down":
                this.y += this.speed;
                break;
        }
    }
}
