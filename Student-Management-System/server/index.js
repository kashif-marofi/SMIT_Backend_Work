const express = require("express")
const cors = require("cors")
const {students} = require("./students")

const app = express();
// Use to access server side in Frontend
app.use(cors());
// Use to Pass data in JSON Fromate from frontend to Backend
app.use(express.json());

// Load All Students
app.get("/AllStudents" ,(req , res)=>{
    res.send(students)
})

// Add New Student:
app.post("/AllStudents" , (req , res) => {

    const newStudent = req.body;

    const lastId = students.length > 0 ? students[students.length - 1].id : 0;
    newStudent.id = lastId + 1;

    students.push(newStudent);
    res.status(201).json(newStudent);
})

// Delete Student
app.delete("/AllStudents/:id", (req, res) => {
  const id = req.params.id;

  students = students.filter((s) => s.rollNumber !== id);

  res.json({ message: "Student deleted successfully", id });
});

// Run Server on Port
app.listen(3000 , ()=>{
    console.log("The Server in running on Port 3000");
})