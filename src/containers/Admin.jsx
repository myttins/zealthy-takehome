import React, { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api')
    const data = await response.json();
    console.log(data);
  }
  return <div>Admin</div>;
};

export default Admin;
