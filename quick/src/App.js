import React from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import KanbanControls from './components/KanbanHeader';
import { KanbanProvider } from './context/KanbanContext';
import './App.css';

const App = () => (
  <KanbanProvider>
    <KanbanControls />
    <KanbanBoard />
  </KanbanProvider>
);

export default App;
