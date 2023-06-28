const path = require('path');
const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRoute');
const productsRouter = require('./routers/productsRoute');
const userRouter = require('./routers/userRoute');
const methodOverride = require('method-override');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('server running in the 3000 port');
});

app.use('/', mainRouter);
app.use('/', productsRouter);
app.use('/', userRouter);
