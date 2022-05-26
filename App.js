const express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    admin = require('./routes/admin'),
    user = require('./routes/user');

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, '/public')));


app.use(admin);
app.use(user);
app.use((req, res) => {
    res.status(400);
    res.render('error');
});


mongoose.connect('mongodb://localhost/abs').then(() => {
    app.listen(3000, () => {
        console.log('Sistem 3000 nolu port üzerinden yayında');
    })
}).catch((err) => {
    console.log('mongo bağlantı hatası : ', err);
})