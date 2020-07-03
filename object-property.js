const student = [
  { id: 21, name: "Omar Sunny" },
  { id: 32, name: "Mannaaaa" },
  { id: 41, name: "Moyuri" },
  { id: 50, name: "Deepjol" },
];
const names = student.map((x) => x.name);
const ids = student.map((x) => x.id);
const bigger = student.filter((x) => x.id > 32);
const bigger1 = student.find((x) => x.id > 40);
console.log(bigger1);
