const customers = [
    {
        name: 'Tom',
        age: 20},
    {
        name: 'Lisa',
        age: 30
    },
    {
        name: 'Steve',
        age: 40
    },
    {
        name: 'Mary',
        age: 25
    },
    {
        firstName: 'Eliza',
        age: 35
    },
    {
        name: 'Mark',
        age: 16
    }
]

for (let customer of customers) {
    try {
        if (!customer.name) {
            throw new Error('Customer name was not provided')

        }

        if (customer.age < 18) {
            throw new Error('Customer is not yet 18')
        }

        console.log('Welcome to our shop, ', customer.name);

    }
    
    catch (e) {
        console.log(e)
    }
    
    finally {
        console.log('iteration finished: ')
    }
}

for (let customer of customers) {
    console.log(customer.name)
}

// DOM Elements - without try catch
// console.log('before DOM element');
// const text = document.querySelector('.mains-text');
// const textContent = text.textContent;

// console.log(textContent);
// console.log('after DOM element');

// DOM elements - with try catch
console.log('before DOM element');
try {
    const text = document.querySelector('.mains-text');
    const textContent = text.textContent;
    console.log(textContent);
}
catch(e) {
    console.log(e)
}

console.log('after DOM element');