import React, { useState, useEffect } from 'react';

const AcceptTutor = () => {
  const [acceptedTutors, setAcceptedTutors] = useState([]);

  useEffect(() => {
    const fetchAcceptedTutors = async () => {
      try {
        const response = await fetch('http://localhost/redox.php');
        if (response.ok) {
          const data = await response.json();
          setAcceptedTutors(data);
        } else {
          console.error('Failed to fetch accepted tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching accepted tutor information:', error.message);
      }
    };

    fetchAcceptedTutors();
  }, []);

  return (
    <div className="container">
      <h1>Accepted Tutors</h1>
      <div className="cardContainer">
        {acceptedTutors.map((tutor) => (
          <div key={tutor.id} className="card">
            <p>Name: {tutor.name}</p>
            <p>Availability: {tutor.availability}</p>
            <p>Mobile Number: {tutor.mobileNumber}</p>
            <p>Email: {tutor.email}</p>
            <p>Location: {tutor.location}</p>
            <p>Institution: {tutor.institution}</p>
            <p>Current Subject: {tutor.currentSubject}</p>
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
        }
      `}</style>
    </div>
  );
};

export default AcceptTutor;
