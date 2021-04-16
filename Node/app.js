import express from 'express';
import productRouter from './Router/productRouter'

const app = express();

app.get('/', (req,res) =>
{
    res.send('<h1>Root</h1>')
})



app.use('/product', productRouter);

app.listen(8000, (err) =>
{
    if (err) throw err;
    console.log('Running on PORT : 8000  😉');
})

