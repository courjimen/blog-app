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
--STEP 4A--
INSERT INTO list (title, category, content) VALUES 
('New Blog Post', 'Inspirational', 'Even though your fave setting isn''t completely working yet, you can figure it out! All it takes is a good nights rest!'),
('Blog 3', 'Peace and Protection', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
('Love Conquers All 💕', 'Inspirational', 'LOVE = Kind Patient Hopeful Faithful Enduring Persistent LOVE != Demanding Irritable Boastful Jealous Proud Rude This is the agape love that Jesus wants us to share. We could spend an entire blog talking about each of these attributes, but I''m only going to focus on one, being kind. If we''re honest, a lot of us aren''t kind; whether it be to ourselves, our friends or family, our partners, whoever. Humanity has a natural proclivity to evil. It literally goes against our nature to be kind to others. Loving yourself, let alone other people, is something that should be simple but oftentimes it''s not because we forget to root our love in God. When your “love” is based on approval, materialism, or worldly things, it makes it conditional. Transactional. The one thing love should never do is take. I''ve learned over the years that true unconditional love is rooted in kindness. Now, that doesn''t mean you give, give, and give without having boundaries. There''s a difference between being kind and letting people take advantage of you. When I think about pure love, I think about Jesus’s sacrifice一 what he gave to us.');

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