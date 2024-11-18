import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Toolbar from "./components/Toolbar";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => localStorage.getItem("grouping") || "status"); // Restore from localStorage or default to "status"
  const [sortBy, setSortBy] = useState(() => localStorage.getItem("sortBy") || "priority");    // Restore from localStorage or default to "priority"

  // Fetch tickets and users from API
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Save grouping and sorting preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sortBy", sortBy);
  }, [grouping, sortBy]);

  return (
    <div className="App">
      {/* Toolbar for changing grouping and sorting */}
      <Toolbar
        setGrouping={setGrouping}
        setSortBy={setSortBy}
      />
      
      {/* Kanban Board for displaying tickets */}
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
