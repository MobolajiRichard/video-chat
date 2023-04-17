import React, { useState, useRef, useEffect } from "react";
import { Videocam, VideocamOff, MicOff, Mic, Call } from "@mui/icons-material";
import io from "socket.io-client";
import Peer from "simple-peer";

const Room = ({ id }) => {
  const [toggleMic, setToggleMic] = useState(false);
  const [toggleVideo, setToggleVideo] = useState(false);
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = id;

  useEffect(() => {
    socketRef.current = io.connect("/");
    navigator.mediaDevices
      .getUserMedia({ video:true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit("join room", roomID);
        socketRef.current.on("all users", (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <div className="flex flex-col h-[100%] items-center justify-between px-2 py-2">
      <div className="flex-1 bg-slate-600 w-full p-2">
        <video muted ref={userVideo} autoPlay playsInline />
      </div>
      <div className="flex items-center justify-center justify-self-end mt-2">
        <div
          onClick={() => setToggleVideo((prev) => !prev)}
          className="bg-slate-500 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer "
        >
          {!toggleVideo && <Videocam sx={{ color: "whitesmoke" }} />}
          {toggleVideo && <VideocamOff sx={{ color: "whitesmoke" }} />}
        </div>
        <div
          onClick={() => setToggleMic((prev) => !prev)}
          className="bg-slate-500 rounded-full h-10 w-10 flex items-center justify-center ml-5 cursor-pointer"
        >
          {!toggleMic && <Mic sx={{ color: "whitesmoke" }} />}
          {toggleMic && <MicOff sx={{ color: "whitesmoke" }} />}
        </div>
        <div className="bg-red-500 rounded-full h-10 w-10 flex items-center justify-center ml-5 cursor-pointer">
          <Call sx={{ color: "whitesmoke" }} />
        </div>
      </div>
    </div>
  );
};

export default Room;
