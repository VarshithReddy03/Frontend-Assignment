import React from "react";
import "./TicketCard.css";

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Priority: {["No Priority", "Low", "Medium", "High", "Urgent"][ticket.priority]}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
