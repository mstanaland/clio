import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppBase from "./components/AppBase";
import Box from "./components/Box";
import Divider from "./components/Divider";
import Stack from "./components/Stack";
import Spacer from "./components/Spacer";
import ContentBlock from "./components/ContentBlock";
import { ToastProvider } from "./components/Toast";
import { ThemeProvider, DarkModeToggle } from "./theme";

// import SampleContent from "./SampleContent";
import SampleLayout from "./SampleLayout";

function App() {
  return (
    <AppBase>
      <Router>
        <ThemeProvider>
          <ToastProvider>
            <div>
              <Spacer size="xs" />
              <Box display="flex" justifyContent="end">
                <DarkModeToggle />
              </Box>
              <Divider />
            </div>

            <SampleLayout />
          </ToastProvider>
        </ThemeProvider>
      </Router>
    </AppBase>
  );
}

export default App;
