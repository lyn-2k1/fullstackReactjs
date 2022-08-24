import React, { useState } from "react";

import { Header, Main, Cards, Footer } from "@components";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useSocket } from "src/services/socket/socket";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const router = useRouter();

  const { socket } = useSocket();

  // socket.on("connection", () => {
  //   console.log("dssd");
  // });

  console.log(socket);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h1 className="bg-red-200">Text gray</h1>
      <div className="bg-red-700 w-28 h-28">
        <h1>cjhsdbc</h1>
      </div>

      <h1>{count}</h1>

      <Button
        onClick={() => {
          setCount(Math.random());
        }}
      >
        Change
      </Button>

      <Button onClick={() => router.push("/auth/login")}>Login</Button>
    </div>
  );
};

export default Home;
