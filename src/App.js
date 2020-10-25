import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider, DarkToggle } from "./theme";
import SampleContent from "./SampleContent";

import Divider from "./components/Divider";
import Stack from "./components/Stack";
import Spacer from "./components/Spacer";
import ContentBlock from "./components/ContentBlock";
import { ToastProvider } from "./components/Toast";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <ContentBlock>
            <Spacer size="xs" />
            <Stack>
              <DarkToggle />
              <Divider />
            </Stack>
            <Spacer size="md" />

            <SampleContent />
          </ContentBlock>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
