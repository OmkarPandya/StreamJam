import React from "react";

export const StreamKey = (props) => {
  const { streamKey } = props;
  return (
    <div className="settings-stream-key-container bg-rose-50 text-lg font-semibold shadow-md rounded-md">
      <p>Stream Key</p>
      <span>{streamKey}</span>
    </div>
  );
};
