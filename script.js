// Part 1: Create & Log Student Object
const student = {
  name: "Bishoy",
  age: 25,
  enrolled: true,
  courses: ["Math", "Physics", "Computer Science"],
  displayInfo: function() {
    return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
  }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Info:", student.displayInfo());

// Part 2: JSON Conversion
const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);

// Part 3: Destructuring Assignment
// Object destructuring
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

// Array destructuring
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);