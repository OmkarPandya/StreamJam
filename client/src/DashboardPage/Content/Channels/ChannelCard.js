import React from "react";

import "../../dashboardPage.css";

const imageUrl =
  "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/10/04/c0c3e2e4-c234-4844-8504-92e5be2f3e96/gothic-ii";



export const ChannelCard = ({
  title,
  id,
  username,
  isOnline,
  avatarUrl,
  navigateToChannelHandler,
}) => {
  const handleNavigate = () => {
    navigateToChannelHandler(id);
  };

  return (

<>



<div onClick={handleNavigate} class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img
        src={avatarUrl || imageUrl}
        class="p-8 rounded-t-lg"
      />
    
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
    
        <div class="flex items-center mt-2.5 mb-5 justify-between">
            <span class="text-3xl  text-gray-900 dark:text-white">{username}</span>
            <p href="#">
            <span
            style={{
              color: isOnline ? "green" : "red",
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
            </p>
        </div>
    </div>
</div>






    
   
    </>
  );
};
