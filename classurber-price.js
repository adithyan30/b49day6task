class uberprice{
    constructor(distance,time)
    {
        this.distance=distance;
        this.time=time;
        this.fare = 5.00;
        this.minfare = 1.00;
        this.kmfare = 3;
    }
    calculation()
    {
        const timecost = this.time * this.minfare;
        const distcost = this.distance * this.kmfare;
        const uberfare = this.fare+timecost+distcost;
        return uberfare;
    }
}
const rride= new uberprice(20,150);
console.log(rride.calculation());