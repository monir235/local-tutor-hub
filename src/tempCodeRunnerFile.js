import React, { useState } from 'react';
import Login from './components/Login';
// other imports...
import TeacherLogin from './components/TeacherLogin';
import SignInWithEmail from './components/SignInWithEmail';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import TutorForm from './components/TutorForm';
import Student from './components/Student';
import StudentForm from './components/StudentForm';
import Tutor from './components/Tutor';
import StuInfo from './components/StuInfo';
import SignIn from './components/SignIn';
import Tinfo from './components/Tinfo';
import Stubd from './components/Stubd'; // Import Stubd component
import TutorLogin from './components/TutorLogin';
import Tinformation from './components/Tinformation';
import SearchTutor from './components/SearchTutor';
import SearchStu from './components/SearchStu';
import StuLogin from './components/StuLogin';
import StuInformation from './components/StuInformation';
import AcceptTutor from './components/AcceptTutor';
import AcceptStu from './components/AcceptStu';

function App() {
  const [currentPage, setCurrentPage] = useState('Login'); // Default to Login page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Admin':
        return <Home />;
      case 'SignIn':
        return <SignInWithEmail />;
      case 'TeacherLogin':
        return <TeacherLogin />;
      case 'Profile':
        return <Profile onPageChange={handlePageChange} />;
      case 'Search':
        return <Search />;
      case 'TutorForm':
        return <TutorForm />;
      case 'Student':
        return <Student />;
      case 'StudentForm':
        return <StudentForm />;
      case 'Tinformation':
        return <Tinformation />;
      case 'Tutor':
        return <Tutor onPageChange={handlePageChange} />;
      case 'StuInformation':
        return <StuInformation />;
      case 'StuInfo':
        return <StuInfo onPageChange={handlePageChange} />;
      case 'Tinfo':
        return <Tinfo />;
      case 'SignIno':
        return <SignIn />;
      case 'Stubd':
        return <Stubd />;
      case 'tutorlogin':
        return <TutorLogin onPageChange={handlePageChange} />;
      case 'searchtutor':
        return <SearchTutor />;
      case 'searchstu':
        return <SearchStu />;
      case 'stulogin':
        return <StuLogin onPageChange={handlePageChange} />;
      case 'redox':
        return <AcceptTutor />;
      case 'redol':
        return <AcceptStu />;
      default:
        return <Login onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App" style={{ backgroundImage: 'url("/backf.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {currentPage !== 'Login' && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <button onClick={() => setCurrentPage('Admin')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Home Page</button>
          <button onClick={() => setCurrentPage('SignIno')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Register</button>
          <button onClick={() => setCurrentPage('tutorlogin')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Tutor Login</button>
          <button onClick={() => setCurrentPage('stulogin')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Student Login</button>
          <button onClick={() => setCurrentPage('Profile')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Profile</button>
          <button onClick={() => setCurrentPage('Tinfo')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Available Tutor</button>
          <button onClick={() => setCurrentPage('Stubd')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Available Student</button>
          <button onClick={() => setCurrentPage('searchtutor')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Search Tutor</button>
          <button onClick={() => setCurrentPage('searchstu')} style={{ padding: '15px 20px', fontSize: '16px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Search Student</button>
          <button onClick={() => setCurrentPage('redox')} style={{ padding: '10px 25px', fontSize: '10px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '8px' }}>Accept Tutor</button>
          <button onClick={() => setCurrentPage('redol')} style={{ padding: '8px 15px', fontSize: '10px', backgroundColor: '#0000ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '8px' }}>Accept Student</button>
        </div>
      )}
      {renderPage()}
    </div>
  );
}

export default App;