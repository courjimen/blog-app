import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express();
const port = 3000

app.use(cors())
app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})