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
    amount: '',
    payment_option: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === '') {
        console.error(`Error: ${key} field is required.`);
        return;
      }
    }

    fetch('addtutor.php', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setShowSuccessMessage(true);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6EE7B7, #3B82F6, #9333EA)',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        animation: 'fadeIn 1s ease'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '1.5rem',
          color: '#333'
        }}>
          Add New Tutor
        </h2>

        <form onSubmit={handleSubmit}>
          {[
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'availability', label: 'Availability', type: 'text' },
            { id: 'mobile_no', label: 'Mobile Number', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'location', label: 'Location', type: 'text' },
            { id: 'institution', label: 'Institution', type: 'text' },
            { id: 'current_subject', label: 'Current Subject', type: 'text' },
            { id: 'teaching_experience', label: 'Teaching Experience (years)', type: 'number' }
          ].map(field => (
            <div key={field.id} style={{ marginBottom: '15px' }}>
              <label
                htmlFor={field.id}
                style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  fontSize: '14px',
                  outline: 'none',
                  transition: '0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
            </div>
          ))}

          {/* Amount dropdown */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="amount" style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Amount</label>
            <select
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            >
              <option value="">Select Amount</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="400">400</option>
            </select>
          </div>

          {/* Payment Option */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="payment_option" style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Payment Option</label>
            <select
              id="payment_option"
              name="payment_option"
              value={formData.payment_option}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            >
              <option value="">Select Payment Option</option>
              <option value="Bikash">Bikash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(90deg,#3B82F6,#9333EA)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Submit
          </button>

          {showSuccessMessage && (
            <p style={{ marginTop: '15px', textAlign: 'center', color: 'green', fontWeight: 'bold' }}>
              ✅ New teacher Added Successfully!!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default TutorForm;
