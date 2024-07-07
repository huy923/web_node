// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware để xử lý các tệp tin tĩnh
app.use(express.static('public'));

// Route cơ bản
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Lắng nghe các yêu cầu
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get('views/dynamic.ejs', (req, res) => {
    res.send('This is a dynamic route!');
});

app.set('view engine', 'ejs');

app.get('views/dynamic.ejs', (req, res) => {
    res.render('dynamic', { message: 'This is a dynamic page!' });
});
