//write your code here to make the tests pass

class Document {
    constructor(name){
        this.EmployeeName = name
    }
}

class Employee {
    constructor(name){
        this.name = name
    }

// work(office){
//     this.name.forEach(a => console.log(new Documentname(this.name)))
// }
// }

work(office){
    for(let i = 0; i < 10; i++){
        office.documents.push(new Document(this.name))
    }
}
}

// class Manager {

//     constructor() {
//     this.employees=[]
//     } 

//     constructor(name){
//         this.name = name
//     }
    
//     hireEmployee(name){
//         this.employees.push(name)
//     }
// }

class Manager {
    constructor(name){
        this.employees = []
        this.name = name
    }

    hireEmployee(name){
        this.employees.push(new Employee(name))//יצרנו מקרה של הקלאס, הגדירו לנו את השם, כל שם אחר לא תקין!!!
    }
    
    askEmployeesToWork(office){
        this.employees.forEach(e => e.work(office))
    }
}
class Cleaner {
    constructor(name){
        this.name = name
    }

    clean(){
        console.log("Clean")
    }
}

class Office {
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name){
        this.cleaners.push(new Cleaner(name))
    }

    hireManager(name){
        this.managers.push(new Manager(name))
    }

    startWorkDay(){
        this.managers.forEach(m => m.askEmployeesToWork(this))
        this.cleaners.forEach(c => c.clean)
    }
}


    // class Zoo {כללי זהב, תמיד לרשום במילים בעברית מה הפונקציה עושה, אם היא עושה את זה נכון לא צריך לכת==קרוא את הסינטקס יותר מפעם אחת
    //     constructor() {
    //         this.animals = []    
    //     }
    
    //     addAnimal(animal) {מוסיף חיה לגן חיות
    //         this.animals.push(animal)
    //         console.log("Added " + animal.name + " to the zoo")
    //     }
    
    //     showAnimals() {מדפיס מערך של כל חיות הגן ברבים
    //         this.animals.forEach(a => console.log(a.name))
    
    //     }
    // }
    
    // class Animal {יוצר אובייקט לכל חיה שאחרי זה נשלח לגן חיות בADD
    //     constructor(name, numLegs) {
    //         this.name = name
    //         this.numLegs = numLegs
    //     }
    // }
    
 
// class Employee {
//     constructor(name){
//         this.name = name
//     }

//     work(office){
//         for(let i = 0; i < 10; i++){
//             office.documents.push(new Document(this.name))
//         }
//     }
// }

