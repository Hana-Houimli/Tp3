//1
function add(a:number,b:number):number{
    return a+b;
}
console.log(add(8,5));

//2
function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Bonjour ${name}, vous avez ${age} ans.`);
  } else {
    console.log(`Bonjour ${name}, âge inconnu.`);
  }
}
greet("Hana", 25);
greet("Alice"); 

//3
function power(base: number, exp: number = 2): number {
  return base ** exp;
}
console.log(power(3)); 
console.log(power(2, 3)); 

//4
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine(2, 3));
console.log(combine("Hello, ", "Hana"));