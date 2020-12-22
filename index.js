class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius + this.radius;
    }
    
    get circumference() {
        return ( this.radius * 2 ) * pi
    }
    
    get area() {
        return ( this.radius * this.radius ) * pi
    }


    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    
    set circumference(circumference) {
        this.radius = (circumference / pi) / 2
    }
    
    set area(area) {
        this.radius = Math.sqrt( area / pi )
    }


}

const pi = Math.PI;

