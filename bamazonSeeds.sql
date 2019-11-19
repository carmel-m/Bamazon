DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(5,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dress", "Clothing", 79.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boots", "Shoes", 130.50, 110);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Candle", "Decor", 12.20, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 280.80, 240);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leggings", "Clothing", 25.65, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 7.99, 410);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mirror", "Decor", 120.00, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dictionary", "Books", 29.90, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Collar", "Pets", 14.50, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Espadrilles", "Shoes", 105.20, 130);

SELECT * FROM bamazon_DB.products;

