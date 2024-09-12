import React, { useState } from 'react';

const Student = () => {
  const [students, setStudents] = useState([
    {
        Student_ID: 1,
        name: 'JOY HOSSAIN JONY',
        mobile_No: 1784336692,
        email: 'jony556@gmail.com',
        salary_Offer: 7000,
        day_per_week: 3,
        Location: 'Bandar',
        applied: false
      },
      {
        Student_ID: 2,
        name: 'SHAKIL',
        mobile_No: 1825697458,
        email: 'sabbirbolla@gmail.com',
        salary_Offer: 5000,
        day_per_week: 4,
        Location: 'Bandar',
        applied: false
      },
      {
        Student_ID: 3,
        name: 'MOHAIMIN',
        mobile_No: 1694586655,
        email: 'chayonayon71@gmail.com',
        salary_Offer: 7000,
        day_per_week: 2,
        Location: 'Chandgaon',
        applied: false
      },
      {
        Student_ID: 4,
        name: 'NISHAD',
        mobile_No: 1581156784,
        email: 'sabbirhossainmonir@gmail.com',
        salary_Offer: 5000,
        day_per_week: 3,
        Location: 'Hathazari',
        applied: false
      },
      {
        Student_ID: 5,
        name: 'OMIN GUPTA',
        mobile_No: 1224456678,
        email: 'A@gmail.com',
        salary_Offer: 4000,
        day_per_week: 3,
        Location: 'Khulshi',
        applied: false
      },
      {
        Student_ID: 6,
        name: 'MUHAMMED SHAHEEN',
        mobile_No: 1521563405,
        email: 'muhammedshaheen27may@gmail.com',
        salary_Offer: 7000,
        day_per_week: 3,
        Location: '2no gate',
        applied: false
      },
      {
        Student_ID: 7,
        name: 'ABDUL MANNAN',
        mobile_No: 1842634195,
        email: 'abdulmannanrafin@gmail.com',
        salary_Offer: 8000,
        day_per_week: 3,
        Location: 'Cokhbazar',
        applied: false
      },
      {
        Student_ID: 8,
        name: 'MUSTAFA',
        mobile_No: 1234567895,
        email: 'Hossainalamgir@gmail.com',
        salary_Offer: 7000,
        day_per_week: 3,
        Location: '2 no gate',
        applied: false
      },
      {
        Student_ID: 9,
        name: 'RAJU AHMED',
        mobile_No: 1773720851,
        email: 'Abc@gmail.com',
        salary_Offer: 5000,
        day_per_week: 3,
        Location: 'Rangpur',
        applied: false
      },
      {
        Student_ID: 10,
        name: 'FARUK',
        mobile_No: 1868728665,
        email: 'omarmdfaruk098@gmail.com',
        salary_Offer: 5000,
        day_per_week: 3,
        Location: 'Pahartali',
        applied: false
      },
      {
        Student_ID: 11,
        name: 'SUMON',
        mobile_No: 1912356758,
        email: 'mdshafayet171@gmail.com',
        salary_Offer: 4000,
        day_per_week: 4,
        Location: 'chawkbazar',
        applied: false
      },
      {
        Student_ID: 12,
        name: 'ABDULLAH',
        mobile_No: 1600000000,
        email: '123@yahoo.com',
        salary_Offer: 6000,
        day_per_week: 3,
        Location: 'Chandgaon',
        applied: false
      },
      {
        Student_ID: 13,
        name: 'FAHIM',
        mobile_No: 1789090376,
        email: 'shtasim6251@gmail.com',
        salary_Offer: 3000,
        day_per_week: 3,
        Location: 'Pahartoli',
        applied: false
      },
      {
        Student_ID: 14,
        name: 'MUNTAHA',
        mobile_No: 1234567891,
        email: 'jkjkjk@gmail.com',
        salary_Offer: 5000,
        day_per_week: 3,
        Location: 'Sholoshohor',
        applied: false
      },
      {
        Student_ID: 15,
        name: 'NAYEEM',
        mobile_No: 1823456789,
        email: 'nayeemnayeem@gmail.com',
        salary_Offer: 5000,
        day_per_week: 4,
        Location: 'Nasirabad',
        applied: false
      },
      {
        Student_ID: 16,
        name: 'monir',
        mobile_No: 1234,
        email: 'monir@gmail.com',
        salary_Offer: 2000,
        day_per_week: 3,
        Location: 'chandgaon',
        applied: false
      }
      
  ]);

  const handleApply = (id) => {
    setStudents(students.map(student => {
      if (student.Student_ID === id) {
        return { ...student, applied: !student.applied }; // Toggle applied state
      }
      return student;
    }));
  };

  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '50px'
    }}>
      {students.map((student, index) => (
        <div key={index} style={{ 
          width: '300px',
          height: '350px',
          padding: '20px',
          margin: '10px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: student.applied ? 'lightgreen' : 'white' // Change background color if applied
        }}>
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{student.name}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Mobile No: {student.mobile_No}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Email: {student.email}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Salary Offer: {student.salary_Offer}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Days per Week: {student.day_per_week}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Location: {student.Location}</p>
          <button onClick={() => handleApply(student.Student_ID)}>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default Student;
