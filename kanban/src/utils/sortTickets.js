export const sortTickets = (tickets, sortBy) => {
    return tickets.sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority; // Descending priority
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title); // Ascending title
      }
      return 0;
    });
  };
  