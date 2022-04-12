import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/messages");
const Context = createContext({ socket });

export default function SocketContext({ children }) {
    return <Context.Provider value={socket}>{children}</Context.Provider>;
}
export const useSocket = () => useContext(Context);
