BEGIN TRANSACTION;

CREATE TABLE products(
  id serial PRIMARY KEY,
  title VARCHAR(255),
  description text NOT NULL,
  price FLOAT not NULL,
  discountpercentage FLOAT DEFAULT 0,
  rating FLOAT DEFAULT 0,
  stock INTEGER,
  brand VARCHAR(255),
  category VARCHAR(255),
  orders INTEGER,
  images VARCHAR(255)[]
);

COMMIT;