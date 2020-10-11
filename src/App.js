import React from "react";

import Divider from "./components/Divider";
import Box from "./components/Box";
import Placeholder from "./components/Placeholder";
import Stack from "./components/Stack";
import Heading, { HeadingSection } from "./components/Heading";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "20px auto" }}>
      <Heading size="xxl">
        What is the heading level here? What is the heading level here?What is
        the heading level here?
      </Heading>

      <HeadingSection tag="section">
        <Heading size="lg">
          What about here? What is the heading level here?What is the heading
          level here?
        </Heading>

        <HeadingSection tag="section">
          <Heading>
            And what is this heading level? What is the heading level here? What
            is the heading level here? What is the heading level here?
          </Heading>
        </HeadingSection>
      </HeadingSection>

      <Stack align={["left", "center"]} hasDividers dividerColor="dark">
        <Placeholder width={50} height={50} />
        <Placeholder width={50} height={50} />
        <Placeholder width={50} height={50} />
      </Stack>

      <div>
        <Heading size="xxl">How now brown cow?</Heading>
        <Heading size="xl">How now brown cow?</Heading>
        <Heading size="lg">How now brown cow?</Heading>
        <Heading size="md">How now brown cow?</Heading>
        <Heading size="sm">How now brown cow?</Heading>
        <Heading size="xs">How now brown cow?</Heading>
      </div>

      <Box
        padding={["lg", "sm", "xl", "md"]}
        margin={["lg", "sm", "xl", "md"]}
        shadow="none"
        background="n40"
        borderRightRadius="lg"
      >
        Hello
      </Box>

      <Divider />
    </div>
  );
}

export default App;
