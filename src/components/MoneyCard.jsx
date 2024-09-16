import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoneyCard = () => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalTeachersMoney, setTotalTeachersMoney] = useState(0);
  const [acceptedStudents, setAcceptedStudents] = useState(0);
  const [acceptedTeachers, setAcceptedTeachers] = useState(0);

  const fixedAmount = 250; // Fixed amount for each row

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/getStuaccept.php');
        const data = response.data;

        // Students data
        const students = data.students;
        const studentTotal = students.length * fixedAmount;
        setAcceptedStudents(students.length);
        setTotalMoney(studentTotal);

        // Teachers data
        const teachers = data.teachers;
        const teacherTotal = teachers.length * fixedAmount;
        setAcceptedTeachers(teachers.length);
        setTotalTeachersMoney(teacherTotal);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Card for students */}
      <div className="card">
        <h1>Total Money (Students)</h1>
        <h3>Accepted Students Number: {acceptedStudents}</h3>
        <h3>Total amount of money: {totalMoney} Taka</h3>
      </div>

      {/* Card for teachers */}
      <div className="card">
        <h1>Total Money (Teachers)</h1>
        <h3>Accepted Teachers Number: {acceptedTeachers}</h3>
        <h3>Total amount of money: {totalTeachersMoney} Taka</h3>
      </div>

      <style>{`
        .card {
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 500px;
          text-align: center;
          margin: 20px auto;
        }
        h1 {
          color: #333;
        }
        p {
          font-size: 18px;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default MoneyCard;
