const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
}

getAverageStudentScore(students); // Output: 87.5



let totalSum=students.reduce(function(accumulator,order){
  return accumulator+order.score
},0)

let avg=totalSum/4

console.log(totalSum)
console.log(avg)