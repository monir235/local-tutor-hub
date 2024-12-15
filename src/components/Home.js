import React, { useState } from 'react';

function Home() {
  const [hoveredCard, setHoveredCard] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Used for storing search results

  const cardStyle = (cardName) => ({
    width: '330px',
    margin: '10px',
    textAlign: 'center',
    backgroundColor: hoveredCard === cardName ? 'skyblue' : 'lightblue',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    overflow: 'hidden',
  });

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  const tutorInfoCardStyle = {
    ...cardStyle('tutorInfoCard'),
    width: '600px',
  };

  const bookingListData = ["1. Sirajum Monir", "2. Raiqul Islam", "3. Rishad Hossain"];
  const assignTeacherListData = ["1. Sabbir Hossain", "2. Rakib Islam", "3. Sadman Hasan"];
  const studentListData = ["1. Mohaimin", "2. Nishad", "3. Omin Gupta"];

  // Handle search input change and fetch or filter results based on the search term
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Example: simulate a search by filtering data (You can replace it with an API call if needed)
    if (value) {
      // Filtering data based on search term, for example:
      const filteredResults = tutorInfoData.filter((tutor) => 
        tutor.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]); // Clear search results if no input
    }
  };

  const tutorInfoData = [
    { name: 'Sirajum Monir', email: 'monir@gmail.com', contact_number: '1234567890', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '3' },
    { name: 'Raiqul Islam', email: 'raiqul@gmail.com', contact_number: '9876543210', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '4' },
    { name: 'Rishad Hossain', email: 'rishad@gmail.com', contact_number: '4567890123', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '5' }
  ];

  return (
    <div style={{ position: 'relative', paddingBottom: '130px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Cards for Assign Teacher List, Student List, and Booking List */}
        <div
          style={cardStyle('assignTeacherList')}
          onMouseEnter={() => setHoveredCard('assignTeacherList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/bolla.jpg" alt="Assign Teacher List" style={imageStyle} />
          <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Assign Teacher List</h2>
          {assignTeacherListData.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
        <div
          style={cardStyle('studentList')}
          onMouseEnter={() => setHoveredCard('studentList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/student.jpg" alt="Student List" style={imageStyle} />
          <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Student List</h2>
          {studentListData.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
        <div
          style={cardStyle('bookingList')}
          onMouseEnter={() => setHoveredCard('bookingList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/booking.jpeg" alt="Booking List" style={imageStyle} />
          <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Booking List</h2>
          {bookingListData.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
      </div>

      {/* Search and Display Tutor Information */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for tutors..."
        style={{ margin: '20px', padding: '5px' }}
      />

      {searchResults.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div
            style={tutorInfoCardStyle}
            onMouseEnter={() => setHoveredCard('tutorInfoCard')}
            onMouseLeave={() => setHoveredCard('')}
          >
            <h2>Tutor Information</h2>
            {searchResults.map((tutor, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <h3>{tutor.name}</h3>
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

      {/* Footer section */}
      <div
        style={{
          backgroundColor: '#4682B4',
          color: '#000000',
          textAlign: 'center',
          padding: '20px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
        }}
      >
        {/* Social Links */}
        <a
          href="https://www.facebook.com/sirajummonir.monir.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/fb1.png"
            alt="Facebook"
            style={{ width: '30px', marginRight: '10px' }}
          />
        </a>
        <a
          href="https://twitter.com/ayon_chayo33456"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/twitter.jpeg"
            alt="Twitter"
            style={{ width: '30px', marginRight: '10px' }}
          />
        </a>
        <a
          href="https://www.instagram.com/monir_chayon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/insta.jpeg"
            alt="Instagram"
            style={{ width: '30px', marginRight: '10px' }}
          />
        </a>
        <a
          href="https://github.com/monir235"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/git.png" alt="GitHub" style={{ width: '30px' }} />
        </a>
        <a
          href="https://web.cu.ac.bd/v2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/Culogo.jpeg" alt="CU" style={{ width: '30px' }} />
        </a>
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          © 2024 Sirajum Monir | University of Chittagong
        </div>
      </div>
    </div>
  );
}

export default Home;
