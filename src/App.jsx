// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import Button from "@mui/material/Button";

import calButtonAPI from "./API/CalButtonAPI";

import TextField from "@mui/material/TextField";

import "./App.css";

const App = () => {
  const [currentExpression, setCurrentExpression] = useState("");

  const handleButtonClick = (value) => {
    if (currentExpression == "Error") {
      setCurrentExpression("");
    } else {
      switch (value) {
        case "AC":
          setCurrentExpression("");

          break;

        case "DEL":
          setCurrentExpression(currentExpression.slice(0, -1));

          break;

        case "=":
          try {
            const result = eval(currentExpression);

            setCurrentExpression(result.toString());
          } catch (error) {
            setCurrentExpression("Error");
          }

          break;

        default:
          setCurrentExpression(currentExpression + value);
      }
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <div className="calcBox">
        <div className="calcInput">
          <TextField
            id="filled-basic"
            className="inputBox"
            variant="filled"
            color="success"
            value={currentExpression}
            sx={{
              "& .MuiInputBase-input": { fontWeight: "bold", color: "white" },
            }}
          />

          <Button
            variant="contained"
            className="mainBtn"
            onClick={() => handleButtonClick("AC")}
          >
            AC
          </Button>
        </div>

        <div className="calcButton">
          {calButtonAPI.map((calBtn, index) => (
            <>
              <Button
                variant={calBtn.variant == "contained" ? "contained" : "text"}
                key={index}
                className={calBtn.className}
                onClick={() => handleButtonClick(calBtn.val)}
              >
                {calBtn.val}
              </Button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
