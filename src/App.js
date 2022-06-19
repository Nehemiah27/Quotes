import React, { useState } from "react";

export default function App() {
  const [answer, setAnwser] = useState("He who will never try, will never get");
  const newData = function dating() {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnwser(data.content);
      });
  };
  return (
    <>
      <h1>{answer}</h1>
      <div />
      <button onClick={newData}>Click here to Load New Quote</button>
    </>
  );
}
