import React, { useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const [italics, setItalics] = useState("normal");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    const newTxt = text.toUpperCase();
    setText(newTxt);
  };

  const handleLowerCase = () => {
    const newTxt = text.toLowerCase();
    setText(newTxt);
  };

  const handleSpace = () => {
    const newTxt = text.split(' ').join('');
    setText(newTxt);
  };

  const handleItalics = () => {
    if (italics === "normal") {
      setItalics("italic");
    } else {
      setItalics("normal");
    }
  };
  const handleCopy=()=>{
 const box=document.getElementById('inputBox');
    box.select();
    navigator.clipboard.writeText(text)
    alert("Text Copied")
  }

  const wordCount = text.trim().split(/\s+/).length;
  const spaceCount = (text.match(/\s/g) || []).length;
  const charCount = text.replace(/\s+/g, "").length;

  return (
    <>
      <div className="flex flex-col items-center w-1/2 border-2 border-black p-4 bg-green-600">
        <div className="w-full mb-4">
          <p>No. of Words: {wordCount}</p>
          <p>No. of Spaces: {spaceCount}</p>
          <p>No. of Characters: {charCount}</p>
        </div>
        <input
          type="text"
          className="w-3/4 p-2 bg-blue-200 text-black"
          value={text}
          onChange={handleOnChange}
          id="inputBox"
          style={{ fontStyle: italics }}
        />
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 mt-4">
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleUpperCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          onClick={handleLowerCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={handleSpace}
        >
          Remove Spaces
        </button>
        <button
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={handleItalics}
        >
          Italics
        </button>
        <button
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </>
  );
}
