import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState("");
  return (
    <div className=" bg-bg_secend_400 pb-28">
      <Editor
        editorState={editorState}
        toolbarClassName=""
        wrapperClassName=""
        editorClassName=""
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};
export default TextEditor;
