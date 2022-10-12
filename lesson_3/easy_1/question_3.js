let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

for (i in ages) {
  if (i === 'Spot') {
    return True
  }
}

// Suggested Solution
console.log(ages.hasOwnProperty("Spot"));