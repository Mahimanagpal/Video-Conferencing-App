import React, { useState } from "react";
import { useNavigate } from "react-router";

const JoinRoom = () => {
  const [roomid, setRoomid] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (roomid.trim()) {
      navigate(`/room/${roomid}`);
    }
  };
  return (
    <>
      <div className="join-container">
        <h1>Welcome To Video Conferencing App</h1>
        <input
          type="text"
          placeholder="Enter Room Id"
          value={roomid}
          onChange={(e) => setRoomid(e.target.value)}
        />
        <button onClick={handleSubmit}>JOIN NOW</button>
      </div>
    </>
  );
};

export default JoinRoom;
