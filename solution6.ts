{
    //Problem 6:
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

// Hints: Use getFullYear() method to extract the year to check the given year with current year.

// Sample Input :
// const book1: Book = {
//     title: "Sample Book",
//     author: "John Doe",
//     publishedYear: 2022
// };
// isRecentBook(book1);

// Sample Output: 
    // true
    

    // solution starts here /

    type Book = {
        title: string;
        author: string;
        publishedYear: number
    }

    // console.log(new Date().getFullYear());


    const isRecentBook = (book: Book): boolean => {
        
        const currentYear = new Date().getFullYear();
        const publicationYear = book.publishedYear;

        return currentYear - publicationYear <=5  // if not within 5 years, then use >5
    }



    // Sample Input :
    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };


    console.log(isRecentBook(book1));;










    //
}