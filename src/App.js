import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const [answer, setAnwser] = useState("He who will never try, will never get");
  const [showIt, setShowIt] = useState("");
  const newData = function dating() {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnwser(data.content);
      });
    setShowIt("");
  };
  function getIt() {
    setShowIt(" Now you also have it, try checking your Clipboard");
  }
  return (
    <>
      <h1>{answer}</h1>
      <div />
      <button onClick={newData}>Click here to Load New Quote</button>
      <div />
      <br />
      <CopyToClipboard text={answer}>
        <button onClick={getIt}>Get it</button>
      </CopyToClipboard>

      <span style={{ color: "green" }}>{showIt}</span>
    </>
  );
}
