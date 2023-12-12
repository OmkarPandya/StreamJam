import React from "react";
import { Messages } from "./Messages";
import { NewMessageInput } from "./NewMessageInput";
import { useChatHistory } from "../../../../shared/hooks";

export const Chat = ({ channelId }) => {
  const { sendMessage, messages } = useChatHistory(channelId);

  return (
    <div className="chat-section rounded-md bg-rose-50">
      <div className="chat-title-container rounded-md bg-pink-700">
        <span className="chat-title-text">Stream Chat</span>
      </div>
      <div>
        <Messages messages={messages} />
      </div>
      <NewMessageInput sendMessage={sendMessage} />
    </div>
  );
};
