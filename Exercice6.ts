//1
class Person {
    name : string;
    age : number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
}
//2
class Student extends Person{
    school:string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school=school;
    }
    greet(){
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans et j'étudie à ${this.school}.`);
    }
}

const s1= new Student("Hana",22,"FST");
s1.greet();


//3
abstract class Shape{
    abstract area () : number;
}

class Circle extends Shape {
    radius :number;
    constructor(radius:number){
        super();
        this.radius = radius;
    }
    area(): number {
        return 3.14 * (this.radius **2);
    }

}

class Rectangle extends Shape {
    length : number;
    width : number;
    constructor(length : number,width : number){
        super();
        this.length = length;
        this.width = width;
    }
    area():number {
        return this.length * this.width;
    }

}
const circle = new Circle(5);
const rectangle = new Rectangle (3,2);
console.log(circle.area());
console.log(rectangle.area());

//4 
interface Drivable{
    drive(): void; 
}

class Car implements Drivable{
    brand: string;
    constructor( brand: string){
        this.brand = brand; 
    }
    drive():void{
        console.log(`${this.brand} démarre dans la route .`);
    }
} 
const car = new Car('Bmw');
car.drive();
