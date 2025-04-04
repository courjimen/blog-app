import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express();
const port = 3000

app.use(cors())
app.use(express.json());

//display blogs
app.get('/blogs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM list')
        res.json(result.rows)
    } catch (err) {
        console.error('Error :', err)
        res.sendStatus(500)
    }
})

//add new blog to list
app.post('/blogs', async (req, res) => {
    console.log('Received POST request to /blogs');
    console.log('Request body:', req.body);
    const {title, category, content} = req.body

    try {
        const result = await pool.query('INSERT INTO list (title, category, content) VALUES ($1, $2, $3) RETURNING *',
        [title, category, content]);
        res.json(result.rows[0])
    } catch (err) {
        console.error('Error adding blog: ', err)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})