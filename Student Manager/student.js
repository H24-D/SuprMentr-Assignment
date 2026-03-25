let students = [
  { name: "Harsha", marks: [80, 75, 90] },
  { name: "Rahul", marks: [60, 70, 65] },
  { name: "Thushar", marks: [85, 95, 88] }
];

function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

students.forEach(student => {
  let avg = calculateAverage(student.marks);
  console.log(student.name, "Average:", avg);
});