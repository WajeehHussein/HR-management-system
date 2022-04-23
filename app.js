'use strict';

//arrays
let secEl = document.getElementById("secOne");
let formEl = document.getElementById("formID");
// let card1 = document.getElementsByClassName('card1')
// let card2 = document.getElementsByClassName('card2')
// let card3 = document.getElementsByClassName('card3')
// let card4 = document.getElementsByClassName('card4')
// let card5 = document.getElementsByClassName('card5')
// let card6 = document.getElementsByClassName('card6')
// let cards = [card1, card2, card3, card4, card5, card6]
let allEmployees = [];
let department = ["Administration", "Marketing", "Development", "Finance"]
let level = ["Junior", "MidSenior", "Senior"]

//constructor
function Employee(employeeId, fullName, department, level, ImageUrl, Salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.Department = department;
    this.Level = level;
    this.ImageUrl = ImageUrl;
    this.Salary = Salary;
    allEmployees.push(this);
}
//DOM
Employee.prototype.render = function () {



    //image
    let image = document.createElement('img')
    image.src = this.ImageUrl
    secEl.appendChild(image)

    //first name
    let fullName = document.createElement('h3')
    fullName.textContent = `Name: ${this.fullName}`
    secEl.appendChild(fullName)
    //ID
    let idEmp = document.createElement('h4')
    idEmp.textContent = `ID: ${this.employeeId}`
    secEl.appendChild(idEmp)
    //Department
    let department = document.createElement('h4')
    department.textContent = `Department: ${this.Department}`
    secEl.appendChild(department)
    //level
    let level = document.createElement('h4')
    level.textContent = `Level: ${this.Level}`
    secEl.appendChild(level)
    //salary
    let salary = document.createElement('h4')
    salary.textContent = `${this.Salary}`
    secEl.appendChild(salary)

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
    return this.Salary = Math.floor(this.Salary * (1 - .075))
}



function randomNum(max) {
    return Math.floor(1000 + Math.random() * 9000);
}

let ghazi = new Employee(randomNum(1000), "Ghazi Samer", department[0], level[2], './assets/Ghazi.jpg');
let lana = new Employee(randomNum(1000), "Lana Ali", department[3], level[2], './assets/Lana.jpg');
let tamara = new Employee(randomNum(1000), "Tamara Ayoub", department[1], level[2], './assets/Tamara.jpg');
let safi = new Employee(randomNum(1000), "Safi Walid", department[0], level[1], './assets/Safi.jpg');
let omar = new Employee(randomNum(1000), "Omar Zaid", department[2], level[2], './assets/Omar.jpg');
let rana = new Employee(randomNum(1000), "Rana Saleh", department[2], level[0], './assets/Rana.jpg');
let hadi = new Employee(randomNum(1000), "Hadi Ahmad", department[3], level[1], './assets/Hadi.jpg');


for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].salary();
    // allEmployees[i].render();
}

//DOM

//Events
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let image = event.target.ImageUrl.value;
    let name = event.target.fullName.value;
    // let empId = event.target.randomly.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    // let salary = event.target.salary.value;

    let newEmp = new Employee(image, name, department, level);

    newEmp.render();
    console.log(newEmp);
}