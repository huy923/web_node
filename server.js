const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/dynamic', (req, res) => {
    res.send('Hello World!');
});

app.get('/dynamic', (req, res) => {
    res.render('dynamic', { message: 'This is a dynamic page!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/dynamic`);
});
