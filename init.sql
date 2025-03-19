CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (name, password) VALUES
('admin', 'admin'),
('user0', 'user0');