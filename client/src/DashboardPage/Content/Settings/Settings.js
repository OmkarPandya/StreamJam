import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";
import { useChannelSettings } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";

const channelSettings = {
  title: "title",
  description: "description",
  avatarUrl: "none",
  username: "Martin",
  streamKey: "1234",
};

export const Settings = () => {
  const { channelSettings, isFetching, saveSettings } = useChannelSettings();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="m-left settings-container text-pink-700 font-bold">
      <div style={{ width: "50%", float: "right" }}>
        <span>Change Password</span>
        <br />
        <PasswordSettings />
        <StreamKey streamKey={channelSettings.streamKey} />
      </div>
      <div style={{ width: "50%" }}>
        <span>Channel Settings</span>
        <br />
        <ChannelSettings
          settings={channelSettings}
          saveSettings={saveSettings}
        />
      </div>
    </div>
  );
};
