const cities = ['Berlin', 'Munich', 'London', 'Paris', 'New York'];

// 1 - using for loop
console.log('1 - FOR LOOP');
console.log('using the index of the array to do stuff');
console.log('BENEFITS - flexible, easy to adjust to your use case');
console.log('DOWNSIDE - more code to write');
for (let i = 0; i < cities.length; i++) {
    console.log('My next destination is: ', cities[i])
}

// 2 - using for each
console.log('2 - forEach');
console.log('easy to read and write');
console.log('BENEFITS - clean and concise syntax');
console.log('DOWNSIDE - not so good for conditional test');
cities.forEach((city) => {
    console.log('My next destination is: ', city)
})

// 3 - using for of
console.log('3 - for of');
console.log('easy to read and write');
console.log('BENEFITS - clean and concise syntax');
console.log('DOWNSIDE - not so good for conditional test');
for (const city of cities) {
    console.log('My next destnation is: ', city)
}

// 4 - using for of
console.log('4 - for in');
console.log('uses the index of the array');
console.log('BENEFITS - can also be used for looping over an object');
console.log('DOWNSIDE - less efficient: it loops over objects to prototype chain. Less recommended for looping over arrays.');
for (const index in cities) {
    console.log('My next destnation is: ', cities[index])
}

// 5 - using while loop
console.log('5 - using while loop');
console.log('less common - do not forget to create an exit condition');
let i = 0;
while ( i < cities.length) {
    console.log('My next destination is :', cities[i]);
    i++
}


// 6- using map()
console.log('6 - using map()');
console.log('creates a new array');
console.log('best when you want to transform each value of the array');
const destinations = cities.map(city => 'My next destination is: ' + city);
console.log(destinations);

// check compatability
// https://caniuse.com/?search=forEach