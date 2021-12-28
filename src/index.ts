//Basic Data Types
let companyId:number = 5
let companyName:string = "Oratech"
let isRegistered:boolean = true
let companyAddress: any = "Software Technology Park, Islamabad."
//Arrays
let companiesInformation:any[] = [companyId, companyName, isRegistered, companyAddress]
//Tuple
let companiesInformationTuple:[number, string, boolean, any] = [companyId, companyName, isRegistered, companyAddress]
//Tuple Array
let companiesInformationTupleArray:[number, string, boolean, any][] = [
    [companyId, companyName, isRegistered, companyAddress],
    [companyId, companyName, isRegistered, companyAddress],
    [companyId, companyName, isRegistered, companyAddress] 
]
console.log("companiesInformationTupleArray : ", companiesInformationTupleArray)
//Union
let productId:string|number = 22
//Enum
enum Directions{
    up,
    down,
    left,
    right
}
enum DirectionPoint{
    up = 'upWard',
    down = 'downWard',
    left = 'leftSide',
    right = 'rightSide'
}
console.log("enum Directions : ", Directions)
console.log("enum DirectionPoint : ", DirectionPoint)
//Objects
type User = {
    userId:number
    userName:string
}
const user: User = {
    userId: 1,
    userName:'fawad'
}
console.log("Object user ID : ", user.userId)
console.log("Object user Name : ", user.userName)
//Assertion or type casting
let cId:any = 1
let customerId = <number> cId //or cId as number
//Functions
function addNum(x: number, y: number): number{
    log(x)
    log(y)
    return x+y;
}
console.log("Function Output : ", addNum(5,3))
//void
function log(message: string | number): void{
    console.log("Consle Log Message : ", message)
}
//Interface
interface UserInterface {
    userId: number,
    userName: string,
    userAge?: number //optional
}
const userInterface: UserInterface = {
    userId:111,
    userName:'Mustahsan'
    
}
console.log("Interface user ID : ", userInterface.userId)
console.log("Interface user Name : ", userInterface.userName)
//Interface Function
interface MathFunc{
    (x:number, y: number):number
}
const add:MathFunc = (x:number, y:number): number => x + y
const subtract:MathFunc = (x:number, y:number): number => x - y
console.log("Interface Function Add(8,4): ", add(8,4))
console.log("Interface Function Subtract(8,4): ", subtract(8,4))
//Interface
interface PersonInterface{
    personId:number;
    personName:string;
    toStrings():string;
}
//Class
class Person implements PersonInterface{
    personId:number;
    personName:string;

    constructor(id:number, name:string){
        this.personId = id;
        this.personName = name;
        //this.setPersonId(id)
        //this.setPersonName(name)
        console.log("Constructor values set : ", this.personId + " @ " + this.personName);
    }
    setPersonId(id:number){
        this.personId = id;
    }
    setPersonName(name:string){
        this.personName = name;
    }
    getPersonId():number{
        return this.personId;
    }
    getPersonName():string{
        return this.personName;
    }
    toStrings():string{ 
        return "personId : " + this.personId +" personName : " + this.personName;
    }

}
const person = new Person(121, 'Hakeem Ajmal');
person.setPersonName('Hakeem Ajmal Khan');
console.log("Class Person.getPersonId and Person.getPersonName: ");
console.log("Person.getPersonId() : ", person.getPersonId());
console.log("Person.getPersonName() : ", person.getPersonName());
console.log("Person.toStrings() : ", person.toStrings());

//Employee subClass Extends Person Class
class Employee extends Person{
    private employeePosition:string;

    constructor(id:number, name:string, position:string){
        super(id, name);
        this.employeePosition = position;
    }
    setEmployeePosition(position:string){
        this.employeePosition = position;
    }
    getEmployeePosition():string{
        return this.employeePosition;
    }
    toStrings(): string {
        return  super.toStrings() + " EmployeePosition : " + this.getEmployeePosition();
    }

}
const employee = new Employee(35,'Naheem Anwar Khan','Justice of Peshawer High Court');
employee.setPersonName('Naheem Anwar Khan @ Mansehra');
employee.setEmployeePosition('Justice of Peshawer High Court @ PAKISTAN');
console.log(employee.toStrings());

//Generics
function getArray<T>(items: T[]):T[]{
    return new Array().concat(items);
}
let numberArray = getArray<number>([1,2,3,4,5,6]);
let stringArray = getArray<string>(['Red','Orange','Green','Yellow','Blue','Black']);
stringArray.push('White');
numberArray.push(7);
console.log('Generic Number Array Elements : ');
numberArray.forEach(element => {
    console.log(element);
});
console.log('Generic String Array Elements : ');
stringArray.forEach(element=>{
    console.log(element);
});
