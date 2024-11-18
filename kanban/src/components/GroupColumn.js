import React from "react";
import TicketCard from "./TicketCard";
import "./GroupColumn.css";

function GroupColumn({ groupName, tickets }) {
  return (
    <div className="group-column">
      <h3>{groupName}</h3>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default GroupColumn;
