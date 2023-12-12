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
      <div className={isLogged ? "m-left mr-28 text-rose-700 font-bold" : "text-rose-700"}>
        <p
        className="my-5"
          style={{
            fontFamily: "Amatic SC, serif",
            fontSize: "35px",
            
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
