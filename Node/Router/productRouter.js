import express from 'express';
let router = express.Router();

router.get('/', (req, res) =>
{
    res.end('Product Root')
})

router.get('/tv', (req, res) =>
{
    res.end('Product TV')
})

router.get('/mobile', (req, res) =>
{
    res.end('Product Mobile')
})

export default router;