const TodoService = require("../services/TodoService");


exports.get = (req, res) => {
  const id = req.params.id;
    console.log("Get");
  res.send(`OK Get id=${id}`);
};

exports.getAll = async (req, res) => {
  try{
  const todos = await TodoService.getAllTodos();

  if(!todos){
    return res.status(404).json("There are no todos published yet!");
  }
  res.json(todos);
} catch (err) {
  return res.status(500).json({error: err});
}
};

exports.add = async (req, res) => {
  try {
    const createdTodo = await TodoService.addTodo(req.body);
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).json({error: error});
  }
};

exports.update = (req, res) => {
  console.log("Update");
  res.send("OK Update");
};

exports.delete = (req, res) => {
  console.log("Delete");
  res.send("OK Delete");
};