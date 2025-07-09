"# Employee-Data-Management" 

Employee Logger (TypeScript)

Description
This TypeScript program defines an Employee type to represent employee details including full name, age, department, skills, and activity status. It creates two employee objects (employee1 and employee2) and uses a reusable logEmployee function to print each employee’s details to the console in a readable format.

Features
✅ Defines a structured type (Employee) for consistency.
✅ Uses arrays to store names and skills.
✅ Demonstrates TypeScript type safety with clear types.
✅ Formats output with a clean console display.
✅ Shows conditional display for active/inactive employees.

Structure
Employee Type
ts
Copy
Edit
type Employee = {
    fullName: [string, string], // First and last name
    age: number,
    department: string,
    skills: string[],
    isActive: boolean
};
Employees Created
employee1: John Doe, 30, ICT, Skills: Java, React.js, Node.js, Active.

employee2: Karabo Moreti, 28, Humanities, Skills: Administration, Teaching, SEO, Inactive.

logEmployee Function
A function that:

Displays a header for clarity.

Shows the employee’s full name, age, department, and skills.

Converts isActive boolean to Yes or No for user-friendly output.

Uses a for loop to build a readable skills list.

Output Example
bash
Copy
Edit
--- Employee Details ---
Name: John Doe
Age: 30
Department: ICT
Skills: Java, React.js, Node.js
Active: Yes
------------------------

--- Employee Details ---
Name: Karabo Moreti
Age: 28
Department: Humanities
Skills: Administration, Teaching, SEO
Active: No
------------------------
How to Run
1️⃣ Ensure you have Node.js and TypeScript installed.
2️⃣ Save the code in a file named, for example, employeeLogger.ts.
3️⃣ Compile:

bash
Copy
Edit
tsc employeeLogger.ts
4️⃣ Run:

bash
Copy
Edit
node employeeLogger.js
Purpose
This code is ideal for:

Beginners learning TypeScript type definitions.

Practicing basic console output formatting.

Understanding arrays, loops, and conditional checks in TypeScript.
