const Todo = require("../models/todo");

// Create todo controller function
const createTodo = async (req, res) => {
  console.log("Hello MF");

  const todo = new Todo(req.body);
  await todo
    .save()
    .then(() => {
      res.status(201).send({
        success: true,
        message: "Todo Creation successful",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
// Create todo controller function
const getTodos = async (req, res) => {
  Todo.find()
    .then((data) => {
      res.status(200).send({
        success: true,
        todos: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    });
};

module.exports = { createTodo ,getTodos};
