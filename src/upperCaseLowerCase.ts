// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

function matchString(str: 'red' | 'green' | 'blue', other?: boolean) {
    if (other) {
        console.log(str.toUpperCase());

    } else {
        console.log(str.toLowerCase());

    }
}

matchString('red', false)