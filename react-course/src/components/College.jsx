const College = ({ college }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "#da2222cc",
        margin: "10px",
        padding: "10px",
        width: "300px",
        color: "white",
      }}
    >
      <h3>Name: {college.name}</h3>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>Website: {college.website}</h3>
        </li>
        <li>
          <h3>Students</h3>
          {college.student?.map((student, idx) => (
            <div key={idx}>
              <h4>{student.name}</h4>
            </div>
          )) || <p>No student data available</p>}
        </li>
      </ul>
    </div>
  );
};

export default College;
