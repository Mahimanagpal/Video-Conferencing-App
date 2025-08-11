import React from "react";
import { useParams } from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { id } = useParams();
  const roomID = id;

  let meeting = async (element) => {
    const appID = Number(import.meta.env.VITE_APPID);
    const serverSecret = import.meta.env.VITE_APP_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "mahima"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Your Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div
      className="myCallContainer"
      ref={meeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
