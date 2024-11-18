export const groupTickets = (tickets, grouping, users) => {
    switch (grouping) {
      case "status":
        return tickets.reduce((acc, ticket) => {
          (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
          return acc;
        }, {});
      case "user":
        return tickets.reduce((acc, ticket) => {
          const userName = users.find((u) => u.id === ticket.userId)?.name || "Unassigned";
          (acc[userName] = acc[userName] || []).push(ticket);
          return acc;
        }, {});
      case "priority":
        return tickets.reduce((acc, ticket) => {
          const priorityName = ["No Priority", "Low", "Medium", "High", "Urgent"][ticket.priority];
          (acc[priorityName] = acc[priorityName] || []).push(ticket);
          return acc;
        }, {});
      default:
        return {};
    }
  };
  