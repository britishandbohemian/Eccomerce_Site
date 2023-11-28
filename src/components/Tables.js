import React, { useState, useEffect } from "react";

const TableList = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // Update the URL to match the local path to your PHP script
    fetch("http://localhost:3360/api.php")
      .then((response) => response.json())
      .then((data) => setTables(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Database Tables</h1>
      {tables.length > 0 ? (
        <ul>
          {tables.map((table, index) => (
            <li key={index}>{table}</li>
          ))}
        </ul>
      ) : (
        <p>No tables found.</p>
      )}
    </div>
  );
};

export default TableList;
