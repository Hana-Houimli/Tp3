//1
let id : number | string;
//2
type A ={a:number};
type B ={b:string};
type C = A & B;
const u : C ={a:1,b:"ok"};
console.log(u);
//3
type Status = "pending" | "done" | "canceled";
//4
let value : unknown = 3;
let strLength: number = (value as string).length;
console.log(strLength);

