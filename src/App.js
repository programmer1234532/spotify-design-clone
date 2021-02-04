import React from "react";
import { AppMainDiv, TopDiv,BottomDiv } from "./AppStyledComponents";
import BottomSide from "./components/BottomSide";
import LeftSide from "./components/LeftSide";
import MidSection from "./components/MidSection";
import RightSide from "./components/RightSide";
import GlobalStyle from "./globalStyles";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppMainDiv>
        <TopDiv>
          <LeftSide></LeftSide>
          <MidSection></MidSection>
          <RightSide></RightSide>
        </TopDiv>
        <BottomDiv>
          <BottomSide></BottomSide>
        </BottomDiv>
      </AppMainDiv>
    </>
  );
}

export default App;
