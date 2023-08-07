import { useState } from "react";

const ScreenSharing = ({ onRemoteStream }) => {
  const [stream, setStream] = useState(null);

  const startScreenSharing = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      onRemoteStream(stream);
    } catch (error) {
      console.error("Error accessing screen:", error);
    }
  };

  return (
    <div>
      <video
        className="w-full max-w-[1500px] mx-auto"
        id="localVideo"
        autoPlay
        playsInline
      ></video>
      <button onClick={startScreenSharing}>Start Sharing</button>
    </div>
  );
};

export default ScreenSharing;
