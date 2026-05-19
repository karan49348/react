import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState("");

  let vovalcount = 0;
  let consonetcount = 0;
  let sapce = 0;
  let wordcount = 0;
  let chareter = 0;
  let updatetext = "";

  for (let i = 0; i < data.length; i++) {
    // space count
    if (data[i] === " ") {
      sapce++;
    }
    else if('aeiouAEIOU'.includes(data[i])) {
      vovalcount++;
      updatetext += data[i].toUpperCase();
    }
    else{
      consonetcount++;
      updatetext += data[i];
    }
     chareter++;
  }

  wordcount = data.trim() === ""? 0 : data.trim().split(/\s+/).length;

  return (
    <div>
      <h1>counter</h1>

      <input
        type="text"
        placeholder="Enter your word"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <h2>Updated Text: {updatetext}</h2>

      <h3>Word Count: {wordcount}</h3>
      <h3>Vowel Count: {vovalcount}</h3>
      <h3>Consonant Count: {consonetcount}</h3>
      <h3>Space Count: {sapce}</h3>
      <h3>Character Count: {chareter}</h3>
    </div>
  );
};

export default Test;
