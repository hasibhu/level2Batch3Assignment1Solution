{
    //Problem 3:
// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
// Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Sample Output:
// [2, 4, 6]

    
    
    const filterEvenNumbers = (numbers: number[]): number[] => {
        
        let evenNumbers   = [];

        for (let i = 0; i < numbers.length; i++){
            if (numbers[i]%2 === 0) {
                evenNumbers.push(numbers[i])
            }
        };

        return evenNumbers;

    }


    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));










    //
}