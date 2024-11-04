{
    // Problem 1:
// Design a TypeScript function repeatString that takes two parameters: a string and a number. 
// The function should return a new string that repeats the input string the specified number of times.


    const repeatString = (stringInput: string, numberInput: number): string =>{
     
        let store: string = '';

        for (let i = 0; i < numberInput; i++){
         store +=stringInput
        }

        return store;
 }

   console.log( repeatString("Hello!", 3));






    // 
}