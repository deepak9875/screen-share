import { useEffect, useRef } from "react";

const RemoteScreenDisplay = ({ remoteStream }) => {
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (remoteStream && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  return <video ref={remoteVideoRef} autoPlay playsInline />;
};

export default RemoteScreenDisplay;
