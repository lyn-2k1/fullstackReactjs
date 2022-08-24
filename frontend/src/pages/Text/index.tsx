import React, { useState } from "react";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../components/TextEditor/index"), {
  ssr: false,
});

const DrafJs: React.FC = () => {

  return (
    <div className="w-full border-2 border-solid border-gray-400 rounded-lg p-2 h-[300px]">
      <Editor/>
    </div>
  );
};

export default DrafJs;
