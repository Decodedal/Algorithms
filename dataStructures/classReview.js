class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
        this.power = 0 
    }

    getFullName = () =>{
        return `${this.firstName} from the family ${this.lastName} power level ${this.power >= 9000 ? "Its over 9000" : this.power}%`
   }

   incresePower(){
    this.power += 9000
   }

}

const Dallas = new Student("Dallas", "Palumbo")


// console.log(Dallas.getFullName())

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    // this is the static method
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y

        return Math.hypot(dx,dy)
    }
}

const p1 = new Point(5,5)
const p2 = new Point(10,10)

console.log(Point.distance(p1,p2))