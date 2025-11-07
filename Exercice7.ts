//1
function identity<T>(value:T):T {
    return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42)); 
console.log(identity<boolean>(true)); 

//2
function getFirst<T>(arr: T[]): T| undefined{
    return arr[0];
}

console.log(getFirst<number>([1,2,3]));
console.log(getFirst<string>(['a','b','c']));

//3
class Repository <T>{
    private repos: T[]=[];
    add(repo:T):void{
        this.repos.push(repo);
    }
    remove(repo:T):void{
        this.repos =this.repos.filter(r=>r!==repo);
    }
    getAll(): T[] {
        return this.repos;
    }

}

const stringRepo = new Repository<string>()
stringRepo.add("repo 1");
stringRepo.add("repo 2"); 
stringRepo.add("repo 3");
console.log(stringRepo.getAll());
stringRepo.remove("repo 2");
console.log(stringRepo.getAll());

//4
interface ApiResponse<T>{data:T,error?:string};
