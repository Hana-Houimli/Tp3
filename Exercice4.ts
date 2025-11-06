interface User{id:number, name:string, email?:string, readonly isAdmin:boolean};
const user1: User = {id:1, name:"Hana",isAdmin:true};

interface Admin extends User {permissions : string[]};
const admin1: Admin = {id: 2,name: "Bob",isAdmin: true, permissions: ["read", "write", "delete"]};