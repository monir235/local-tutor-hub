import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    Student_ID: '',
    name: '',
    mobile_No: '',
    email: '',
    salary_Offer: '',
    day_per_week: '',
    Location: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    for (const key in formData) {
      if (formData[key] === '') {
        console.error(`Error: ${key} field is required.`);
        return;
      }
    }

    // Send form data to server using AJAX
    fetch('addstudent.php', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setShowSuccessMessage(true); // Show success message after successful submission
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{ width: '450px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Student_ID" style={{ fontWeight: 'bold' }}>Student ID:</label><br />
        <input type="text" id="Student_ID" name="Student_ID" value={formData.Student_ID} onChange={handleChange} required /><br />
        
        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
        
        <label htmlFor="mobile_No" style={{ fontWeight: 'bold' }}>Mobile Number:</label><br />
        <input type="text" id="mobile_No" name="mobile_No" value={formData.mobile_No} onChange={handleChange} required /><br />
        
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
        
        <label htmlFor="salary_Offer" style={{ fontWeight: 'bold' }}>Salary Offer:</label><br />
        <input type="number" id="salary_Offer" name="salary_Offer" value={formData.salary_Offer} onChange={handleChange} required /><br />
        
        <label htmlFor="day_per_week" style={{ fontWeight: 'bold' }}>Days Per Week:</label><br />
        <input type="number" id="day_per_week" name="day_per_week" value={formData.day_per_week} onChange={handleChange} required /><br />
        
        <label htmlFor="Location" style={{ fontWeight: 'bold' }}>Location:</label><br />
        <input type="text" id="Location" name="Location" value={formData.Location} onChange={handleChange} required /><br />
        
        <button type="submit">Submit</button>
        {showSuccessMessage && <p style={{ color: 'green' }}>New student Added Successfully</p>} {/* Show success message */}
      </form>
    </div>
  );
}

export default StudentForm;
