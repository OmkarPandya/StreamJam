import React from "react";
import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";
import { useUserDetails } from "../../../shared/hooks";

export const Channels = ({ channels }) => {
  const { isLogged } = useUserDetails();

  const navigate = useNavigate();

  const handleNavigateToChannel = (id) => {
    navigate(`/channel/${id}`);
  };

  return (
    <div>
      <div className={isLogged ? "m-left" : ""}>
        <p
          style={{
            color: "Black",
            fontFamily: "Amatic SC, serif",
            fontSize: "25px",
            marginTop: "20px",
          }}
        >
          Discover
        </p>

        <div className="row">

          {channels.map((c) => (
            <div className="col-6" key={c.id} >
            <ChannelCard
              
              id={c.id}
              title={c.title}
              username={c.username}
              isOnline={c.isOnline}
              avatarUrl={c.avatarUrl}
              navigateToChannelHandler={handleNavigateToChannel}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
