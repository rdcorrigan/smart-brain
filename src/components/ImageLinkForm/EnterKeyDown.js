import React, { useState } from "react";

function EnterKeyDown({ onInputChange, onButtonSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Do something with the input value
    console.log(inputValue);
    // Clear the input field
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EnterKeyDown;
