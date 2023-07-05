// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

interface IProductsType {
    name: string; price: number; quantity: number
}

const arrayOfTuples: IProductsType[] = [{ name: 'chocolate', price: 120, quantity: 30 }, { name: 'mago', price: 420, quantity: 20 }]

function productsPrice(nums: any) { return nums.reduce((a: number, b: number): number => a + b) };

function calculateProductsPrice<T, K extends keyof T>(productsArray: T[], key: K) {
    const priceArray = productsArray.map(x => x[key])
    console.log(productsPrice(priceArray));




}

calculateProductsPrice(arrayOfTuples, 'price')
