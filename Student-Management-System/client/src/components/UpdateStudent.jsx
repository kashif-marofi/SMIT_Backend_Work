import { useState } from "react";

export default function UpdateStudentUI() {
  const [formData, setFormData] = useState({
    fullName: "Ali Khan",
    rollNumber: "RN1001",
    className: "BSCS 1st",
    email: "ali@example.com",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Update Student
        </h2>

        <form className="grid grid-cols-1 gap-6">
          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter student name"
            />
          </div>

          {/* Roll Number */}
          <div>
            <label className="text-gray-700 font-medium">Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter roll number"
            />
          </div>

          {/* Class */}
          <div>
            <label className="text-gray-700 font-medium">Class</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter class"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          {/* Update Button */}
          <div>
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-md transition"
            >
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

