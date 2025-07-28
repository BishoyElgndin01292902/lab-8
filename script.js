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