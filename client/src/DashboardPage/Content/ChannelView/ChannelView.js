import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails, useUserDetails } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";

export const Stream = ({ streamUrl }) => {
  return (
    <div className="channel-video-container">
      <ReactFlvPlayer width="100%" height="100%" url={streamUrl} />
    </div>
  );
};

export const ChannelView = ({ getChannels }) => {
  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();
  const { isLogged } = useUserDetails();

  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className={isLogged ? "m-left channel-container" : "channel-container"}
    >
      <div className="channel-video-description-section space-y-8">
        {channelDetails.isOnline ? (
          <Stream streamUrl={channelDetails.streamUrl} />
        ) : (
          <div className="channel-offline-placeholder items-center text-center border text-pink-500  border-pink-900 shadow-xl bg-rose-50 h-[400px] p-auto rounded-lg">
            <span>Stream is offline :(</span>
          </div>
        )}
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
          getChannels={getChannels}
        />
      </div>
      <Chat channelId={channelDetails.id} />
    </div>
  );
};
