import { createContext, useContext, useState } from 'react';
import './KanbanContext.css'

const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const updateGroupBy = (value) => {
    setGroupBy(value);
    localStorage.setItem('groupBy', value);
  };

  const updateSortBy = (value) => {
    setSortBy(value);
    localStorage.setItem('sortBy', value);
  };

  return (
    <KanbanContext.Provider
      value={{ groupBy, sortBy, tickets, users, setTickets, setUsers, updateGroupBy, updateSortBy }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanban = () => useContext(KanbanContext);
