import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./Channels";
import { ChannelView } from "./ChannelView";
import { Settings } from "./Settings";

import "../dashboardPage.css";

export const Content = ({ channels, getChannels }) => {
  return (
    <div style={{paddingTop:"0px"}} className="content-container">
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="channels" element={<Channels channels={channels} />} />
        <Route
          path="channel/:id"
          element={<ChannelView getChannels={getChannels} />}
        />
      </Routes>
    </div>
  );
};
