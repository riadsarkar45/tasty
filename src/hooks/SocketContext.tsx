import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import useLoggedInUser from "./GetUserRole";

type SocketContextType = {
    socket: Socket | null;
    userCount: number;
};

const SocketContext = createContext<SocketContextType>({
    socket: null,
    userCount: 0,
});

type SocketProviderProps = {
    children: ReactNode;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [userCount, setUserCount] = useState(0);
    const { user } = useLoggedInUser();

    useEffect(() => {
        let clientId = localStorage.getItem("clientId");
        if (!clientId) {
            clientId = crypto.randomUUID();
            localStorage.setItem("clientId", clientId);
        }
        const newSocket = io("https://tasty-server-2-2.onrender.com", {
            withCredentials: true,
            transports: ["websocket"],
            auth: { clientId }
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [user]);

    useEffect(() => {
        if (!socket) return;

        const handleUserCount = (count: number) => {
            setUserCount(count);
        };

        socket.on("userCount", handleUserCount);

        return () => {
            socket.off("userCount", handleUserCount);
        };
    }, [socket]);

    useEffect(() => {
        console.log("User count updated:", userCount);
    }, [userCount]);

    return (
        <SocketContext.Provider value={{ socket, userCount }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);