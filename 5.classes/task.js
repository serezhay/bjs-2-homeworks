// Задача 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state (newState) {
        if (newState < 0 ) {
            this._state = 0;
        } else if ( newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        } 
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2
class Library {
    constructor (name, ) {
        this.name = name;
        this.books = [];
    } 

    addBook(book) {
        if(book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null ;
    }

    giveBookByName(bookName) {
       const bookToGive = this.findBookBy("name", bookName);
       if (bookToGive) {
        const indexBookToGive = this.books.indexOf(bookToGive);
        this.books.splice(indexBookToGive, 1);
        return bookToGive;
       }
       return null;
    }
        
}

// Задание 3
class Student {
    constructor(name) {
    this.name = name;
    this.marks = {};
    }

    addMark(marks, subject){
        if (marks > 5 || marks < 2){
            return;
        }
        if (this.marks[subject] == undefined){
           this.marks[subject] = []
        }
        if (this.marks[subject] !== undefined){
            this.marks[subject].push(marks)
        }
    }

    getAverageBySubject(subject) {
        if (this.marks[subject] == undefined){
            return 0;
        } 
     return this.marks[subject].reduce((acc, marks, index, array) => marks / array.length + acc, 0)
    }
    
    getAverage() {
       return Object.keys(this.marks).reduce((acc, item, index, arr) => this.getAverageBySubject(item) / arr.length + acc, 0)
        
    }
}