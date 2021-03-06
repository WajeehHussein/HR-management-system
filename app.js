'use strict';

//arrays

let secEl = document.getElementById("secOne");
let formEl = document.getElementById("formID");
let card = document.getElementById('card')
let allEmployees = [];

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


//DOM
Employee.prototype.render = function () {

    let card = document.createElement('div')
    card.classList = ('card')
    secEl.appendChild(card)

    //image
    let image = document.createElement('img')
    image.classList = ('cardImg')
    image.src = this.ImageUrl
    card.appendChild(image)

    //full name
    let fullName = document.createElement('h3')
    fullName.classList = ('cardTitle')
    fullName.textContent = `Name: ${this.fullName}`
    card.appendChild(fullName)

    let text = document.createElement('p')
    text.classList = ('cardText')
    text.textContent = `ID: ${this.employeeId} \n - Department: ${this.department} \n Level: ${this.level} Salary: ${this.salary}\n `
    card.appendChild(text)

}

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

//Events
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    // let empId = Employee.prototype.empId();
    let name = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.ImageUrl.value;
    let salary = Employee.prototype.Salary();
    let newEmp = new Employee("1000", name, department, level, image, salary);
    newEmp.render();
    console.log(newEmp);
}

//local storage

// function saveData(data) {
//     let stringfiyData = JSON.stringify(data);
//     localStorage.setItem("employees", stringfiyData);

// }

// function getData() {
//     let retrievedData = localStorage.getItem("employees");
//     let arrayData = JSON.parse(retrievedData);
//     if (arrayData != null) {
//         for (let i = 0; i < arrayData.length; i++) {
//             new Employee(arrayData[i].image, arrayData[i].name, arrayData[i].department, arrayData[i].level)
//         }
//     }

//     // render();
// }

// // saveData();
// getData();
