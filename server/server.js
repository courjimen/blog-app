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

//show the individual blog
app.get('/blogs/:id', async(req, res) => {
    const { id } = req.params

    try {
        const result = await pool.query('SELECT * FROM list WHERE blog_id = $1', [id])

        if(result.rows.length > 0) {
            res.json(result.rows[0])
        } else {
            res.status(404).json({message: 'Blog not found'})
        }
    } catch (err) {
        console.error('Error displaying blog:', err)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})