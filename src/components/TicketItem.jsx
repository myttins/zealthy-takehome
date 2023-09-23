import React from 'react';
import { useNavigate } from 'react-router';

const TicketItem = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div className="flex w-full cursor-pointer my-2 py-2" onClick={() => navigate(`/ticket/${data.id}`)}>

      <a className="w-2/6">{data.subject}</a>
      <a className="w-1/6">{data.name}</a>
      <a className={`w-1/6 ${data.status === 'Resolved' && 'text-green-500'}`}>{data.status}</a>
      {/* <a className="w-2/6">{data.message}</a> */}
      <a className="w-2/6 text-slate-400">{data.timestamp}</a>
    </div>
  );
};

export default TicketItem;
