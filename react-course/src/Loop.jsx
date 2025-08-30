import React from 'react';
import User from './components/User';

const userData = [
  { id: 1, name: "Anil", age: "23", skills: "react" },
  { id: 2, name: "Sunil", age: "24", skills: "js" },
  { id: 3, name: "Pranil", age: "25", skills: "mern" },
];

const Loop = () => {
  return (
    <div>
      <h2>Loop in JSX with Map Function</h2>
      <ol>
        <li>What is an array?</li>
        <li>Make an array</li>
        <li>Make a table in JSX</li>
        <li>Use map function for looping</li>
      </ol>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <div>
        <h3>reuese copmponenet in  loop</h3>
        {
          userData.map((user)=>(
            <div key={user.id}>
              <User data={user}/>
              </div>
          ))
        }

    </div>
    </div>
  );
};

export default Loop;
