const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars') for handle bar donot delete

const errorController = require('./controllers/error')

const app = express();

// app.engine('hbs', expressHbs({layoutsDir : 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' })); for handlebar donot delete
app.set('view engine', 'ejs');
//app.set('views', 'views');
app.set('views', path.join(__dirname, 'views'));

const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//app.listen(3000);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});

module.exports = app;
