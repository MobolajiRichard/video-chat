import { Help } from "@mui/icons-material";
import { useState } from "react";

const Welcome = ({ setUser }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (!name || !room) {
      setError(true);
    } else {
      let userObject = {
        name,
        room,
      };
      setUser(userObject);
      const nextUrl = `/${userObject.room}`;
      const nextTitle = `Interact Room ${userObject.room}`;
      const nextState = { additionalInfomation: "move to the chat room" };
      window.history.pushState(nextState, nextTitle, nextUrl);
    }
  };
  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col items-center">
      <div className="flex text-white w-full justify-around h-[12%] bg-slate-900 items-center">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center ">
          <p className="text-slate-900 text-3xl">I</p>
        </div>
        <p className="text-3xl font-mono">Interact</p>
        <div>
          <Help />
        </div>
      </div>
      <div className="min-h-[70%] bg-slate-900  w-[90%] md:w-[60%] mt-14 rounded-lg flex flex-col px-5 md:px-10 py-5 text-slate-200">
        <p className="text-center mb-10">Create or join a room</p>
        <div className="flex flex-col mb-10">
          <p className="mb-2">Enter your name:</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none border-0 bg-slate-800 p-4 rounded-lg "
          />
        </div>
        <div className="flex flex-col mb-14">
          <p className="mb-2">Enter Room ID:</p>
          <input
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="outline-none border-0 bg-slate-800 p-4 rounded-lg "
          />
        </div>
        <button
          onClick={onSubmit}
          className="bg-slate-500 w-40 h-14 rounded-lg self-center cursor-pointer hover:bg-slate-600"
        >
          Join
        </button>
        {error && (
          <p className="text-red-500 text-center mt-2">
            An error occured, please ensure all fields are illed and try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Welcome;
