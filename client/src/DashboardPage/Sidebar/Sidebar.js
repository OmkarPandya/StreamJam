import React from "react";
import { useNavigate } from "react-router-dom";

import "../dashboardPage.css";

export const Sidebar = ({ channels }) => {
  const navigate = useNavigate();

  if (!channels) {
    return null;
  }
  const handleNavigateToChannels = () => {
    navigate("/channels");
    console.log("Navigated!")
  };

  return (
    <div className="sidebar-container">
      <span
        className="sidebar-title"
        onClick={handleNavigateToChannels}
      >
        StreamJam
      </span>
      <span className="sidebar-subtitle">FOLLOWED CHANNELS</span>
      {channels.map((channel) => {
        return (
          <div key={channel.id} className="sidebar-list-item">
            <span className="sidebar-list-username">{channel.username}</span>
            <span
              className="sidebar-list-status"
              style={{
                color: channel.isOnline ? "green" : "red",
              }}
            >
              {channel.isOnline ? "Online" : "Offline"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
