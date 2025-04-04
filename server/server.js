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

//add a fave blog
app.post('/bookmarks', async (req, res) => {
    const { blogId } = req.body;
    try {
        await pool.query('INSERT INTO bookmarks (blog_id) VALUES ($1)', [blogId]);
        res.sendStatus(201);
    } catch (err) {
        console.error('Error adding bookmark:', err);
        res.sendStatus(500);
    }
});

//display fave blogs
app.get('/bookmarks/blogs', async (req, res) => {
    try {
        const result = await pool.query('SELECT list.* FROM bookmarks JOIN list ON bookmarks.blog_id = list.blog_id');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching bookmarks:', err);
        res.sendStatus(500);
    }
});

//remove fave blog
app.delete('/bookmarks/:blogId', async (req, res) => {
    const { blogId } = req.params;
    try {
        await pool.query('DELETE FROM bookmarks WHERE blog_id = $1', [blogId]);
        res.sendStatus(204); 
    } catch (err) {
        console.error('Error removing bookmark:', err);
        res.sendStatus(500);
    }
});

//delete a blog
app.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
  
      // Remove from bookmarks
      await client.query('DELETE FROM bookmarks WHERE blog_id = $1', [id]);
  
      // Remove from list
      await client.query('DELETE FROM list WHERE blog_id = $1', [id]);
  
      await client.query('COMMIT');
      res.sendStatus(204);
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Error deleting blog and removing from bookmarks:', err);
      res.sendStatus(500);
    } finally {
      client.release();
}
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})