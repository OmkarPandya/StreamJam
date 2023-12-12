import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { useChannels, useUserDetails } from "../shared/hooks";
import { LoadingSpinner } from "../shared/components";
import { connectWithSocketServer } from "../socketConn";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getChannels, isFetching, followedChannels, allChannels } =
    useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
    connectWithSocketServer();
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container row">
      <div className="col-1">
      <Sidebar channels={followedChannels} /></div>
      <div  className="col-11">
      <Content channels={allChannels} getChannels={getChannels} />
      </div>
    </div>
  );
};
