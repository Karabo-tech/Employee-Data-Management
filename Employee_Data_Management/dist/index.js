"use strict";
let employee1 = {
    fullName: ["Nokwanda", "Maranjane"],
    age: 30,
    department: "ICT",
    skills: ["Java", "React.js", "Node.js"],
    isActive: true
};
let employee2 = {
    fullName: ["Sizwe", "Masemola"],
    age: 28,
    department: "Humanities",
    skills: ["Adminstration", "Teaching", "SEO"],
    isActive: false
};
let logEmployee = (emp) => {
    let activity = emp.isActive ? "Yes" : "No";
    console.log("--- Employee Details ---");
    console.log(`Name: ${emp.fullName[0]} ${emp.fullName[1]}`);
    console.log(`Age: ${emp.age}`);
    console.log(`Department: ${emp.department}`);
    let skills = "";
    for (let i = 0; i < emp.skills.length; i++) {
        skills = `${skills} ${emp.skills[i]},`;
    }
    skills = skills.substring(0, skills.length - 1);
    console.log(`Skills: ${skills}`);
    console.log(`Active: ${activity}`);
    console.log("------------------------");
};
logEmployee(employee1);
logEmployee(employee2);
