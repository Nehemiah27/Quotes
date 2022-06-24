import React, { useState, useEffect } from "react";
import Comp from "./Comp";
import { SketchPicker } from "react-color";
import Button from "@material-ui/core/Button";

export default function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [back, setBack] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <center
        style={{
          backgroundColor: color,
          height: "100vh",
          transition: "ease all 500ms"
        }}
      >
        <Comp />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setBack(!back)}
        >
          {!back ? "Change BackGround Color" : "Close Color Picker"}
        </Button>
        <div>
          {back ? (
            <SketchPicker
              color={color}
              onChangeComplete={(color) => {
                setColor(color.hex);
              }}
            />
          ) : null}
        </div>
      </center>
    </>
  );
}
