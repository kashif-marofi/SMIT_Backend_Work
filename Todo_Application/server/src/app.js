const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const { connectDB } = require("./config/database");
const { Todo } = require("./model/todoSchema");

app.post("/addTodo", async (req, res) => {
  try {
    const data = req.body;
    console.log("Data After adding" , data);

    const user = await Todo(data); // FIXED
    await user.save();

    res.send({ message: "Todo created successfully", user });
  } catch (error) {
    res.send({ message: "Error creating Todo", error });
  }
});

app.get("/getTodos", async (req, res) => {
  try {
    const users = await Todo.find({});
    res.send({ message: "Todos fetched successfully", users });
  } catch (error) {
    res.send({ message: "Error fetching todos", error });
  }
});

connectDB()
  .then(() => {
    console.log("Connected successfully to Database using Mongoose");

    app.listen(3000, () => {
      console.log("Server is Listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error Connected to Database", error); // FIXED
  });
