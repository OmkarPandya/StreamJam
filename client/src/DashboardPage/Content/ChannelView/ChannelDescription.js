import React from "react";
import { useUserDetails, useFollowChannel } from "../../../shared/hooks";

import "../../dashboardPage.css";

const FollowButton = ({ channelId, getChannels }) => {
  const { followChannel } = useFollowChannel();

  const handleFollowChannel = () => {
    followChannel(channelId, getChannels);
  };

  return (
    <button onClick={handleFollowChannel} className="channel-follow-button bg-pink-700 hover:bg-pink-500 hover:text-pink-900 hover:scale-105 transilition-transform hover:rounded-md">
      Follow
    </button>
  );
};

export const ChannelDescription = ({
  username,
  title,
  description,
  channelId,
  getChannels,
}) => {
  const { isLogged } = useUserDetails();

  return (
    <div className="flex flex-col space-y-8">
      <span className=" text-pink-700 font-bold text-3xl flex flex-row justify-between">
        {username}
        <span>
          {isLogged && (
            <FollowButton
              className="channel-follow-button"
              channelId={channelId}
              getChannels={getChannels}
            />
          )}
        </span>
      </span>
      <div className="flex flex-col bg-pink-400 rounded-md p-2">
      <span className="font-semibold text-pink-900">{title}</span>
      <div className="">
        <span className="text-white">{description}</span>
      </div>
      </div>
    </div>
  );
};
