import React from "react";
import { useNavigate } from "react-router-dom";

import "../dashboardPage.css";

import { useUserDetails } from "../../shared/hooks";




const NavButton = ({ text, onClickHandler }) => {
  return (
    
    <a href="#" onClick={onClickHandler} class="flex  ps-1.5 ">
    <span class="text-xl font-semibold whitespace-nowrap dark:text-white">{text}</span>
 </a>

   

    
    
  );
};

const NavSearch = () => {
  return (
    <center>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "100%",
          backgroundColor: "#202020",
          border: "none",
          paddingLeft: "1rem",
          color: "white",
        }}
      />
    </center>
  );
};

export const Sidebar = ({ channels }) => {
  const navigate = useNavigate();
  const { username, isLogged, logout } = useUserDetails();

  const handleNavigateToAuth = () => {
    navigate("/auth");
  };

  const handleNavigateToSettings = () => {
    navigate("/settings");
  };

  const handleNavigateToChannels = () => {
    navigate("/channels");
  };

  const handleLogout = () => {
    logout();
  };

  if (!channels) {
    return null;
  }

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-pink-300 "
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto dark:bg-gray-800">
        <div>
          <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">StreamJam</span>
          </a>
          <ul className="space-y-2 font-medium">
            <li className="flex items-center">
              {!isLogged ? (
                <NavButton
                  className="flex text-black-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                  text="Login"
                  onClickHandler={handleNavigateToAuth}
                />
              ) : (
                <div className="flex items-center">
                  <NavButton
                    className="flex text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                    text={username}
                    onClickHandler={handleNavigateToSettings}
                  />
                  <img
                    src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" // Replace with the actual path
                    alt="Profile"
                    className="w-8 h-8 object-cover rounded-full ml-2"
                  />
                </div>
              )}
            </li>

            <span className="flex items-center p-2 text-pink-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">FOLLOWED CHANNELS</span>

            {channels.map((channel) => (
              <div key={channel.id} className="sidebar-list-item">
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span className="flex-1 ms-3 whitespace-nowrap">{channel.username}</span>
                    <span
                      className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                      style={{
                        color: channel.isOnline ? "green" : "red",
                      }}
                    >
                      {channel.isOnline ? "Online" : "Offline"}
                    </span>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Logout Button placed at the bottom */}
        <NavButton
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
          text="Logout"
          onClickHandler={handleLogout}
        />
      </div>
    </aside>
  );
};
