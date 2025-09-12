import React, { useState, useEffect } from 'react';

const Tinformation = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch('https://51acc8c88c31.ngrok-free.app/tinformation.php');
        if (response.ok) {
          const data = await response.json();
          setTutors(data); // Assuming the response is an array of tutor objects with the specified attributes
        } else {
          console.error('Failed to fetch tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tutor information:', error.message);
      }
    };

    fetchTutorData();
  }, []);

  const handleAccept = async (tutorId) => {
    try {
      const acceptedTutor = tutors.find((tutor) => tutor.id === tutorId);
      if (!acceptedTutor) {
        console.error('Tutor not found.');
        return;
      }
  
      const response = await fetch('https://51acc8c88c31.ngrok-free.app/acceptTutor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(acceptedTutor)
      });
  
      if (response.ok) {
        console.log('Tutor information accepted successfully!');
        setTutors(tutors.filter((tutor) => tutor.id !== tutorId)); // Remove the accepted tutor
      } else {
        console.error('Failed to accept tutor information:', response.statusText);
      }
    } catch (error) {
      console.error('Error accepting tutor information:', error.message);
    }
  };

  return (
    <div className="container">
      <h1>Tutor Information</h1>
      <div className="cardContainer">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="card">
            <p>Name: {tutor.name}</p>
            <p>Availability: {tutor.availability}</p>
            <p>Mobile Number: {tutor.mobileNumber}</p>
            <p>Email: {tutor.email}</p>
            <p>Location: {tutor.location}</p>
            <p>Institution: {tutor.institution}</p>
            <p>Current Subject: {tutor.currentSubject}</p>
            <button onClick={() => handleAccept(tutor.id)}>
              Accept
            </button>
          </div>
        ))}
      </div>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          width: 300px;
          height: 350px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          background-color: white;
          font-weight: bold;
          box-shadow: 0 7px 7px rgba(0, 0, 0, 0.65);
        }
      `}</style>
    </div>
  );
};

export default Tinformation;
