import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@material-ui/core/Button";

export default function Comp() {
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
      <div>
        <center>
          <h1>Power of Thought</h1>
          <div />
          <h1>{answer}</h1>
          <div />
          <Button variant="contained" color="primary" onClick={newData}>
            Click here to Load New Quote
          </Button>
          <div />
          <br />
          <CopyToClipboard text={answer}>
            <Button variant="contained" color="secondary" onClick={getIt}>
              Get it
            </Button>
          </CopyToClipboard>
          <div style={{ color: "green" }}>{showIt}</div>
        </center>
      </div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </>
  );
}
