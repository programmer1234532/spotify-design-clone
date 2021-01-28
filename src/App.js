import React from "react";
import BottomSide from "./components/BottomSide";
import LeftSide from "./components/LeftSide";
import MidSection from "./components/MidSection";
import RightSide from "./components/RightSide";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <LeftSide></LeftSide>
        <MidSection></MidSection>
        <RightSide></RightSide>
      </div>
      <div>
        <BottomSide></BottomSide>
      </div>
    </>
  );
}

export default App;
