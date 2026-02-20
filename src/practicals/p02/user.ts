export class User {
    firstname: string
    lastname: string
    age: number
    constructor(firstname :string,lastname :string,age:number){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    static BIRTH_YEAR:number = 2000
    setFirstname(){
        return this.firstname;
    }
    setLastname(){
        return this.lastname;
    }
    setAge(){
        return this.age
    }
    getAge(){
        return `${this.age}`
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}
