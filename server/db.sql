--STEP 1--
CREATE DATABASE blog;

--STEP 2--
\c blog;

--STEP 3--
CREATE TABLE subbies (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL
);

--STEP 4--
CREATE TABLE list (
    blog_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT,
    content TEXT,
    creation_date timestamp default now()
);

--STEP 5--
CREATE TABLE bookmarks (
    bookmark_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES subbies(user_id) 
        ON DELETE CASCADE,
    blog_id INTEGER REFERENCES list(blog_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE, 
    UNIQUE(user_id, blog_id)
);

--STEP 6--