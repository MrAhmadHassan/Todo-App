const express = require('express');
const { createTodo, getTodos } = require('../controllers/todo');
const router = express.Router();


router.post("/todos",createTodo);
router.get("/todos",getTodos);

module.exports = router;