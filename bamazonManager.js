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
    promptUser();
  
  });

  function promptUser() {
      inquirer.prompt( 
          {
          name: "chooseOption",
          type: "list",
          message: "Which option..",
          choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }).then (function (userResponse) {
            //SWITCH STATEMENT 
            // switch(userResponse.chooseOption) 
        });
  }