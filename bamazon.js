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

});

// DISPLAY PRODUCTS
function queryProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("-----------------------------------");
    console.log("WELCOME TO THE MARKETPLACE!");
    console.log("-----------------------------------");

    // FIX THIS - MAKE TABLE DISPLAY BETTER
    console.table(res);
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
      if (userResponse.chooseItem === "Q" || userResponse.chooseItem === "q") {
        connection.end();
      } else {
        howMany(userResponse.chooseItem);
      }
    });
}

function updateQuant(userResponse, newQuant) {
  connection.query("UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newQuant
      },
      {
        id: userResponse
      }
    ],
    function (err, res) {
      if (err) throw err;
      queryProducts();
    })
}


// ASK USER HOW MANY THEY WANT TO BUY
function howMany(userResponse) {

  connection.query("SELECT * FROM products WHERE id = " + userResponse, function (err, res) {
    if (err) throw err;
    console.log(res);
    var quantity = res[0].stock_quantity;

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
          if (answer.chooseQuant > quantity) {
            console.log("Sorry, we only have " + quantity + " in stock right now.")

          } else {
            var newQuant = (quantity - answer.chooseQuant);
            console.log(newQuant);
            console.log("success message");
            updateQuant(userResponse, newQuant);

            var totalCost = (res[0].price * answer.chooseQuant)
            console.log("Your total cost is: " + totalCost + " .");
          }

        });
    } else {
      console.log("That item doesn't exist.");
      promptUser();
    }

  });
  // connection.end();
}



