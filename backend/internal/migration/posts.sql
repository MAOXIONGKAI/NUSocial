CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    tags VARCHAR(255)[] DEFAULT '{}',
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    upvotes VARCHAR(255)[] DEFAULT '{}',
    downvotes VARCHAR(255)[] DEFAULT '{}',
    comments BIGINT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);
