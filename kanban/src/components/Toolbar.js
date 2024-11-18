import React from "react";
import "./Toolbar.css";

function Toolbar({ setGrouping, setSortBy }) {
  return (
    <div className="toolbar">
      <div>
        <label>Group By:</label>
        <select onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort By:</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default Toolbar;
