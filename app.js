'use strict';
//arrays
let allEmployees = [];
let department = ["Administration", "Marketing", "Development", "Finance"]
let level = ["Junior", "MidSenior", "Senior"]


//constructor
function Employee(EmployeeID, FullName, department, level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = department;
    this.Level = level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
    allEmployees.push(this);

}

Employee.prototype.render = function () {
    document.write(`<h3>My name is ${this.FullName} and my salary is ${this.Salary} </h3>`)
}

//function
Employee.prototype.salary = function () {
    for (let i = 0; i < allEmployees.length; i++) {
        if (this.Level === 'Junior') {
            let a = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            this.Salary = a(500, 1000)
        } else if (this.Level === level[1]) {
            let a = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            this.Salary = a(1000, 1500)
        } else if (this.Level === level[2]) {
            let a = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            this.Salary = a(1500, 2000)
        }
    }
    return this.Salary = this.Salary * (1 - .075)
}


let ghazi = new Employee(1000, "Ghazi Samer", department[0], level[2]);
let lana = new Employee(1001, "Lana Ali", department[3], level[2]);
let tamara = new Employee(1002, "Tamara Ayoub", department[1], level[2]);
let safi = new Employee(1003, "Safi Walid", department[0], level[1]);
let omar = new Employee(1004, "Omar Zaid", department[2], level[2]);
let rana = new Employee(1005, "Rana Saleh", department[2], level[0]);
let hadi = new Employee(1006, "Hadi Ahmad", department[3], level[1]);


for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].salary();
    allEmployees[i].render();
}





