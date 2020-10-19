const Book = require('../model/bookModel');

exports.getBooks = (req, res, next) => {
    Book.fetchAllBooks()
        .then(result => {
            res.render('index', {
                pageTitle: 'Home',
                path: '/',
                books: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postAddBooks = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const book = new Book(title, description, price);
    book.save().then(result => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });

}

exports.getAddBooks = (req, res, next) => {
    res.render('addBook', {
        pageTitle: 'Add Book',
        path: '/addBook'
    });
}

exports.getBookDetails = (req, res, next) => {
    const id = req.params.id;
    Book.fetchBookDetails(id)
        .then(result => {
            res.render('bookDetails', {
                pageTitle: 'Book Details',
                path: '/bookDetails',
                book: result
            })
        })
        .catch(err => {
            console.log(err);
        })

}