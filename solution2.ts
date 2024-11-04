{
    // 
    // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
    // Sample Input:
    // findLargestNumber([10, 5, 8, 20, 3])

    // Sample Output:
    // 20

    const findLargestNumber = (numbersArray: number[] ): number => {

        let largestNumber = numbersArray[0];

        for (let i = 1; i < numbersArray.length; i++){
            if (numbersArray[i] > largestNumber) {
                largestNumber = numbersArray[i]
            }
        };

        return largestNumber;

}


console.log(findLargestNumber([7, 6, 3]));


}