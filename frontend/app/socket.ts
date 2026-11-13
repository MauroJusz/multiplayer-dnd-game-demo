import { io } from "socket.io-client";
import type { ClientToServerEvents, ServerToClientEvents } from "./../../shared/interfaces.js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

console.log("SERVER URL:", JSON.stringify(SERVER_URL));

export const socket = io(SERVER_URL, {
    auth: {
        token: localStorage.getItem("accessToken")
    },
    autoConnect: false,
});

console.log("SOCKET MANAGER:", socket.io);

socket.on("connect", () => {
    console.log("CONNECTED:", socket.id);
});

socket.on("connect_error", (error) => {
    console.error("SOCKET CONNECTION ERROR:", error.message);
});
