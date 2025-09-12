import React, { useState } from 'react';

const TutorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    mobileNumber: '',
    email: '',
    location: '',
    institution: '',
    currentSubject: '',
    teachingExperience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://51acc8c88c31.ngrok-free.app/tutor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Reset form after submission
        setFormData({
          name: '',
          availability: '',
          mobileNumber: '',
          email: '',
          location: '',
          institution: '',
          currentSubject: '',
          teachingExperience: ''
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{ border: '2px solid #ddd', borderRadius: '5px', padding: '20px', width: '300px', margin: '0 auto' }}>
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h2>Tutor Form</h2>
    </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '30px' }}>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Availability:</label>
          <input 
            type="text" 
            name="availability" 
            value={formData.availability} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Mobile Number:</label>
          <input 
            type="tel" 
            name="mobileNumber" 
            value={formData.mobileNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Location:</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Institution:</label>
          <input 
            type="text" 
            name="institution" 
            value={formData.institution} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Current Subject:</label>
          <input 
            type="text" 
            name="currentSubject" 
            value={formData.currentSubject} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label>Teaching Experience:</label>
          <input 
            type="text" 
            name="teachingExperience" 
            value={formData.teachingExperience} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>Submit</button>
      </form>
    </div>
  );
};

export default TutorForm;
