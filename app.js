import express from 'express';

const PORT = 3000;
const app = express();
const books = [];

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/submit', (req, res) => {
    const book = req.body;
    books.push(book);
    res.render('submit', {book});
});

app.get('/summary', (req, res) => {
    res.render('summary', {books});
});