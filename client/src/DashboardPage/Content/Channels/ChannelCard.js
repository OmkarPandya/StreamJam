import React from "react";

import "../../dashboardPage.css";

const imageUrl =
  "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/10/04/c0c3e2e4-c234-4844-8504-92e5be2f3e96/gothic-ii";

const ChannelAvatar = ({ url }) => {
  return (
    <div className="channels-avatar-container">
      <img
        src={url || imageUrl}
        height={"100%"}
        width={"100%"}
        className="rounded-corners"
      />
    </div>
  );
};

export const ChannelCard = ({
  title,
  id,
  username,
  isOnline,
  avatarUrl,
  navigateToChannelHandler,
}) => {
  const handleNavigate = () => {
    navigateToChannelHandler(id);
  };

  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl} />
      <div className="channels-card-content">
        <span className="channels-card-title">{title}</span>
        <div className="channels-card-text">
          <span style={{ textAlign: "left" }}>{username}</span>
          <span
            style={{
              color: isOnline ? "green" : "red",
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
};
