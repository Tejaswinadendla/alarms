import React, { useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import { useKanban } from '../../context/KanbanContext.jsx';
import { fetchData } from '../../services/api';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const { groupBy, sortBy, tickets, setTickets, users, setUsers } = useKanban();

  useEffect(() => {
    const loadData = async () => {
      const {tickets, users} = await fetchData();
      setTickets(tickets);
      setUsers(users);
    };
    loadData();
  }, [setTickets, setUsers]);
  
  const groupTickets = () => {
    switch (groupBy) {
      case 'status':
        return tickets.reduce((acc, ticket) => {
          acc[ticket.status] = acc[ticket.status] || [];
          acc[ticket.status].push(ticket);
          return acc;
        }, {});
      case 'user':
        return tickets.reduce((acc, ticket) => {
          const userName = users.find((user) => user.id === ticket.userId)?.name || 'Unassigned';
          acc[userName] = acc[userName] || [];
          acc[userName].push(ticket);
          return acc;
        }, {});
      case 'priority':
        return tickets.reduce((acc, ticket) => {
          const priority = ticket.priority || 'No Priority';
          acc[priority] = acc[priority] || [];
          acc[priority].push(ticket);
          return acc;
        }, {});
      default:
        return {};
    }
  };

  const sortedTickets = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn key={group} title={group} tickets={sortedTickets(groupedTickets[group])} />
      ))}
    </div>
  );
};

export default KanbanBoard;
