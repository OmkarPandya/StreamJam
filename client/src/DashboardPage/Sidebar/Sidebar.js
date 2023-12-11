import React from "react";
import { useNavigate } from "react-router-dom";
import "../dashboardPage.css";
import { useUserDetails } from "../../shared/hooks";
import logo from "../../resources/images/logo.png";




const NavButton = ({ text, onClickHandler }) => {
  return (
    
    <a href="#" onClick={onClickHandler} class="flex">
    <span class="text-xl font-semibold whitespace-nowrap text-pink-500 px-4">{text}</span>
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
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white border border-pink-200 shadow-lg shadow-pink-200 "
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between py-4 overflow-y-auto items-center space-y-5">
        <div className="flex flex-col space-y-5 w-full">
          <div  className="flex items-center border-b-2 border-pink-200 px-4">
            <img src={logo} className="h-6 sm:h-7" alt="Logo" />
            <span className="text-xl font-bold whitespace-nowrap text-pink-500 ">StreamJam</span>
          </div>
          <ul className="space-y-5 font-medium ">
            <li className="flex border-b-2 border-pink-200">
              {!isLogged ? (
                <NavButton
                  className="flex text-black-900 rounded-lg group"
                  text="Login"
                  onClickHandler={handleNavigateToAuth}
                />
              ) : (
                <div className="flex items-center">
                  <NavButton
                    className="flex rounded-lg text-pink-500 group"
                    text={username}
                    onClickHandler={handleNavigateToSettings}
                  />
                  <img
                    src="https://cosmeticsbusiness.com/article-image-alias/vanilla-girl-beauty-is-already-the-2.jpeg" // Replace with the actual path
                    alt="Profile"
                    className="w-8 h-8 object-cover rounded-full ml-2"
                  />
                </div>
              )}
            </li>

            <span className="flex items-center text-pink-500 font-semibold group px-4">Followed Channels</span>

            {channels.map((channel) => (
              <div key={channel.id} className="sidebar-list-item">
                <li>
                  <a href="#" className="flex items-center px-2 py-2 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white group border border-gray-2">
                    <span className="flex-1 ms-3 whitespace-nowrap">{channel.username}</span>
                    <span
                      className="inline-flex items-center justify-center px-4 py-1 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-xl "
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
          className="flex items-center px-2 text-gray-900 rounded-lg dark:text-white group mt-5"
          text="Logout"
          onClickHandler={handleLogout}
        />
      </div>
    </aside>
  );
};
