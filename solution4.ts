// {
//     //Problem 4:
// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

// Sample Input 1:
// reverseArray(["apple", "banana", "cherry"])

// Sample Output 1:
// ["cherry", "banana", "apple"]

// Sample Input 2:
// reverseArray([10, 20, 30])

// Sample Output 2: 
// [30, 20, 10]



    const reverseArray = (imputArray: any): any => {
        
        let reversedArray: any = [];

        for (let i = imputArray.length - 1; i >= 0; i--){
            reversedArray.push(imputArray[i])
        }


        return reversedArray;
    }


    console.log(reverseArray(["apple", "banana", "cherry"]));
    console.log(reverseArray([55, 92, 3, 66]));







//     //
// }