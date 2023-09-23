import React, { useState } from 'react';

const Main = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    //TODO: validate data

    await fetch(`https://zealthy-backend.vercel.app/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  };

  const inputStyle = 'block border my-2 w-full p-2';

  return (
    <div className="max-w-5xl m-auto">
      <h1 className="text-2xl mt-10">New Ticket</h1>
      <form className="my-4" onSubmit={(e) => handleSubmit(e)}>
        <input
          className={inputStyle}
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
        />
        <input
          className={inputStyle}
          type="text"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        <input
          className={inputStyle}
          type="text"
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Subject"
        />
        <textarea
          className={inputStyle}
          type="text"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Message"
        />
        <button
          className="border-2 border-slate-700 rounded-full bg-slate-700 text-white px-4 py-1 hover:text-black hover:bg-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
