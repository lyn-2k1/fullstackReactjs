import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import TextArea from "@uiw/react-md-editor/lib/components/TextArea";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { useRef, useState } from "react";
import { Button } from "antd";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { createCommand, LexicalCommand } from "lexical";
function Placeholder() {
  return <div className="editor-placeholder">Enter some comment...</div>;
}

const editorConfig = {
  // The editor theme
  theme: {
    ltr: "ltr",
    rtl: "rtl",
    placeholder: "editor-placeholder",
    paragraph: "editor-paragraph",
    quote: "editor-quote",
    heading: {
      h1: "editor-heading-h1",
      h2: "editor-heading-h2",
      h3: "editor-heading-h3",
      h4: "editor-heading-h4",
      h5: "editor-heading-h5"
    },
    list: {
      nested: {
        listitem: "editor-nested-listitem"
      },
      ol: "editor-list-ol",
      ul: "editor-list-ul",
      listitem: "editor-listitem"
    },
    image: "editor-image",
    link: "editor-link",
    text: {
      bold: "editor-text-bold",
      italic: "editor-text-italic",
      overflowed: "editor-text-overflowed",
      hashtag: "editor-text-hashtag",
      underline: "editor-text-underline",
      strikethrough: "editor-text-strikethrough",
      underlineStrikethrough: "editor-text-underlineStrikethrough",
      code: "editor-text-code"
    },
    code: "editor-code",
    codeHighlight: {
      atrule: "editor-tokenAttr",
      attr: "editor-tokenAttr",
      boolean: "editor-tokenProperty",
      builtin: "editor-tokenSelector",
      cdata: "editor-tokenComment",
      char: "editor-tokenSelector",
      class: "editor-tokenFunction",
      "class-name": "editor-tokenFunction",
      comment: "editor-tokenComment",
      constant: "editor-tokenProperty",
      deleted: "editor-tokenProperty",
      doctype: "editor-tokenComment",
      entity: "editor-tokenOperator",
      function: "editor-tokenFunction",
      important: "editor-tokenVariable",
      inserted: "editor-tokenSelector",
      keyword: "editor-tokenAttr",
      namespace: "editor-tokenVariable",
      number: "editor-tokenProperty",
      operator: "editor-tokenOperator",
      prolog: "editor-tokenComment",
      property: "editor-tokenProperty",
      punctuation: "editor-tokenPunctuation",
      regex: "editor-tokenVariable",
      selector: "editor-tokenSelector",
      string: "editor-tokenSelector",
      symbol: "editor-tokenProperty",
      tag: "editor-tokenProperty",
      url: "editor-tokenOperator",
      variable: "editor-tokenVariable"
    }
  },
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

export default function Editor(props) {
  const [content, setCotent] = useState(props.content);
  const editorStateRef = useRef();
  const [editor] = useLexicalComposerContext();
  const HELLO_WORLD_COMMAND: LexicalCommand<string> = createCommand();

  editor.dispatchCommand(HELLO_WORLD_COMMAND, 'Hello World!');

  editor.registerCommand(
    HELLO_WORLD_COMMAND,
    (payload: string) => {
      console.log(payload); // Hello World!
      return false;
    },
    LowPriority,
  );
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container border-2 border-solid border-slate-500 p-y-4 p-l-2 p-r-3">
        <ToolbarPlugin />
        <div className="editor-inner border-t-2 border-solid border-x-0 border-b-0  border-slate-500">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input"/>}
            placeholder={<Placeholder />}
          />
          <OnChangePlugin onChange={editorState => {
              const mapData = [...editorState._nodeMap.values()];
              const data = mapData[2];
              setCotent(data?.__text || "");
              console.log(typeof(content), content, data)

          }} />
          {/* <Button label="Save" onPress={() => {
            if (editorStateRef.current) {
              saveContent(JSON.stringify(editorStateRef.current))
            }
          }} /> */}
          <HistoryPlugin />
          {/* <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin /> */}
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}