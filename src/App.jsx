import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from './components/EmployeeList'
import AddEmp from './components/AddEmp'
import EditUser from './components/EditUser'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmp />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App