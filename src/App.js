import React from "react";

import Divider from "./components/Divider";
import Box from "./components/Box";
import Placeholder from "./components/Placeholder";
import Stack from "./components/Stack";
import Heading, { HeadingSection } from "./components/Heading";
import Text from "./components/Text";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "20px auto" }}>
      <Stack>
        <Text size="xs">
          Machine learning (ML) is the study of computer algorithms that improve
          automatically through experience.[1][2] It is seen as a subset of
          artificial intelligence. Machine learning algorithms build a
          mathematical model based on sample data, known as "training data", in
          order to make predictions or decisions without being explicitly
          programmed to do so.[3] Machine learning algorithms are used in a wide
          variety of applications, such as email filtering and computer vision,
          where it is difficult or infeasible to develop conventional algorithms
          to perform the needed tasks.
        </Text>
        <Text size="sm">
          Machine learning (ML) is the study of computer algorithms that improve
          automatically through experience.[1][2] It is seen as a subset of
          artificial intelligence. Machine learning algorithms build a
          mathematical model based on sample data, known as "training data", in
          order to make predictions or decisions without being explicitly
          programmed to do so.[3] Machine learning algorithms are used in a wide
          variety of applications, such as email filtering and computer vision,
          where it is difficult or infeasible to develop conventional algorithms
          to perform the needed tasks.
        </Text>
        <Text>
          Machine learning (ML) is the study of computer algorithms that improve
          automatically through experience.[1][2] It is seen as a subset of
          artificial intelligence. Machine learning algorithms build a
          mathematical model based on sample data, known as "training data", in
          order to make predictions or decisions without being explicitly
          programmed to do so.[3] Machine learning algorithms are used in a wide
          variety of applications, such as email filtering and computer vision,
          where it is difficult or infeasible to develop conventional algorithms
          to perform the needed tasks.
        </Text>
        <Text size="lg" fontWeight="semibold">
          Machine learning (ML) is the study of computer algorithms that improve
          automatically through experience.[1][2] It is seen as a subset of
          artificial intelligence. Machine learning algorithms build a
          mathematical model based on sample data, known as "training data", in
          order to make predictions or decisions without being explicitly
          programmed to do so.[3] Machine learning algorithms are used in a wide
          variety of applications, such as email filtering and computer vision,
          where it is difficult or infeasible to develop conventional algorithms
          to perform the needed tasks.
        </Text>
        <Text size="xl" color="gray">
          Machine learning (ML) is the study of computer algorithms that improve
          automatically through experience.[1][2] It is seen as a subset of
          artificial intelligence. Machine learning algorithms build a
          mathematical model based on sample data, known as "training data", in
          order to make predictions or decisions without being explicitly
          programmed to do so.[3] Machine learning algorithms are used in a wide
          variety of applications, such as email filtering and computer vision,
          where it is difficult or infeasible to develop conventional algorithms
          to perform the needed tasks.
        </Text>
        <div style={{ width: "100px" }}>
          <Text isTruncated>
            Machine learning (ML) is the study of computer algorithms that
            improve automatically through experience.[1][2] It is seen as a
            subset of
          </Text>
        </div>
      </Stack>

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
