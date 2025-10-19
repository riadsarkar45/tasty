// server-sockets.ts
import { Server } from "socket.io";

export const socketConnection = (io: Server) => {
  const connectedClientIds = new Set<string>();           // for global unique visitors (per browser)
  const videoViewers = new Map<string, Set<string>>();   // videoId -> set of clientIds
  const socketVideoMap = new Map<string, string>();      // socket.id -> videoId

  io.on("connection", (socket) => {
    const clientId = (socket.handshake?.auth?.clientId as string) || socket.id;
    console.log("CONNECT socket:", socket.id, "clientId:", clientId);

    connectedClientIds.add(clientId);
    io.emit("userCount", connectedClientIds.size);

    // join video
    socket.on("joinPage", (videoId: string) => {

      const prev = socketVideoMap.get(socket.id);

      if (prev && prev !== videoId) {

        // leave previous video BEFORE joining new one
        const prevSet = videoViewers.get(prev);

        if (prevSet) {

          prevSet.delete(clientId);

          io.to(prev).emit("pageViewers", prevSet.size);

          if (prevSet.size === 0) videoViewers.delete(prev);
        }
        socket.leave(prev);
      }

      socket.join(videoId);
      socketVideoMap.set(socket.id, videoId);

      if (!videoViewers.has(videoId)) videoViewers.set(videoId, new Set());

      videoViewers.get(videoId)!.add(clientId);

      console.log(`JOIN video=${videoId} clientId=${clientId}`);

      io.to(videoId).emit("pageViewers", videoViewers.get(videoId)!.size);
    });

    // explicit leave
    socket.on("leaveVideo", (videoId: string) => {

      const set = videoViewers.get(videoId);

      if (set) {
        set.delete(clientId);

        io.to(videoId).emit("pageViewers", set.size);

        if (set.size === 0) videoViewers.delete(videoId);
      }
      socket.leave(videoId);

      socketVideoMap.delete(socket.id);

      console.log(`LEAVE video=${videoId} clientId=${clientId}`);
    });

    // disconnect (refresh/close)
    socket.on("disconnect", (reason) => {

      const videoId = socketVideoMap.get(socket.id);

      if (videoId) {

        const set = videoViewers.get(videoId);

        if (set) {

          set.delete(clientId);

          io.to(videoId).emit("pageViewers", set.size);

          if (set.size === 0) videoViewers.delete(videoId);
        }
        socketVideoMap.delete(socket.id);
      }

      connectedClientIds.delete(clientId);

      io.emit("userCount", connectedClientIds.size);
      
      console.log("DISCONNECT", socket.id, "clientId:", clientId, "reason:", reason);
    });
  });
};
