var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.SQL_PASS,
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryProducts();
  // promptUser();
});

function queryProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("-----------------------------------");
    console.log("WELCOME TO THE MARKETPLACE!");
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price);
    }
    console.log("-----------------------------------");
  });
  // promptUser();
}



function promptUser() {
  inquirer
  .prompt(
    {
    name: "item",
    type: "input",
    message: "What would you like to buy? Enter the item's ID # or press Q to exit.",
  })
  .then()

  
  
  // {
  //   name: "quantity",
  //   type: "input",
  //   message: "How many would you like to buy?"
  // }
  

}

connection.end();


