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

    for (const key in formData) {
      if (formData[key] === '') {
        console.error(`Error: ${key} field is required.`);
        return;
      }
    }

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
        setShowSuccessMessage(true);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.replace(/_/g, ' ')}:</label>
            <input
              type={key.includes('email') ? 'email' : key.includes('salary') || key.includes('day') ? 'number' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit">Submit</button>
        {showSuccessMessage && <p className="success-message">New student added successfully!</p>}
      </form>

      <style jsx>{`
        .form-container {
          width: 400px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          transition: transform 0.3s;
        }
        .form-container:hover {
          transform: translateY(-5px);
        }
        h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #6a11cb;
          font-size: 1.8rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        label {
          margin-bottom: 6px;
          font-weight: 600;
          color: #333;
        }
        input {
          padding: 12px 15px;
          border-radius: 12px;
          border: 1px solid #ccc;
          font-size: 1rem;
          transition: all 0.3s;
        }
        input:focus {
          outline: none;
          border-color: #6a11cb;
          box-shadow: 0 0 8px rgba(106,17,203,0.3);
        }
        button {
          width: 100%;
          padding: 14px;
          border-radius: 15px;
          border: none;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
        .success-message {
          margin-top: 15px;
          text-align: center;
          color: #28a745;
          font-weight: 600;
        }
        @media (max-width: 450px) {
          .form-container {
            width: 90%;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default StudentForm;
