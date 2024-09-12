import React, { useState } from 'react';

const Search = () => {
  const [cards, setCards] = useState([
    {
      tutor_id: 1,
      name: 'Sabbir Hossain',
      availability: 'No',
      mobile_no: 1568158113,
      e_mail: 'shk.sabbir.7@gmail.com',
      location: 'Bandar',
      institution: 'University of Chittagong',
      current_subject: 'CSE',
      teaching_experience: 3,
      applied: false
    },
    {
      tutor_id: 2,
      name: 'Sirajum Monir',
      availability: 'Yes',
      mobile_no: 1856974568,
      e_mail: 'monir@gmail.com',
      location: 'Chandgaon',
      institution: 'University of Chittagong',
      current_subject: 'CSE',
      teaching_experience: 2,
      applied: false
    },
    {
      tutor_id: 3,
      name: 'Sirajul Saliken',
      availability: 'Yes',
      mobile_no: 1865656251,
      e_mail: 'chayonayon71@gmail.com',
      location: 'Nazir Bari',
      institution: 'University of Chittagong',
      current_subject: 'Physics',
      teaching_experience: 2,
      applied: false
    },
    {
      tutor_id: 4,
      name: 'Sultan Ul Arfin',
      availability: 'Yes',
      mobile_no: 1581241034,
      e_mail: 'sultanularfin47@gmail.com',
      location: 'Hathazari',
      institution: 'University of Chittagong',
      current_subject: 'CSE',
      teaching_experience: 2,
      applied: false
    },
    {
      tutor_id: 5,
      name: 'Md Ayeat Mujib Tamim',
      availability: 'Yes',
      mobile_no: 1571305761,
      e_mail: 'ayeadmujibtamim67@gmail.com',
      location: 'Khulshi',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 1,
      applied: false
    },
    {
      tutor_id: 6,
      name: 'Muhammed Shaheen',
      availability: 'Yes',
      mobile_no: 1521563404,
      e_mail: 'muhammedshaheen27may@gmail.com',
      location: 'Muradpur',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 3,
      applied: false
    },
    {
      tutor_id: 7,
      name: 'Abdul Mannan',
      availability: 'Yes',
      mobile_no: 1842634195,
      e_mail: 'abdulmannanrafin@gmail.com',
      location: 'Khulsi',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 3,
      applied: false
    },
    {
      tutor_id: 8,
      name: 'Arpa Dey',
      availability: 'Yes',
      mobile_no: 1645154127,
      e_mail: 'dey.arpa2002@gmail.com',
      location: 'Muradpur',
      institution: 'University of Chittagong',
      current_subject: 'BMB',
      teaching_experience: 2,
      applied: false
    },
    {
      tutor_id: 9,
      name: 'HIMEL KUMAR ROY',
      availability: 'Yes',
      mobile_no: 1778306940,
      e_mail: 'himelkumarroy2004@gmail.com',
      location: '2 no Gate',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 2,
      applied: false
    },
    {
      tutor_id: 10,
      name: 'OMAR FARUK TUHIN',
      availability: 'Yes',
      mobile_no: 1868728665,
      e_mail: 'omarmdfaruk098@gmail.com',
      location: 'Pahartali',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 3,
      applied: false
    },
    {
      tutor_id: 11,
      name: 'MD SHAHRUKH IBNE ZAMAN',
      availability: 'Yes',
      mobile_no: 1830235786,
      e_mail: '335.ccpc.mdshahrukh@gmail.com',
      location: 'Chawkbazar',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 1,
      applied: false
    },
    {
      tutor_id: 12,
      name: 'AMINUL ISLAM PARVEZ',
      availability: 'Yes',
      mobile_no: 1634165608,
      e_mail: 'mdamin1492@gmail.com',
      location: 'Chandgaon',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 3,
      applied: false
    },
    {
      tutor_id: 13,
      name: 'SADMAN HASAN',
      availability: 'Yes',
      mobile_no: 1988308020,
      e_mail: 'Shadman1710@gmail.com',
      location: 'Pahartoli',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 1,
      applied: false
    },
    {
      tutor_id: 14,
      name: 'JANNATUL FERDOUS',
      availability: 'Yes',
      mobile_no: 1920867641,
      e_mail: 'ferdousjulie@gmail.com',
      location: 'Oxygen',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 1,
      applied: false
    },
    {
      tutor_id: 15,
      name: 'SABIK AHMED',
      availability: 'Yes',
      mobile_no: 1630409555,
      e_mail: 'sabikahmed2003@gmail.com',
      location: 'Nasirabad',
      institution: 'University of Chittagong',
      current_subject: 'EEE',
      teaching_experience: 1,
      applied: false
    },
    {
      tutor_id: 16,
      name: 'Rudra pratap',
      availability: 'yes',
      mobile_no: 1234,
      e_mail: 'rudrapratap@gmail.com',
      location: 'nasirabad',
      institution: 'university of Chittagong',
      current_subject: 'cse',
      teaching_experience: 2,
      applied: false
    },
    {
      tutor_id: 17,
      name: 'arfin',
      availability: 'yes',
      mobile_no: 12345,
      e_mail: 'arfin@gmail.com',
      location: 'jobra',
      institution: 'university of Chittagong',
      current_subject: 'cse',
      teaching_experience: 4,
      applied: false
    },
    {
      tutor_id: 18,
      name: 'Rudra pratap',
      availability: 'yes',
      mobile_no: 1234,
      e_mail: 'rudrapratap@gmail.com',
      location: 'nasirabad',
      institution: 'university of Chittagong',
      current_subject: 'cse',
      teaching_experience: 2,
      applied: false
    }

  ]);

  const handleApply = (id) => {
    setCards(cards.map(card => {
      if (card.tutor_id === id) {
        return { ...card, applied: !card.applied }; // Toggle applied state
      }
      return card;
    }));
  };

  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '50px'
    }}>
      {cards.map((card, index) => (
        <div key={index} style={{ 
          width: '300px',
          height: '350px',
          padding: '20px',
          margin: '10px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: card.applied ? 'lightgreen' : 'white' // Change background color if applied
        }}>
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{card.name}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Availability: {card.availability}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Mobile No: {card.mobile_no}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Email: {card.e_mail}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Location: {card.location}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Institution: {card.institution}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Current Subject: {card.current_subject}</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Teaching Experience: {card.teaching_experience} years</p>
          <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{card.additionalInfo}</p>
          <button onClick={() => handleApply(card.tutor_id)}>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default Search;
