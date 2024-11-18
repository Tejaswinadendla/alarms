import React, { useState } from 'react';
import { useKanban } from '../context/KanbanContext';
import './KanbanHeader.css';

function KanbanControls() {
  const [showControls, setShowControls] = useState(false); // To toggle the visibility of the container with Grouping and Sorting options
  const {groupBy, sortBy, updateGroupBy, updateSortBy} = useKanban();

  return (
    <div className="kanban-controls">
      {/* Display Button */}
      <button
        onClick={() => setShowControls((prev) => !prev)} // Toggle the visibility of the container
        className="display-select"
      >
        Display
      </button>

      {/* Container with Grouping and Sorting options */}
      {showControls && (
        <div className="controls-container">
          {/* First Row - Grouping */}
          <div className="row">
            <div className="control-item">
              <label htmlFor="grouping-select">Grouping</label>
              <select
                id="grouping-select"
                value={groupBy}
                onChange={(e) => updateGroupBy(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            {/* Second Row - Sorting */}
            <div className="control-item">
              <label htmlFor="sorting-select">Sorting</label>
              <select
                id="sorting-select"
                value={sortBy}
                onChange={(e) => updateSortBy(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanControls;