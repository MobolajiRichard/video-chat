import React, {useState} from "react";
import { Videocam, VideocamOff, MicOff, Mic, Call } from "@mui/icons-material";

const Room = () => {
  const [toggleMic, setToggleMic] = useState(false)
  const [toggleVideo, setToggleVideo] = useState(false)

  return (
    <div className="flex flex-col h-[100%] items-center justify-between px-2 py-2">
      <div className="flex-1 bg-slate-600 w-full px-4">
    <p>hi</p>
      </div>
      <div className="flex items-center justify-center justify-self-end mt-2">
        <div onClick={() => setToggleVideo(prev => !prev)} className="bg-slate-500 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer ">
          {!toggleVideo && <Videocam sx={{color:'whitesmoke'}}/>}
          {toggleVideo && <VideocamOff sx={{color:'whitesmoke'}}/>}
        </div>
        <div onClick={() => setToggleMic(prev => !prev)} className="bg-slate-500 rounded-full h-10 w-10 flex items-center justify-center ml-5 cursor-pointer">
          {!toggleMic && <Mic sx={{color:'whitesmoke'}}/>}
          {toggleMic && <MicOff sx={{color:'whitesmoke'}}/>}
        </div>
        <div className="bg-red-500 rounded-full h-10 w-10 flex items-center justify-center ml-5 cursor-pointer">
          <Call sx={{color:'whitesmoke'}}/>
        </div>
      </div>
    </div>
  );
};

export default Room;
