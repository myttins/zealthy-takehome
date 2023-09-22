import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      setTickets(data);
      return data;
    };

    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {tickets.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
};

export default Admin;
