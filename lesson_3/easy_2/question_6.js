let flintstones = ["Fred", "Wilma"];
children = (["Barney", "Betty"]);
cousin = (["Bambam", "Pebbles"]);
console.log(flintstones.concat(children, cousin))

// solution 2
console.log([...flintstones, ...["Barney", "Betty"], ...["Bambam", "Pebbles"]])