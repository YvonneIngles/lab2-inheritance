/**
 * ### Step 3: Write a SavingsAccount class

In *lab1-part2.ts* write a **SavingsAccount** class with the exact 
same functionality as your **CheckingsAccount** class 
(you can copy -> paste -> rename).

The only thing that is different about your SavingsAccount class 
is that there should be a limit on the number of withdrawals you can make.

Specifically, each instance of the SavingsAccount class should 
only be allowed to make **3 withdrawals**. 
Any calls that exceed that limit should *not* perform the 
withdrawal and additionally should print out an error message for the 
user to see.

Make sure to write code that creates an instance of your class 
and calls its methods to make sure it works.

When you are done with this step, commit your changes to git for this file
 */

class SavingsAccount {

    // attributes
    private initialBalance: number;
    private ownerName: string;

    private numWithdrawals: number;

    constructor(initialBalance: number, ownerName: string, numWithdrawals: number = 0) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.numWithdrawals = numWithdrawals;
    }


    // deposit method
    deposit(amount:number): number {
        return this.initialBalance = amount + this.initialBalance;
    }

    // withdraw method
    withdraw(amount:number): number {
        var tempAmount = this.initialBalance;
        if (this.numWithdrawals <= 3) {
            this.numWithdrawals ++;
            tempAmount = tempAmount - amount;
        }
        return tempAmount;
    }

    // checkBalance method
    checkBalance(): void {
        console.log(`The balance is ${this.initialBalance} and the owner is ${this.ownerName}.`);
    }


}