"use client";
import React from "react";

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Edit = (props) => {

  const editorRef = useRef(null);

  function one(editor){
    props.details(editorRef.current.getContent());
  }
  
  return (
    <>
      <Editor
        id="1"
        apiKey="mnjsi8c00iga0yq3zcnsif090me3lskqlwtz5y5mmr6twwdg"
        onInit={(evt, editor) => (editorRef.current = editor)}
        onEditorChange={one}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 400,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
       {/* <button onClick={log}>Log Content</button> */}
    </>
  );
};

export default Edit;
