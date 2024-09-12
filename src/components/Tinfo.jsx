import React, { useState } from 'react';

const Tinfo = () => {
  const [cards, setCards] = useState([
    // Your card data here...

    {
      tutorId: 1,
      name: "monir",
      availability: "yes",
      mobileNumber: "012365",
      email: "chayonayon71@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 2,
      name: "monir",
      availability: "yes",
      mobileNumber: "012365",
      email: "chayonayon71@gmail.com",
      location: "nasirabad",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 3,
      name: "sami",
      availability: "yes",
      mobileNumber: "012365",
      email: "sabikahmed2003@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 4,
      name: "Ayed mujib sahin",
      availability: "yes",
      mobileNumber: "012365125698",
      email: "ayed@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "eee",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 5,
      name: "Arpa Dey",
      availability: "yes",
      mobileNumber: "01236545897",
      email: "deyarpa@gmail.com",
      location: "foteabad",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 6,
      name: "Rishad Hossain",
      availability: "yes",
      mobileNumber: "01236566666",
      email: "rishahossain@gmail.com",
      location: "dhaka",
      institution: "university of chittagong",
      currentSubject: "physics",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 7,
      name: "Nazmul hasan",
      availability: "yes",
      mobileNumber: "0123654589765",
      email: "nazmul@gmail.com",
      location: "magura",
      institution: "university of dhaka",
      currentSubject: "physics",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 8,
      name: "Monisha das",
      availability: "yes",
      mobileNumber: "012365456987",
      email: "monisha@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 9,
      name: "mustafizur rahman",
      availability: "yes",
      mobileNumber: "0123654569871",
      email: "mustafiz@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 10,
      name: "Rudra pratap",
      availability: "yes",
      mobileNumber: "012365",
      email: "chayonayon71@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "cse",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  // Fill in the rest of the data similarly
  {
      tutorId: 11,
      name: "christiano ronaldo",
      availability: "yes",
      mobileNumber: "0136589745",
      email: "christiano@gmail.com",
      location: "portugal",
      institution: "realmadrid",
      currentSubject: "football",
      teachingExperience: 4,
      additionalInfo: "",
      accepted: false
  },
  {
      tutorId: 12,
      name: "Sirajum Monir",
      availability: "yes",
      mobileNumber: "01318375668",
      email: "chayonayon71@gmail.com",
      location: "chandgaon",
      institution: "university of chittagong",
      currentSubject: "CSE",
      teachingExperience: 3,
      additionalInfo: "",
      accepted: false
  },
  {
    tutorId: 13,
    name: "Shahajahan Any",
    availability: "yes",
    mobileNumber: "01318375668",
    email: "shahajahanany@gmail.com",
    location: "nasirabad",
    institution: "CUET",
    currentSubject: "Architecture",
    teachingExperience: 2,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 14,
    name: "Salman khan",
    availability: "yes",
    mobileNumber: "01364587965",
    email: "salmankhan@gmail.com",
    location: "mumbai",
    institution: "University Of Chittagong",
    currentSubject: "CSE",
    teachingExperience: 4,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 15,
    name: "Syed Abid Hossain Sami",
    availability: "YES",
    mobileNumber: "01876945235",
    email: "sayedsami@gmail.com",
    location: "Malibag,Dhaka",
    institution: "University Of Chittagong",
    currentSubject: "EEE",
    teachingExperience: 2,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 16,
    name: "sabbir",
    availability: "No",
    mobileNumber: "0136589745",
    email: "sabikahmed2003@gmail.com",
    location: "nasirabad",
    institution: "University Of Chittagong",
    currentSubject: "CSE",
    teachingExperience: 2,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 17,
    name: "minhaj",
    availability: "yes",
    mobileNumber: "012364587",
    email: "minhaj@gmail.com",
    location: "cumilla",
    institution: "University Of Chittagong",
    currentSubject: "CSE",
    teachingExperience: 2,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 18,
    name: "shamim ahmad ayon",
    availability: "yes",
    mobileNumber: "0123654789",
    email: "shamim@gmail.com",
    location: "north campus,CU",
    institution: "University Of Chittagong",
    currentSubject: "CSE",
    teachingExperience: 2,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 19,
    name: "Johirul Islam",
    availability: "YES",
    mobileNumber: "01235647895",
    email: "johirul@gmail.com",
    location: "rab hall,CU",
    institution: "University Of Chittagong",
    currentSubject: "CSE",
    teachingExperience: 4,
    additionalInfo: "",
    accepted: false
},
{
    tutorId: 20,
    name: "Rudra pratap",
    availability: "yes",
    mobileNumber: "1234",
    email: "rudrapratap@gmail.com",
    location: "nasirabad",
    institution: "University Of Chittagong",
    currentSubject: "CSE",
    teachingExperience: 2,
    additionalInfo: "",
    accepted: false
},
{
  tutorId: 21,
  name: "Anika Rahman",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "anika@example.com",
  location: "Khulshi",
  institution: "University of Chittagong",
  currentSubject: "Mathematics",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 22,
  name: "Kamal Ahmed",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "kamal@example.com",
  location: "Halishahar",
  institution: "University of Chittagong",
  currentSubject: "Physics",
  teachingExperience: 4,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 23,
  name: "Sara Khan",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "sara@example.com",
  location: "Agrabad",
  institution: "University of Chittagong",
  currentSubject: "Chemistry",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 24,
  name: "Rahul Das",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "rahul@example.com",
  location: "Chandgaon",
  institution: "University of Chittagong",
  currentSubject: "Biology",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 25,
  name: "Priti Akter",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "priti@example.com",
  location: "Nasirabad",
  institution: "University of Chittagong",
  currentSubject: "English",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 26,
  name: "Arif Hossain",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "arif@example.com",
  location: "Pahartoli",
  institution: "University of Chittagong",
  currentSubject: "History",
  teachingExperience: 4,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 27,
  name: "Nadia Rahman",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "nadia@example.com",
  location: "Sholoshohor",
  institution: "University of Chittagong",
  currentSubject: "Geography",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 28,
  name: "Imran Khan",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "imran@example.com",
  location: "Chawkbazar",
  institution: "University of Chittagong",
  currentSubject: "Economics",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 29,
  name: "Sadia Akter",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "sadia@example.com",
  location: "Rangpur",
  institution: "University of Chittagong",
  currentSubject: "Sociology",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 30,
  name: "Nabila Islam",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "nabila@example.com",
  location: "Pahartali",
  institution: "University of Chittagong",
  currentSubject: "Political Science",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 31,
  name: "Fahim Ahmed",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "fahim@example.com",
  location: "Chittagong University",
  institution: "University of Chittagong",
  currentSubject: "Psychology",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 32,
  name: "Ratul Sarker",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "ratul@example.com",
  location: "Halishahar",
  institution: "University of Chittagong",
  currentSubject: "Anthropology",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 33,
  name: "Zahid Hasan",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "zahid@example.com",
  location: "Nasirabad",
  institution: "University of Chittagong",
  currentSubject: "Linguistics",
  teachingExperience: 4,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 34,
  name: "Afia Akter",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "afia@example.com",
  location: "Khulshi",
  institution: "University of Chittagong",
  currentSubject: "Philosophy",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 35,
  name: "Rezaul Karim",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "rezaul@example.com",
  location: "Pahartali",
  institution: "University of Chittagong",
  currentSubject: "Religious Studies",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 36,
  name: "Sabrina Rahman",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "sabrina@example.com",
  location: "Agrabad",
  institution: "University of Chittagong",
  currentSubject: "Art",
  teachingExperience: 3,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 37,
  name: "Imtiaz Alam",
  availability: "yes",
  mobileNumber: "0123456789",
  email: "imtiaz@example.com",
  location: "Halishahar",
  institution: "University of Chittagong",
  currentSubject: "Music",
  teachingExperience: 4,
  additionalInfo: "",
  accepted: false
}
  ,
  {
  tutorId: 38,
  name: "Momtazul Hakim",
  availability: "yes",
  mobileNumber: "01568974568",
  email: "momtaz@gmail.com",
  location: "kutubdia",
  institution: "University of chittagong",
  currentSubject: "Bangla",
  teachingExperience: 4,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 39,
  name: "Rudra pratap",
  availability: "yes",
  mobileNumber: "1234",
  email: "rudrapratap@gmail.com",
  location: "nasirabad",
  institution: "University Of Chittagong",
  currentSubject: "CSE",
  teachingExperience: 2,
  additionalInfo: "",
  accepted: false
},
{
  tutorId: 40,
  name: "Dr Gazendra Puruhit",
  availability: "yes",
  mobileNumber: "01398756485",
  email: "gazendra@gmail.com",
  location: "Moharashtra,India",
  institution: "Indian Institute of Technology",
  currentSubject: "CSE",
  teachingExperience: 15,
  additionalInfo: "",
  accepted: false
},
{
  "tutorId": 41,
  "name": "Momtazul Hakim",
  "availability": "yes",
  "mobileNumber": "01568974568",
  "email": "momtaz@gmail.com",
  "location": "kutubdia",
  "institution": "University of chittagong",
  "currentSubject": "Bangla",
  "teachingExperience": 4,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 42,
  "name": "Dr. Abhimanyu Singh",
  "availability": "yes",
  "mobileNumber": "01786547895",
  "email": "abhimanyu@gmail.com",
  "location": "Varanasi",
  "institution": "Banaras Hindu University",
  "currentSubject": "History",
  "teachingExperience": 8,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 43,
  "name": "Dr. Akshay Kumar",
  "availability": "yes",
  "mobileNumber": "01975486321",
  "email": "akshay@gmail.com",
  "location": "New Delhi",
  "institution": "Jawaharlal Nehru University",
  "currentSubject": "Political Science",
  "teachingExperience": 12,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 44,
  "name": "Dr. Priya Patel",
  "availability": "yes",
  "mobileNumber": "01895634782",
  "email": "priya@gmail.com",
  "location": "Mumbai",
  "institution": "Tata Institute of Social Sciences",
  "currentSubject": "Sociology",
  "teachingExperience": 6,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 45,
  "name": "Dr. Ankit Sharma",
  "availability": "yes",
  "mobileNumber": "01368745236",
  "email": "ankit@gmail.com",
  "location": "Bangalore",
  "institution": "Indian Institute of Science",
  "currentSubject": "Physics",
  "teachingExperience": 10,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 46,
  "name": "Dr. Neha Singh",
  "availability": "yes",
  "mobileNumber": "01678543960",
  "email": "neha@gmail.com",
  "location": "Kolkata",
  "institution": "Indian Statistical Institute",
  "currentSubject": "Statistics",
  "teachingExperience": 7,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 47,
  "name": "Dr. Mohan Das",
  "availability": "yes",
  "mobileNumber": "01987456321",
  "email": "mohan@gmail.com",
  "location": "Chennai",
  "institution": "Anna University",
  "currentSubject": "Civil Engineering",
  "teachingExperience": 15,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 48,
  "name": "Dr. Radhika Sharma",
  "availability": "yes",
  "mobileNumber": "01786543927",
  "email": "radhika@gmail.com",
  "location": "Pune",
  "institution": "Symbiosis International University",
  "currentSubject": "Mass Communication",
  "teachingExperience": 9,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 49,
  "name": "Dr. Ajay Patel",
  "availability": "yes",
  "mobileNumber": "01897645321",
  "email": "ajay@gmail.com",
  "location": "Hyderabad",
  "institution": "Indian School of Business",
  "currentSubject": "Finance",
  "teachingExperience": 11,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 50,
  "name": "Dr. Pooja Gupta",
  "availability": "yes",
  "mobileNumber": "01678345987",
  "email": "pooja@gmail.com",
  "location": "Jaipur",
  "institution": "Malaviya National Institute of Technology",
  "currentSubject": "Computer Science",
  "teachingExperience": 13,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 51,
  "name": "Dr. Karan Singh",
  "availability": "yes",
  "mobileNumber": "01568973214",
  "email": "karan@gmail.com",
  "location": "Ahmedabad",
  "institution": "National Institute of Design",
  "currentSubject": "Design",
  "teachingExperience": 8,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 52,
  "name": "Dr. Anjali Sharma",
  "availability": "yes",
  "mobileNumber": "01785469321",
  "email": "anjali@gmail.com",
  "location": "Chandigarh",
  "institution": "Punjab Engineering College",
  "currentSubject": "Electrical Engineering",
  "teachingExperience": 14,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 53,
  "name": "Dr. Deepak Singh",
  "availability": "yes",
  "mobileNumber": "01987645231",
  "email": "deepak@gmail.com",
  "location": "Dehradun",
  "institution": "Indian Institute of Remote Sensing",
  "currentSubject": "Remote Sensing",
  "teachingExperience": 5,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 54,
  "name": "Dr. Komal Sharma",
  "availability": "yes",
  "mobileNumber": "01368725694",
  "email": "komal@gmail.com",
  "location": "Bhopal",
  "institution": "Indian Institute of Science Education and Research",
  "currentSubject": "Biology",
  "teachingExperience": 11,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 55,
  "name": "Dr. Vivek Patel",
  "availability": "yes",
  "mobileNumber": "01678342976",
  "email": "vivek@gmail.com",
  "location": "Ranchi",
  "institution": "Indian Institute of Management",
  "currentSubject": "Management",
  "teachingExperience": 6,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 56,
  "name": "Dr. Aarti Singh",
  "availability": "yes",
  "mobileNumber": "01568932754",
  "email": "aarti@gmail.com",
  "location": "Guwahati",
  "institution": "Indian Institute of Technology Guwahati",
  "currentSubject": "Chemical Engineering",
  "teachingExperience": 9,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 57,
  "name": "Dr. Rahul Gupta",
  "availability": "yes",
  "mobileNumber": "01785496723",
  "email": "rahul@gmail.com",
  "location": "Patna",
  "institution": "National Institute of Technology Patna",
  "currentSubject": "Electrical Engineering",
  "teachingExperience": 12,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 58,
  "name": "Dr. Kavita Singh",
  "availability": "yes",
  "mobileNumber": "01987635984",
  "email": "kavita@gmail.com",
  "location": "Jodhpur",
  "institution": "Indian Institute of Technology Jodhpur",
  "currentSubject": "Computer Science",
  "teachingExperience": 7,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 59,
  "name": "Dr. Manish Verma",
  "availability": "yes",
  "mobileNumber": "01368742976",
  "email": "manish@gmail.com",
  "location": "Visakhapatnam",
  "institution": "Indian Institute of Management Visakhapatnam",
  "currentSubject": "Business Administration",
  "teachingExperience": 10,
  "additionalInfo": "",
  "accepted": false
},
{
  "tutorId": 60,
  "name": "Dr. Rajesh Singh",
  "availability": "yes",
  "mobileNumber": "01678342970",
  "email": "rajesh@gmail.com",
  "location": "Dhaka",
  "institution": "University of Dhaka",
  "currentSubject": "Economics",
  "teachingExperience": 14,
  "additionalInfo": "",
  "accepted": false
}

  ]);

  const handleAccept = async (tutorId) => {
    const updatedCards = cards.map(card => {
      if (card.tutorId === tutorId) {
        return { ...card, accepted: !card.accepted };
      }
      return card;
    });
    setCards(updatedCards);

    const acceptedTutor = updatedCards.find(card => card.tutorId === tutorId && card.accepted);
    if (acceptedTutor) {
      try {
        const response = await fetch('http://localhost/info.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(acceptedTutor)
        });
        if (response.ok) {
          console.log('Tutor information accepted successfully!');
        } else {
          console.error('Failed to accept tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error accepting tutor information:', error.message);
      }
    }
  };

  return (
    <div className="container">
      <h1></h1>
      <div className="cardContainer">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.accepted ? 'accepted' : ''}`}>
            <p>Name: {card.name}</p>
            <p>Availability: {card.availability}</p>
            <p>Mobile Number: {card.mobileNumber}</p>
            <p>Email: {card.email}</p>
            <p>Location: {card.location}</p>
            <p>Institution: {card.institution}</p>
            <p>Current Subject: {card.currentSubject}</p>
            <p>Teaching Experience: {card.teachingExperience} years</p>
            <p>{card.additionalInfo}</p>
            <button onClick={() => handleAccept(card.tutorId)}>
              {card.accepted ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
      <style jsx>{`
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
        .card.accepted {
          background-color: lightgreen;
        }
      `}</style>
    </div>
  );
};

export default Tinfo;
