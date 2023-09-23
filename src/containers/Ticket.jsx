import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Ticket = (props) => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://zealthy-backend.vercel.app/api/${id}`,
  //     );
  //     const data = await response.json();
  //     setData(data);
  //     console.log(data)
  //     return data;
  //   };

  //   console.log(id)

  //   try {
  //     fetchData();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  return <div className="max-w-5xl m-auto bg-slate-100">{1}</div>;
};

export default Ticket;
