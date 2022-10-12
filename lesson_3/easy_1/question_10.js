let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
advice = advice.split(' ')
advice.splice(8)
advice = advice.join(' ')
console.log(advice)

// better solution
advice.slice(0, advice.indexOf('house'));
