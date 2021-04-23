const router = require("express").Router();
const { Todos } = require("../db/models");

// matches GET requests to /api/template/
router.get("/", async function (req, res, next) {
  try {
    const todos = await Todos.findAll();
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

router.get("/:todoId", async function (req, res, next) {
  try {
    const foundTodo = await Todos.findByPk(req.params.todoId);
    // const updateTodo = await foundTodo.update(req.body)
    res.json(foundTodo);
  } catch (error) {
    next(error);
  }
});
// matches POST requests to /api/template/
router.post("/", function (req, res, next) {
  /* etc */
});
// matches PUT requests to /api/template/:templateId
router.put("/:todoId", async function (req, res, next) {
  try {
    const foundTodo = await Todos.findByPk(req.params.todoId);
    const updateTodo = await foundTodo.update(req.body);
    res.json(updateTodo);
  } catch (error) {
    next(error);
  }
});
// matches DELETE requests to /api/template/:templateId
router.delete("/:puppyId", function (req, res, next) {
  /* etc */
});

module.exports = router;
