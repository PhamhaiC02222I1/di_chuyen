class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawRect(canvas) {
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.fillStyle = this.color;
        pen.fillRect(this.x, this.y, this.width, this.height);
        pen.stroke();
        pen.closePath();
    }
    moverec(){
        this.x+=2
    }
}