import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express();
const port = 3000

app.use(cors())
app.use(express.json());


//add new blog to list
app.post('/', async (req, res) => {
    const {title, category, content} = req.body

    try {
        const result = await pool.query('INSERT INTO list (title, catergory, content) VALUES ($1, $2, $3) RETURNING *'
        [title, category, content])
        res.json(result.rows[0])
    } catch (err) {
        console.error('Error adding contact: ', err)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})