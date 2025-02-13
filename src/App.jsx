import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./Components/MyComponent" ; 
import MyCmp from "./Components/MyCmp"  ; 
import MyC from "./Components/MyC" ; 
import CounterF from "./Components/CounterF";
import ListManagerF from "./Components/ListManagerF";
import ListM from "./Components/ListM";
import ColorBox from "./Components/ColorBox";

function App() {
const colors = ["#113f67" , "#38598b" , "#f70776"]
const initialcolor = "#f8f8f8"

  return (
    <>
<ColorBox colorOptions={colors} initialColor={initialcolor}></ColorBox>
    </>
  );
}

export default App;
