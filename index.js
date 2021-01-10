// Add your Circle class here

class Circle {
    constructor(radius){
        this._radius = radius
    }

    get radius(){
        return this._radius;
    }

    set radius(radius) {
        if (radius > 0) {
            this._radius = radius;
        } 
    }

    get diameter(){
        return this.radius * 2;
    }


    get circumference(){
        return Math.PI * this.diameter;
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(diameter){
        this._radius = diameter / 2;
    }

    set circumference(circumference){
        this._radius = (circumference / Math.PI) / 2
    }
}

