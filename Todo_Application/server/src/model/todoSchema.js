// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const todoSchema = new Schema(
//   {
//     title: {
//       type: String,
//     //   required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       default: "",
//       trim: true,
//     },
//     isCompleted: {
//       type: Boolean,
//       default: false,
//     },
//     dueDate: {
//       type: Date,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Todo = mongoose.model("Todo", todoSchema);

// module.exports = {
//   Todo,
// };




const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      default: "Untitled Todo", // testing friendly
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
    strict: false, // testing friendly: allows extra fields
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
