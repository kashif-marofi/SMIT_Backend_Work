import "./App.css";
import { BrowserRouter, Routes, Route, data } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateStudent from "./components/UpdateStudent";
import CreateStudent from "./components/CreateStudent";
import AllStudents from "./components/AllStudents";
import { useEffect } from "react";
import { useState } from "react";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllStudents />}></Route>
        <Route path='/create' element={<CreateStudent />}></Route>
        <Route path='/update' element={<UpdateStudent />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
