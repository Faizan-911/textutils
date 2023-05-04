import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'success')

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleard!', 'success')

  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.vlaue);
    props.showAlert('Copied to Clipboard!', 'success')

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed!', 'success')
  };

  const [text, setText] = useState("");
  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          {" "}
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          {" "}
          Convert to Lowercase{" "}
        </button>
        <button className="btn btn-success mx-1" onClick={handleClearClick}>
          {" "}
          Clear Text{" "}
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          {" "}
          Copy Text{" "}
        </button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>
          {" "}
          Remove Extra Spaces{" "}
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter somthing in the textbox to Preview it here'}</p>
      </div>
    </div>
  );
}
