'use client';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, removeEmployee } from '../redux/employeeSlice';
import { useState } from 'react';

export default function Employees() {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const [employeeName, setEmployeeName] = useState('');
  const [role, setRole] = useState('');

  const handleAddEmployee = () => {
    if (!employeeName || !role) {
      alert("Please enter a name and select a role.");
      return;
    }

    const newEmployee = { id: Date.now(), name: employeeName, role: role };
    dispatch(addEmployee(newEmployee));
    setEmployeeName('');
    setRole('');
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className='main-content'>
      <h2>Employee Management</h2>
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Enter employee name"
      />
      <label htmlFor="roleSelect">Select Role:</label>
      <select id="roleSelect" value={role} onChange={handleRoleChange}>
        <option value="">--Select a role--</option> {/* Default option */}
        <option value="manager">Manager</option>
        <option value="employee">Employee</option>
      </select>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name}  <strong>{employee.role}</strong> 
            <button onClick={() => dispatch(removeEmployee(employee.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
