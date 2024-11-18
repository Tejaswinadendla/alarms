import React from "react";
import TicketCard from "./TicketCard";
import "./KanbanColumn.css";
import AddIcon from "./../../assets/add.svg"; // Import the SVG file
import circleProgress from "./../../assets/in-progress.svg"; // Import the SVG file
import dots from "./../../assets/dots.svg"; // Import the SVG file
import todo from "./../../assets/To-do.svg";
import backlog from "./../../assets/Backlog.svg";
import lp from "./../../assets/Img - Low Priority.svg";
import hp from "./../../assets/Img - High Priority.svg";
import mp from "./../../assets/Img - Medium Priority.svg";
import np from "./../../assets/No-priority.svg";
import up from "./../../assets/SVG - Urgent Priority colour.svg";
import pro from"./pro.jpg";
const KanbanColumn = ({ title, tickets }) => {
  // Determine the image to be used based on the title
  let columnImage;
  if (title === "In progress") {
    columnImage = circleProgress;
  } else if (title === "Todo") {
    columnImage = todo;
  } else if (title === "Backlog") {
    columnImage = backlog;
  }else if (title === "1") {
    title="Low";
    columnImage = lp;
  }else if (title === "2") {
    title="Medium";
    columnImage = mp;
  }else if (title === "3") {
    title="High";
    columnImage = hp;
  }else if (title === "4") {
    title="Urgent";
    columnImage = up;
  } else if (title === "No Priority") {
    columnImage = np;
  }
  else {
    columnImage = pro; // Default image if no condition matches
  }

  return (
    <div className="kanban-column">
      <span className="container">
        <span className="column-title">
         
          {/* Dynamically set the image based on the title */}
          <img
            src={columnImage}
            alt="Column Icon"
            className="column-icon"
          />
           {title}
        </span>
        <span>
          <img src={AddIcon} alt="Add Icon" className="column-icon" /> {/* SVG Icon */}
          <img src={dots} alt="Dots Icon" className="column-icon" /> {/* SVG Icon */}
        </span>
      </span>
      <div className="kanban-tickets">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;