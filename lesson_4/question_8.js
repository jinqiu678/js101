let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// TO DO
flintstonesEntries = Object.entries(flintstones);
newObj = {};
for (i of flintstonesEntries) {
  let [key, value] = i;
  newObj[value] = Number(key);
}
console.log(newObj);

// using foreach

newObj2 = {};

flintstones.forEach((name, index) => {
  newObj2[name] = index;
});

console.log(newObj2);

// result { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }