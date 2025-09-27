import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initial structure for the marks input table
const initialMarksData = [
  { subject: 'English', marks: '', grade: '' },
  { subject: 'Maths', marks: '', grade: '' },
  { subject: 'Science', marks: '', grade: '' },
  { subject: 'Social', marks: '', grade: '' },
];

function EnterMarks() {
  const [marks, setMarks] = useState(initialMarksData);
  const [selectedClass, setSelectedClass] = useState('');
  const [studentSearchTerm, setStudentSearchTerm] = useState('');

  // Handle changes in the marks/grade table
  const handleMarksChange = (index, field, value) => {
    const newMarks = [...marks];
    
    // Ensure marks are treated as numbers and respect min/max
    if (field === 'marks') {
        const numValue = parseInt(value, 10);
        if (isNaN(numValue) || numValue < 0 || numValue > 100) {
            // Allow empty string but prevent invalid numbers
            newMarks[index][field] = value === '' ? '' : newMarks[index][field];
        } else {
            newMarks[index][field] = numValue;
        }
    } else {
        newMarks[index][field] = value;
    }

    setMarks(newMarks);
  };

  // Calculate the total marks
  const calculateTotal = () => {
    return marks.reduce((total, item) => {
      const mark = parseFloat(item.marks);
      return total + (isNaN(mark) ? 0 : mark);
    }, 0);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Class:', selectedClass);
    console.log('Marks Data:', marks);
    alert('Marks Submitted (Check console for data)');
    // Add logic to save data to a backend
  };

  // Handle cancel action (e.g., clear form or navigate back)
  const handleCancel = () => {
    setMarks(initialMarksData.map(item => ({ ...item, marks: '', grade: '' })));
    setSelectedClass('');
    setStudentSearchTerm('');
    // Optionally: navigate to another page
  };

  return (
    <div className="container-fluid">
      {/* Page Title - Consistent with other components (e.g., Assign Homework) */}
      <h2 className="mb-4 text-center text-md-start fw-bold" style={{ color: "#e63946" }}>Enter Marks</h2>

      {/* Main Card Container - Consistent styling (shadow-sm, rounded) */}
      <div className="bg-white p-4 p-md-5 shadow-sm rounded">
        
        {/* Header (Search and Class Dropdown) */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            {/* Search Student Input */}
            <div className="d-flex align-items-center border p-2 rounded w-100" style={{ maxWidth: '300px', border: "2px solid #e63946" }}>
              {/* Note: Requires a Bootstrap Icon Library (like Bootstrap Icons or FontAwesome) for the search icon */}
              <input
                type="text"
                className="form-control border-0 p-0 small-text"
                placeholder="search student"
                value={studentSearchTerm}
                onChange={(e) => setStudentSearchTerm(e.target.value)}
                style={{ outline: 'none' }}
              />
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            {/* Select Class Dropdown - Using consistent red border */}
            <select
              className="form-select w-auto d-inline-block small-text"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              style={{ border: "2px solid #e63946", borderRadius: "0px" }}
            >
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="9">Class 9</option>
            </select>
          </div>
        </div>

        {/* Content Layout (Student List and Marks Table) */}
        <div className="row">
          
          {/* Student List Area (Left Column in Design) */}
          <div className="col-md-6 border-end pe-md-5">
            <div className="mb-4">
              <h5 className="text-danger fw-bold">Students List</h5>
            </div>
            
            <form>
                {/* Header Row */}
                <div className="row g-3 align-items-center mb-3 border-bottom pb-2">
                    <div className="col-4 fw-bold small-text">Id</div>
                    <div className="col-4 fw-bold small-text">Student Name</div>
                    <div className="col-4 fw-bold small-text text-center">Action</div>
                </div>

                {/* Example Student Row */}
                <div className="row g-3 align-items-center py-2 border-bottom">
                    <div className="col-4 small-text">110</div>
                    <div className="col-4 small-text">Alice Johnson</div>
                    <div className="col-4 text-center">
                        <button type="button" className="btn btn-danger btn-sm px-3 small-text">
                            Marks
                        </button>
                    </div>
                </div>
                {/* Add more student rows here */}
            </form>
            
          </div>

          {/* Marks Entry Table (Right Column in Design) */}
          <div className="col-md-6 ps-md-5">
            <div className="table-responsive">
              <table className="table table-bordered text-center small-text">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="fw-bold">Subject</th>
                    <th scope="col" className="fw-bold">Marks (Max 100)</th>
                    <th scope="col" className="fw-bold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {marks.map((item, index) => (
                    <tr key={index}>
                      <td className="fw-semibold">{item.subject}</td>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm text-center border-0 p-0 small-text"
                          value={item.marks}
                          onChange={(e) => handleMarksChange(index, 'marks', e.target.value)}
                          min="0"
                          max="100"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0 p-0 small-text"
                          value={item.grade}
                          onChange={(e) => handleMarksChange(index, 'grade', e.target.value.toUpperCase())}
                          maxLength="2"
                        />
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr>
                    <td className="fw-bold">Total</td>
                    <td className="fw-bold">{calculateTotal()}</td>
                    <td></td> {/* Grade column is empty for Total */}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="text-end mt-4">
              <button
                type="button"
                className="btn btn-outline-danger me-2 small-text"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-danger small-text"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterMarks;