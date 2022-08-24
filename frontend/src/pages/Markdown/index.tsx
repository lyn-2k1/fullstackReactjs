import { StrictMode } from "react";
import Editor from "./Editor";


import Markdown from "./Markdown";

// const rootElement = document.getElementById("root");

// createRoot(rootElement).render(
//   <StrictMode>
//     <Markdown />
//   </StrictMode>
// );

const markdown:React.FC = () => {
  return (<Editor/>)
}

export default markdown;