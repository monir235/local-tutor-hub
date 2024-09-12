import React, { useState } from 'react';

function TutorForm() {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    mobile_no: '',
    email: '',
    location: '',
    institution: '',
    current_subject: '',
    teaching_experience: '',
    amount: '', // New field
    payment_option: '' // New field
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
    fetch('addtutor.php', {
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
    <div style={{ width: '410px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
      <h2>Add New Tutor</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
        
        <label htmlFor="availability" style={{ fontWeight: 'bold' }}>Availability:</label><br />
        <input type="text" id="availability" name="availability" value={formData.availability} onChange={handleChange} required /><br />
        
        <label htmlFor="mobile_no" style={{ fontWeight: 'bold' }}>Mobile Number:</label><br />
        <input type="text" id="mobile_no" name="mobile_no" value={formData.mobile_no} onChange={handleChange} required /><br />
        
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
        
        <label htmlFor="location" style={{ fontWeight: 'bold' }}>Location:</label><br />
        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required /><br />
        
        <label htmlFor="institution" style={{ fontWeight: 'bold' }}>Institution:</label><br />
        <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} required /><br />
        
        <label htmlFor="current_subject" style={{ fontWeight: 'bold' }}>Current Subject:</label><br />
        <input type="text" id="current_subject" name="current_subject" value={formData.current_subject} onChange={handleChange} required /><br />
        
        <label htmlFor="teaching_experience" style={{ fontWeight: 'bold' }}>Teaching Experience (years):</label><br />
        <input type="number" id="teaching_experience" name="teaching_experience" value={formData.teaching_experience} onChange={handleChange} required /><br /><br />
        
        {/* New fields */}
        <label htmlFor="amount" style={{ fontWeight: 'bold' }}>Amount:</label><br />
        <select id="amount" name="amount" value={formData.amount} onChange={handleChange} required>
          <option value="">Select Amount</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select><br />

        <label htmlFor="payment_option" style={{ fontWeight: 'bold' }}>Payment Option:</label><br />
        <select id="payment_option" name="payment_option" value={formData.payment_option} onChange={handleChange} required>
          <option value="">Select Payment Option</option>
          <option value="Cash">Bikash</option>
          <option value="Card">Nagad</option>
          <option value="Card">Rocket</option>
        </select><br />
        
        <button type="submit">Submit</button>
        {showSuccessMessage && <p style={{ color: 'green' }}>  New teacher Added Successfully!!</p>} {/* Show success message */}
      </form>
    </div>
  );
}

export default TutorForm;
