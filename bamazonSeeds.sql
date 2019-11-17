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
VALUES ("Boots", "Shoes", 110.50, 110);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Candle", "Decor", 12.20, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 280.80, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leggings", "Clothing", 25.65, 200);

