import React from 'react';
import College from './components/College';

const CollegeData = () => {
  const collegeData = [
    {
      name: "IW Alwar",
      city: "Alwar",
      website: "ghguyef.com",
      student: [
        { name: "656456y", age: '56', email: "jfehhe@.com" },
        { name: "4546", age: '6', email: "st@.com" },
        { name: "yyt", age: '5', email: "ert@.com" }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "ghguyef.com"
    },
    {
      name: "IIT Madras",
      city: "Madras",
      website: "abcd.com",
      student: [
        { name: "fwihiel", age: '56', email: "jfehhe@.com" },
        { name: "5yty", age: '6', email: "st@.com" },
        { name: "tyut6ut", age: '5', email: "ert@.com" }
      ]
    }
  ];

  return (
    <div>
      <h1>Nested loops with component</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {collegeData.map((college, index) => (
          <College key={index} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeData;
