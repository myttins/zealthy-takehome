import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://zealthy-backend.vercel.app/api');
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
      <div className="max-w-5xl m-auto bg-slate-100">
        {tickets.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Admin;
