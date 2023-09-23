import React, { useEffect, useState } from 'react';
import TicketItem from '../components/TicketItem.jsx'

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
    <div className="max-w-5xl m-auto mt-10 ">
      <div className='flex w-full border-b-2'>
        <a className="w-2/6">Subject</a>
        <a className="w-1/6">Name</a>
        <a className="w-1/6">Status</a>
        <a className="w-2/6">Updated</a>
      </div>
      <div>
        {tickets.map((data, index) => {
          return <TicketItem key={data.id} data={data}/>;
        })}
      </div>
    </div>
  );
};

export default Admin;
