import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const Ticket = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://zealthy-backend.vercel.app/api/${id}`,
      );

      const data = await response.json();
      setData(data[0]);
    };

    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleClick = async () => {
    await fetch(`https://zealthy-backend.vercel.app/api/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    navigate('/admin');
  };

  const spanStyle = "w-1/6 text-slate-400 min-w-[96px]"

  return (
    <div className="max-w-5xl m-auto mt-10 px-6">
      <div className="flex mt-4">
        <span className={spanStyle}>Name: </span>
        <span>{data.name}</span>
      </div>
      <div className="flex mt-4">
        <span className={spanStyle}>Email: </span>
        <span>{data.email}</span>
      </div>
      <div className="flex mt-4">
        <span className={spanStyle}>Subject: </span>
        <span>{data.subject}</span>
      </div>
      <div className="flex mt-4">
        <span className={spanStyle}>Mesage: </span>
        <span>{data.message}</span>
      </div>
      <div className="flex mt-4 ">
        <span className={spanStyle}>Status: </span>
        <label className="mr-4">
          <input
            className="mr-1"
            onChange={(e) => {
              setData({ ...data, status: 'New' });
            }}
            checked={data.status === 'New' && 'checked'}
            type="radio"
            value={'new'}
          />
          New
        </label>
        <label className="mr-4">
          <input
            className="mr-1"
            onChange={(e) => {
              setData({ ...data, status: 'In Progress' });
            }}
            checked={data.status === 'In Progress' && 'checked'}
            type="radio"
            value="In Progress"
          />
          In Progress
        </label>
        <label>
          <input
            className="mr-1"
            onChange={(e) => {
              setData({ ...data, status: 'Resolved' });
            }}
            checked={data.status === 'Resolved' && 'checked'}
            type="radio"
            value="Resolved"
          />
          Resolved
        </label>
      </div>
      <div className="flex mt-4">
        <span className={spanStyle}>Response: </span>
        <textarea
          className="border p-2"
          placeholder="Response Message"
          onChange={(e) => {
            setData({ ...data, response: e.target.value });
          }}
          value={data.response || ''}
        />
      </div>

      <button
        className="border-2 border-slate-700 rounded-full bg-slate-700 text-white mt-4 px-4 py-1 hover:text-black hover:bg-white"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Ticket;
