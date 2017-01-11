/**
 * ### Step 2: Write a CheckingsAccount class

Write a TypeScript class in the *lab1-part1.ts* file that satisfies the following requirements:

* Has a constructor with the following parameters
	* initialBalance (a number)
	* ownerName (a string)
* Saves those parameters as private fields in your class
* Has a **deposit** method which takes a number amount as a parameter and adds it to your account's balance
* Has a **withdraw** method which takes a number amount as a parameter and subtracts it to your account's balance
* Has a **checkBalance** method which prints out the current balance of the account and the account owner's name (pro tip: ES6 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) make this a bit cleaner)

Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

When you are done with this step, commit your changes to git for this file.
 */

class CheckingsAccount {

    // attributes
    private initialBalance: number;
    private ownerName: string;

    constructor(initialBalance: number, ownerName: string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }


    // deposit method
    deposit(amount:number): number {
        return this.initialBalance = amount + this.initialBalance;
    }

    // withdraw method
    withdraw(amount:number): number {
        return this.initialBalance = this.initialBalance - amount;
    }

    // checkBalance method
    checkBalance(): void {
        console.log(`The balance is ${this.initialBalance} and the owner is ${this.ownerName}.`);
    }


}

let accountInfo: CheckingsAccount = new CheckingsAccount(0, "John Doe");

accountInfo.deposit(100);
accountInfo.withdraw(5);
accountInfo.checkBalance();