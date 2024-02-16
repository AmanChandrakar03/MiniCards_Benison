
import React from 'react';
import Card from './Card.js';

const App = () => {
  const data = [
    {
      fullName: 'Aman Chandrakar',
      contactNo: '9131165792',
      email: 'aman@gmail.com',
      joiningDate: '2023-12-04'
    },
    {
      fullName: 'Dwight schrute',
      contactNo: '9823456654',
      email: 'dwight@gmail.com',
      joiningDate: '2023-02-15'
    },
    {
      fullName: 'Michael Scott',
      contactNo: '9871654210',
      email: 'mike@gmail.com',
      joiningDate: '2020-01-14'
    },
    {
      fullName: 'jon snow',
      contactNo: '9871909010',
      email: 'jon@gmail.com',
      joiningDate: '2019-08-14'
    },
    {
      fullName: 'rafa nadal',
      contactNo: '7041909010',
      email: 'rafa@gmail.com',
      joiningDate: '2014-09-11'
    } 
    
    // Add more data objects as needed
  ];

  return (
    <div className="cardcontainer">
      {data.map((item, index) => ( //iterates over each element in the data array using the map() function and returns a new array of JSX elements.
        <Card 
          key={index}
          fullName={item.fullName}
          contactNo={item.contactNo}
          email={item.email}
          joiningDate={item.joiningDate}
        />
      ))}
    </div>
  );
};


export default App;

