import React from "react";
import { useNavigate } from "react-router-dom";
import "../dashboardPage.css";
import { useUserDetails } from "../../shared/hooks";
import logo from "../../resources/images/logo.png";




const NavButton = ({ text, onClickHandler }) => {
  return (
    
    <a href="#" onClick={onClickHandler} class="flex">
    <span class="text-xl font-semibold whitespace-nowrap text-pink-500">{text}</span>
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

  const handleNavigateToChannel = (id) => {
    navigate(`/channel/${id}`);
  };

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
      <div className="h-full flex flex-col justify-between py-2 overflow-y-auto items-center space-y-2">
        <div className="flex flex-col space-y-2 ">
          <div  className="flex flex-col items-center border-b-2 border-pink-200 px-4">
            <img src={logo} className=" sm:h-7" alt="Logo" />
            <span className="flex flex-col my-2 items-center text-xl font-bold whitespace-nowrap text-pink-500 ">StreamJam</span>
          </div>

{isLogged ? (
  <div onClickHandler={handleNavigateToSettings} class="flex flex-col items-center">
  <img style={{borderRadius:"50%", width:"60%", marginBottom:"13px"}} src="https://w0.peakpx.com/wallpaper/209/892/HD-wallpaper-bear-pink.jpg">

  </img>
  <h1  class="text-xl font-bold">{username}</h1>
  <p class="text-gray-700">{"Singer"}</p>
 
</div>
):(
  <button onClickHandler={handleNavigateToAuth}>Login</button>
)}


          








  <ul className="flex flex-col items-center space-y-5 font-medium ">
            

            <span className="flex items-center text-pink-500 font-semibold group px-4">Followed Channels</span>

            {channels.map((channel) => (
              <div  key={channel.id} className="flex flex-col items-center sidebar-list-item">
                <li>
                  <a  href="#" onClick={() => handleNavigateToChannel(channel.id)} className="flex items-center px-2 py-2 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white group border border-gray-2">
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
            <li style={{marginTop:"50%"}}>
            <NavButton
          className=""
          text="Logout"
          onClickHandler={handleLogout}
        />
            </li>
          </ul>
          
        </div>
        

        {/* Logout Button placed at the bottom */}
       
      </div>
    </aside>
  );
};
