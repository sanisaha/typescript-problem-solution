// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion, and returns a new array containing only the products that match the given criterion and value.Use a generic type parameter in the function signature to ensure type safety.

interface IProducts {
    id: number;
    price: number;
    name: string;
    category: string;
}

const newProducts: IProducts[] = [{ id: 2, price: 50, name: "Chocolate", category: 'good' }, { id: 2, price: 50, name: "Chocolate", category: 'good' }, { id: 2, price: 50, name: "Chocolate", category: 'average' }]

function filterArray<T, K extends keyof T>(arr: T[], criteria: K) {
    const filteredArray = arr.filter(x => x[criteria] === 'average')
    console.log(filteredArray);

}

filterArray(newProducts, 'category');


