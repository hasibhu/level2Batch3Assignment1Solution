{
    //    //Problem 8:
// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

// Sample Input:
// new Car("Toyota", "Corolla", 2020);

// Sample Output: 
    // "Your car model is:  2020 Toyota Corolla"
    


    // solution: 
    
    class Car{
        brand: string;
        model: string;
        year: number
        

        constructor(brand: string, model: string, year: number) { 
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        

        displayinfo(): string {
            return `You car model is: ${this.year} ${this.brand} ${this.model}`
        }
    }



    const myCar = new Car('Peugeot', '207cc', 2008)


    console.log(myCar.displayinfo());










    //
}