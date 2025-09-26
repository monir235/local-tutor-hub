import React, { useState } from 'react';

function Home() {
  const [hoveredCard, setHoveredCard] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const cardStyle = (cardName) => ({
    width: '330px',
    margin: '15px',
    textAlign: 'center',
    backgroundColor: hoveredCard === cardName ? '#60a5fa' : '#93c5fd',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    boxShadow: hoveredCard === cardName ? '0 8px 20px rgba(0,0,0,0.25)' : '0 4px 12px rgba(0,0,0,0.1)',
  });

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };

  const tutorInfoCardStyle = {
    ...cardStyle('tutorInfoCard'),
    width: '600px',
    padding: '20px',
  };

  const bookingListData = ["1. Sirajum Monir", "2. Raiqul Islam", "3. Rishad Hossain"];
  const assignTeacherListData = ["1. Sabbir Hossain", "2. Rakib Islam", "3. Sadman Hasan"];
  const studentListData = ["1. Mohaimin", "2. Nishad", "3. Omin Gupta"];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredResults = tutorInfoData.filter((tutor) =>
        tutor.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const tutorInfoData = [
    { name: 'Sirajum Monir', email: 'monir@gmail.com', contact_number: '1234567890', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '3' },
    { name: 'Raiqul Islam', email: 'raiqul@gmail.com', contact_number: '9876543210', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '4' },
    { name: 'Rishad Hossain', email: 'rishad@gmail.com', contact_number: '4567890123', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '5' }
  ];

  return (
    <div style={{ position: 'relative', paddingBottom: '130px', fontFamily: 'Inter, sans-serif', background: 'linear-gradient(to right, #e0f2fe, #f0f9ff)', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '30px' }}>
        {/* Assign Teacher List */}
        <div
          style={cardStyle('assignTeacherList')}
          onMouseEnter={() => setHoveredCard('assignTeacherList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/bolla.jpg" alt="Assign Teacher List" style={imageStyle} />
          <h2 style={{ fontWeight: '600', fontSize: '1.4em', margin: '15px 0' }}>Assign Teacher List</h2>
          {assignTeacherListData.map((name, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>{name}</div>
          ))}
        </div>

        {/* Student List */}
        <div
          style={cardStyle('studentList')}
          onMouseEnter={() => setHoveredCard('studentList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/student.jpg" alt="Student List" style={imageStyle} />
          <h2 style={{ fontWeight: '600', fontSize: '1.4em', margin: '15px 0' }}>Student List</h2>
          {studentListData.map((name, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>{name}</div>
          ))}
        </div>

        {/* Booking List */}
        <div
          style={cardStyle('bookingList')}
          onMouseEnter={() => setHoveredCard('bookingList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/booking.jpeg" alt="Booking List" style={imageStyle} />
          <h2 style={{ fontWeight: '600', fontSize: '1.4em', margin: '15px 0' }}>Booking List</h2>
          {bookingListData.map((name, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>{name}</div>
          ))}
        </div>
      </div>

      {/* Search Tutor */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="🔍 Search for tutors..."
          style={{
            margin: '20px',
            padding: '12px 18px',
            borderRadius: '30px',
            border: '1px solid #ccc',
            width: '300px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            fontSize: '1em',
          }}
        />
      </div>

      {searchResults.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div
            style={tutorInfoCardStyle}
            onMouseEnter={() => setHoveredCard('tutorInfoCard')}
            onMouseLeave={() => setHoveredCard('')}
          >
            <h2 style={{ marginBottom: '15px', fontSize: '1.5em', fontWeight: '700' }}>Tutor Information</h2>
            {searchResults.map((tutor, index) => (
              <div key={index} style={{ marginBottom: '20px', textAlign: 'left', padding: '10px 20px', background: '#f9fafb', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '5px', fontSize: '1.2em', color: '#1e3a8a' }}>{tutor.name}</h3>
                <p>Email: {tutor.email}</p>
                <p>Contact Number: {tutor.contact_number}</p>
                <p>Address: {tutor.address}</p>
                <p>University: {tutor.university}</p>
                <p>Department: {tutor.department}</p>
                <p>Semester: {tutor.semester}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          backgroundColor: '#1e3a8a',
          color: '#ffffff',
          textAlign: 'center',
          padding: '20px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.2)',
        }}
      >
        <div>
          <a href="https://www.facebook.com/sirajummonir.monir.5" target="_blank" rel="noopener noreferrer">
            <img src="/fb1.png" alt="Facebook" style={{ width: '30px', margin: '0 8px' }} />
          </a>
          <a href="https://twitter.com/ayon_chayo33456" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpeg" alt="Twitter" style={{ width: '30px', margin: '0 8px' }} />
          </a>
          <a href="https://www.instagram.com/monir_chayon/" target="_blank" rel="noopener noreferrer">
            <img src="/insta.jpeg" alt="Instagram" style={{ width: '30px', margin: '0 8px' }} />
          </a>
          <a href="https://github.com/monir235" target="_blank" rel="noopener noreferrer">
            <img src="/git.png" alt="GitHub" style={{ width: '30px', margin: '0 8px' }} />
          </a>
          <a href="https://web.cu.ac.bd/v2/" target="_blank" rel="noopener noreferrer">
            <img src="/Culogo.jpeg" alt="CU" style={{ width: '30px', margin: '0 8px' }} />
          </a>
        </div>
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          © 2024 Sirajum Monir | University of Chittagong
        </div>
      </div>
    </div>
  );
}

export default Home;
