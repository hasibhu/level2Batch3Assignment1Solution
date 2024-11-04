// {
//     //



    const reverseArray = (imputArray: any): any => {
        
        let reversedArray: any = [];

        for (let i = imputArray.length - 1; i >= 0; i--){
            reversedArray.push(imputArray[i])
        }


        return reversedArray;
    }


    console.log(reverseArray(["apple", "banana", "cherry"]));







//     //
// }