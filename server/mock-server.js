import express from 'express'
import cors from 'cors'

import { readFile } from "fs/promises";

const app = express();
const port = 3000

app.use(cors())
app.use(express.json());

let mockBlogs = JSON.parse(await readFile("./mock-data/blog-posts.json")
  .then(buffer => buffer.toString()));

let mockSubbies = JSON.parse(await readFile("./mock-data/subbies.json")
  .then(buffer => buffer.toString()));

let mockBookmarks = JSON.parse(await readFile("./mock-data/bookmarks.json")
  .then(buffer => buffer.toString()));


console.log(mockBlogs);
/*
blog_id,
title,
category,
content,
creation_date,
*/


//display blogs
app.get('/blogs', async (req, res) => {
  res.send(mockBlogs);
})

//add new blog to list
app.post('/blogs', async (req, res) => {
  const last_blog_id = mockBlogs.at(-1)?.blog_id ?? 0;
  const { title, category, content } = req.body
  const creation_date = new Date(Date.now()).toISOString();
  const blog_id = last_blog_id + 1;
  const blog = { title, category, content, blog_id, creation_date };
  mockBlogs.push(blog);
  res.send(blog);
})

//show the individual blog
app.get('/blogs/:id', async (req, res) => {
  const blog = mockBlogs.find(blog => blog.blog_id === Number(req.params.id));
  res.send(blog);
})

//add a fave blog
app.post('/bookmarks', async (req, res) => {

});

//display fave blogs
app.get('/bookmarks/blogs', async (req, res) => {
  const blogs = mockBlogs.filter(blog =>
    mockBookmarks.map(bookmark => bookmark.blog_id)
      .includes(blog.blog_id));
  res.send(blogs);
});

//remove fave blog
app.delete('/bookmarks/:blogId', async (req, res) => {
  
});

//delete a blog
app.delete('/blogs/:id', async (req, res) => {
  mockBlogs = mockBlogs.filter(blog => blog.blog_id !== Number(req.params.id));
  
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})