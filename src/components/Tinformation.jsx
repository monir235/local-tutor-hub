import React, { useState, useEffect } from 'react';

const Tinformation = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch('https://51acc8c88c31.ngrok-free.app/tinformation.php');
        if (response.ok) {
          const data = await response.json();
          setTutors(data);
        } else {
          console.error('Failed to fetch tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tutor information:', error.message);
      }
    };

    fetchTutorData();
  }, []);

  // Handle Accept button
  const handleAccept = async (tutorId) => {
    try {
      const acceptedTutor = tutors.find((tutor) => tutor.id === tutorId);
      if (!acceptedTutor) {
        console.error('Tutor not found.');
        return;
      }

      const response = await fetch('https://51acc8c88c31.ngrok-free.app/acceptTutor.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(acceptedTutor),
      });

      if (response.ok) {
        console.log(`Tutor ${tutorId} accepted successfully.`);
        alert(`Tutor ${acceptedTutor.name} accepted!`);
      } else {
        console.error('Failed to accept tutor:', response.statusText);
      }
    } catch (error) {
      console.error('Error accepting tutor:', error.message);
    }
  };

  return (
    <div>
      <h2>Tutor Information</h2>
      {tutors.length === 0 ? (
        <p>Loading tutor data...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Availability</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Location</th>
              <th>Institution</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tutors.map((tutor) => (
              <tr key={tutor.id}>
                <td>{tutor.name}</td>
                <td>{tutor.availability}</td>
                <td>{tutor.mobileNumber}</td>
                <td>{tutor.email}</td>
                <td>{tutor.location}</td>
                <td>{tutor.institution}</td>
                <td>{tutor.currentSubject}</td>
                <td>
                  <button onClick={() => handleAccept(tutor.id)}>Accept</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tinformation;
