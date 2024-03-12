const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.post('/setcookie', (req, res) => {
    const { cookieName, cookieValue } = req.body;
    res.cookie(cookieName, cookieValue);
    res.redirect('/');
  });

  
  app.get('/cookies', (req, res) => {
    res.send(req.cookies);
  });