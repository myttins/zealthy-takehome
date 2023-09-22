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

    await fetch(`/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

  };

  return (
    <div>
      <h1>New Ticket</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="block"
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
        />
        <input
          className="block"
          type="text"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        <input
          className="block"
          type="text"
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Subject"
        />
        <input
          className="block"
          type="text"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Main;
