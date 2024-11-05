{
    //
    // Problem 7:
// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

// Sample Input 1: 
// logString("Hello, TypeScript!");

// Sample Output 1:  
// "Hello, TypeScript!"

// Sample Input 2: 
// logString(42)

// Output: Error: 
// Input is not a string.



    // solution: 

    const logString = (userInput: unknown): unknown => {

        if (typeof userInput === 'string') {
            return userInput
        } else {
            //    return 'Invalid input. The input is not string type';
            throw new Error("Invalid input: Expected a string");
        }


    }

    // if you use else return part then this will work 
    // console.log(logString('hello'));
    // console.log(logString(42));
    // console.log(logString(true));



    // if you use throw new Error then use this part otherwise app will crush 
    try {
    console.log(logString('hello')); // Output: "hello"
    console.log(logString(42));      // This will throw an error
    console.log(logString(true));    // This will throw an error
    } catch (error) {
        console.error(error); // Log the error without crashing the app
    }















    //
}