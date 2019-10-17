interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}



class User implements UserInterface{
    // the use of the keyword 'private' is an access modifier
    // that restricts the access of the attribute to within the class User
    // Ex: private email: string;

    // the use of the keyword 'public' is an access modifier
    // that enables access to the attribute outside the class User
    // Ex: public name: string;

    // the use of the keyword 'protected' is an access modifier
    // that restricts the access of the attribute outside the class
    // but can be accessed within any class that inherits the User class
    // Ex: protected age: number;

    // functions can use access modifiers as well ??? (doublecheck that)

   name: string;
   email: string;  
   age: number;

    constructor(name: string, email: string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);

    }

    public register() {
        console.log(this.name + " is now registered");
    }

    payInvoice() {
        console.log(this.name + " paid invoice")
    }
}

class Member extends User {
    id: number;
    
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice()
    }
}


// let aliya = new User("Aliya", "aliya@email.com", 26);

// aliya.register();

let mike: User = new Member(1, "Mike Smith", "mike@email.com", 43);

mike.payInvoice();

