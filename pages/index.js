import RemoteScreenDisplay from "@/components/video/RemoteScreenDisplay";
import ScreenSharing from "@/components/video/ScreenSharing";
import { useState } from "react";

export default function Home() {
  const [remoteStream, setRemoteStream] = useState(null);
  const handleRemoteStream = (stream) => {
    setRemoteStream(stream);
  };

  return (
    <>
      <ScreenSharing onRemoteStream={handleRemoteStream} />
      {remoteStream && <RemoteScreenDisplay remoteStream={remoteStream} />}
    </>
  );
}
