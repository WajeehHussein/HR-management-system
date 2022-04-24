'use strict';

let allEmployees = [];

let secEl = document.getElementById("secOne");


//constructor
let department = ["Administration", "Marketing", "Development", "Finance"]
let level = ["Junior", "MidSenior", "Senior"]

function Employee(employeeId, fullName, department, level, ImageUrl, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.ImageUrl = ImageUrl;
    this.salary = salary;
    allEmployees.push(this);
}

for (let i = 0; i < department.length; i++) {
    let table = document.createElement('table')
    table.classList = ('table')
    secEl.appendChild(table)


    if (department[i] === "Administration") {
        let row1 = document.createElement('tr')
        row1.textContent = `${department[i]}`
        table.appendChild(row1)
    } else if (department[i] === "Marketing") {
        let row1 = document.createElement('tr')
        row1.textContent = `${department[i]}`
        table.appendChild(row1)
    } else if (department[i] === "Development") {
        let row1 = document.createElement('tr')
        row1.textContent = `${department[i]}`
        table.appendChild(row1)
    } else {
        let row1 = document.createElement('tr')
        row1.textContent = `${department[i]}`
        table.appendChild(row1)
    }


}

Employee.prototype.render = function () {
    if (this.department === "Administration") {
        let sum = 0;
        let row2 = document.createElement('tbody')
        row2.textContent = `${this.department}`
    }

}

console.log(Object.values(Employee));

//function
Employee.prototype.Salary = function () {

    for (let i = 0; i < allEmployees.length; i++) {
        if (this.level === 'Junior') {
            let a = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            this.salary = a(500, 1000)
        } else if (this.level === level[1]) {
            let a = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            this.salary = a(1000, 1500)
        } else if (this.level === level[2]) {
            let a = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            this.salary = a(1500, 2000)
        }
    }
    return this.salary = Math.floor(this.salary * (1 - .075))
}


function randomId(max) {
    return Math.floor(1000 + Math.random() * 9000);
}


let ghazi = new Employee(randomId(1000), "Ghazi Samer", department[0], level[2], './assets/Ghazi.jpg', "1700");
let lana = new Employee(randomId(1000), "Lana Ali", department[3], level[2], './assets/Lana.jpg', "1700");
let tamara = new Employee(randomId(1000), "Tamara Ayoub", department[1], level[2], './assets/Tamara.jpg', "1700");
let safi = new Employee(randomId(1000), "Safi Walid", department[0], level[1], './assets/Safi.jpg');
let omar = new Employee(randomId(1000), "Omar Zaid", department[2], level[2], './assets/Omar.jpg');
let rana = new Employee(randomId(1000), "Rana Saleh", department[2], level[0], './assets/Rana.jpg');
let hadi = new Employee(randomId(1000), "Hadi Ahmad", department[3], level[1], './assets/Hadi.jpg');

function renderAll() {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].Salary();
        allEmployees[i].render();
    }

}

renderAll()