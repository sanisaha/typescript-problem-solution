// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// interface IPerson {
//     name: string;
//     age: number;
//     email: string;
// }

// const personArray: IPerson[] = [
//     {
//         name: 'jony',
//         age: 22,
//         email: 'jony@jony'
//     }, {
//         name: 'rony',
//         age: 28,
//         email: 'rony@rony'
//     }, {
//         name: 'mony',
//         age: 26,
//         email: 'mony@mony'
//     }
// ]

// function matchEmail(testArray: IPerson[], email: string): IPerson | null {
//     for (const person of testArray) {
//         if (person.email === email) {
//             return person

//         }

//     }
//     return null
// }

// matchEmail(personArray, 'mony@mony')

