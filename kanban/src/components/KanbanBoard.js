import React from "react";
import GroupColumn from "./GroupColumn";
import { groupTickets } from "../utils/groupTickets";
import { sortTickets } from "../utils/sortTickets";

function KanbanBoard({ tickets, users, grouping, sortBy }) {
  const groupedTickets = groupTickets(tickets, grouping, users);
  
  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <GroupColumn
          key={group}
          groupName={group}
          tickets={sortTickets(tickets, sortBy)}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
