import { useEffect } from "react";
import styled from "styled-components";
import Tone from "./lib/tone";
import StartAudioContext from "startaudiocontext";
import Project from "./components/Project.jsx";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: dark-gray;
`;

function App() {
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        // iOS Web Audio API requires this library.
        StartAudioContext(Tone.context);
      },
      {
        once: true,
      }
    );
  }, []);

  return (
    <AppContainer>
      <Project />
    </AppContainer>
  );
}

export default App;
