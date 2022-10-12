let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// add up all ages
agesValue = Object.values(ages);
sum = agesValue.reduce((previous, current) => previous + current, 0);
console.log(sum);