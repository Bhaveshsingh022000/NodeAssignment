const path = require('path');
const fs = require('fs');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'book.json'
);

module.exports = class Book {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.id = Math.random().toString();
        this.createdAt = new Date();
    }
    save() {
        return new Promise((resolve, reject) => {
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    resolve(JSON.parse(fileContent));
                }
            })
        })
            .then(result => {
                const arr = result;
                arr.push(this);
                fs.writeFile(p, JSON.stringify(arr), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    static fetchAllBooks() {
        return new Promise((resolve, reject) => {
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(JSON.parse(fileContent));
                }
            })
        }).then(result => {
            return result;
        }).catch(err => {
            console.log(err);
        })
    }

    static fetchBookDetails(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(JSON.parse(fileContent));
                }
            })
        }).then(result => {
            const details = result.filter((el) => {
                return el.id == id;
            })
            return details;
        }).catch(err => {
            console.log(err);
        })
    }
}