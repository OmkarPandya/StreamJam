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
      <div className={isLogged ? "m-left text-rose-700 font-bold" : "text-rose-700"}>
        <p
          style={{
            fontFamily: "Amatic SC, serif",
            fontSize: "25px",
            
          }}
        >
          Discover
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-10">

          {channels.map((c) => (
            <div className="" key={c.id} >
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
