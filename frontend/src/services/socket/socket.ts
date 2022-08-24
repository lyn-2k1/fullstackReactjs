import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { useCallback, useMemo } from "react";

export function useSocket() {
  const socket = useMemo(() => {
    console.log("socket init");
    return io("ws://localhost:4005", {
      reconnectionDelayMax: 10000,
      extraHeaders: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
  }, []);
  return { socket };
}
