import { useState } from "react";
import { data, Link } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";
import { useEffect } from "react";
import CreateStudent from "./CreateStudent";
import axios from "axios";

export default function AllStudents() {
const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/AllStudents");
      // depending on backend response shape:
      setStudents(res.data.students || res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStudentAdded = (newStudent) => {
    setStudents(prev => [...prev, newStudent]);
  };

  const [loading] = useState(false); 
  
 const handleDelete = () => {
  const confirmed = window.confirm("Are You sure you want to delete this Student?");
  if (!confirmed) return;

  fetch("http://localhost:3000/AllStudents/:id", {   // <-- FIXED ROUTE
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to delete student - Route not found");
      }
      return res.json();
    })
    .then((data) => {
      alert("Student Deleted Successfully");
      console.log(data);
    })
    .catch((err) => console.error(err));
};


  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Students Management System
          </h1>

          <Link
            to="/create"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            + Add New Student
          </Link>
        </div>

        {/* Main Table Section */}
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          {loading ? (
            <div className="text-center text-xl font-semibold text-gray-500 py-10">
              Loading Students...
            </div>
          ) : students.length === 0 ? (
            <div className="text-center text-lg text-gray-500 py-10">
              No students found. Add a new student.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white text-left">
                    <th className="p-3">Name</th>
                    <th className="p-3">Roll No</th>
                    <th className="p-3">Class</th>
                    <th className="p-3">Email</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b hover:bg-gray-100 transition"
                    >
                      <td className="p-3">{student.fullName}</td>
                      <td className="p-3">{student.rollNumber}</td>
                      <td className="p-3">{student.className}</td>
                      <td className="p-3">{student.email}</td>

                      <td className="p-3 flex justify-center gap-3">
                        {/* Update Button */}
                        <Link
                          to="/update"
                          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                        >
                          Update
                        </Link>

                        {/* Delete Button (just UI, no functionality) */}
                        <button
                          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition cursor-not-allowed"
                           onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
