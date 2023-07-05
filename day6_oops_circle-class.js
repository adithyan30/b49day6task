class Circle{

    setRadius(radius)
    {
    this.radius = radius;
    }

    getRadius()
    {
        console.log(this.radius);
    }

    setColor(color)
    {
        this.color = color;
    }

    setRadius(radius)
    {
        this.radius = radius;
    }

    getColor()
    {
        console.log(this.color);
    }

    toString(){
        return `circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea()
    {
        return (3.14*(this.radius)*(this.radius))
    }

    getCircumference()
    {
        return (2*3.14*(this.radius))
    }
}

c = new Circle()
c.setRadius(1);
console.log(c.getRadius());
c.setColor("Red");
console.log(c.getColor());
console.log(c.toString());
console.log(c.getArea());
console.log(c.getCircumference());
