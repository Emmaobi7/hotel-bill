'use client';
import React, { useState } from 'react';

export default function Attendance() {
  const [date, setDate] = useState('');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', present: false },
    { id: 2, name: 'Jane Smith', present: false },
    { id: 3, name: 'Umar Sani', present: false },
    { id: 4, name: 'Marta Zainab', present: false },
    { id: 5, name: 'Aisha Yususf', present: false },
    { id: 6, name: 'Mary Mara', present: false },
    { id: 7, name: 'Anne Bary', present: false },

  ]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleAttendanceChange = (index, event) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].present = event.target.checked;
    setEmployees(updatedEmployees);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = () => {
    // Simulate saving the attendance
    console.log('Attendance:', employees);
    console.log('Date:', date);
    setAttendanceMarked(true);
  };

  return (
    <div className="attendance-container">
      <h2>Employee Attendance</h2>
      <div className="attendance-header">
        <label htmlFor="attendanceDate">Select Date:</label>
        <input
          type="date"
          id="attendanceDate"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="employee-list">
        {employees.map((employee, index) => (
          <div key={employee.id} className="employee-item">
            <label>
              <input
                type="checkbox"
                checked={employee.present}
                onChange={(e) => handleAttendanceChange(index, e)}
              />
              {employee.name}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit Attendance
      </button>

      {attendanceMarked && (
        <div className="attendance-summary">
          <h3>Attendance Summary</h3>
          <p>Date: {date}</p>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                {employee.name} -{' '}
                {employee.present ? 'Present' : 'Absent'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
