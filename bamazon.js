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

// DISPLAY PRODUCTS
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
    promptUser();
  });
}


// ASK USER WHICH ITEM THEY WANT TO BUY
function promptUser() {
  inquirer
    .prompt(
      {
        name: "chooseItem",
        type: "input",
        message: "What would you like to buy? Enter the item's ID # or press Q to exit.",
      })
    .then(function (userResponse) {

      // need to save answer to a variable to use later?
      // check if ID matches an ID in the db

      if (userResponse.chooseItem === "Q" || userResponse.chooseItem === "q") {
        connection.end();
      } else {
        howMany();
      }
    });
}


// ASK USER HOW MANY THEY WANT TO BUY
function howMany() {
  // query the database for all items available
  connection.query("SELECT * FROM products WHERE id = 'userResponse'", function (err, res) {
    if (err) throw err;
    console.log(res);

    if (res.length > 0) {
      inquirer
        .prompt(
          {
            name: "chooseQuant",
            type: "input",
            message: "How many would you like to buy?",
            validate: function (value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            }
          })
        .then(function (answer) {
          var chosenItem;
          for (var i = 0; res.length; i++) {
            if (res[i].id === answer.chooseQuant) {
              chosenItem == res[i];
            }
          }
        });
    } else {
      console.log("That item doesn't exist.");
      promptUser();
    }
 
  });
  connection.end();
}


// check if length of response is greater than 0

    // inquirer
    //   .prompt(
    //     {
    //       name: "chooseQuant",
    //       type: "input",
    //       message: "How many would you like to buy?",
    //       validate: function (value) {
    //         if (isNaN(value) === false) {
    //           return true;
    //         }
    //         return false;
    //       }
    //     })
    //   .then(function (answer) {
    //     var chosenItem;
    //     for (var i = 0; res.length; i++) {
    //       if (res[i].id === answer.chooseQuant) {
    //         chosenItem == res[i];
    //       }
    //     }

    //   });