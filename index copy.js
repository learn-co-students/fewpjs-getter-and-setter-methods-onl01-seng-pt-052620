const pi = Math.PI 

class Circle{
    constructor(radius){
        this.radius = radius; 
    }
    get diameter(){
        return this.radius * 2
    }
    
    set diameter(diameter){
        this.radius = diameter / 2 
    }

    get circumference(){
        return (this.radius * 2) * pi     
    }

    set circumference(circumference){
        this.radius = circumference / (pi * 2) 
    }

    get area(){
        return pi * (this.radius * this.radius) 
    }

    set area(area){
        this.radius = Math.sqrt(area / pi)
    }
}



// class Bird{
//     constructor(name){
//         this.name = name
//     }

//     set phrase(phrase){
//         this._phrase = phrase
//     }

//     get speak(){
//        return `${this.name} says ${this._phrase || "squawk"}` 
//     }
// }

// let daffy = new Bird("Daffy") 
// daffy.speak //Daffy says squawk

// daffy.phrase = "It's rabbit season!"
// daffy.speak  //Daffy says it's rabbit season!




// Finally, you can find the diameter - it is simply double the radius: D = 2 * R = 2 * 14 = 28 cm . Use our circumference calculator to find the radius when you only have the circumference or area of a circle.


// For reference, here are the formulas for calculating diameter, circumference and area:
// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2



// const pi = Math.PI

// class Circle {
//   constructor( radius ) {
//     this.radius = radius;
//   }

//   get diameter() {
//     return this.radius * 2
//   }

//   set diameter( diameter ) {
//     this.radius = diameter / 2
//   }

//   get circumference() {
//     return ( this.radius * 2 ) * pi
//   }

//   set circumference( circumference ) {
//     this.radius = circumference / ( pi * 2 )
//   }

//   get area() {
//     return pi * ( this.radius * this.radius )
//   }

//   set area( area ) {
//     this.radius = Math.sqrt( area / pi )
//   }
// }