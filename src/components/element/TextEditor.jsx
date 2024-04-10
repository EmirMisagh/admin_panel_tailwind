import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({ value, handle }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const change = (event) => {
    console.log(event.blocks[0].text);
    handle(event.blocks[0].text);
  };
  return (
    <div className=" bg-bg_secend_400 pb-28">
      <Editor
        editorState={editorState}
        toolbarClassName=""
        wrapperClassName=""
        editorClassName=""
        onContentStateChange={(event) => change(event)}
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};
export default TextEditor;
