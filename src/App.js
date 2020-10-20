import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MdStar, MdDelete } from "react-icons/md";

import Divider from "./components/Divider";
import Box from "./components/Box";
import Card from "./components/Card";
import Placeholder from "./components/Placeholder";
import Stack from "./components/Stack";
import Heading, { HeadingSection } from "./components/Heading";
import Text from "./components/Text";
import TextBlock from "./components/TextBlock";
import Hidden from "./components/Hidden";
import Inline from "./components/Inline";
import Badge from "./components/Badge";
import Spacer from "./components/Spacer";
import Spinner from "./components/Spinner";
import Button from "./components/Button";

function App() {
  const [isSpinning, setSpinning] = useState(false);
  return (
    <div className="p-xl">
      <div>
        <Router>
          <Inline>
            <Button
              size="sm"
              iconBeforeElement={<MdStar />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
          </Inline>
          <Inline>
            <Button
              appearance="link"
              size="sm"
              iconBeforeElement={<MdStar />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Link
            </Button>
            <Button
              appearance="link"
              iconBeforeElement={<MdStar />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Link
            </Button>
            <Button
              appearance="link"
              iconBeforeElement={<MdStar />}
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Link
            </Button>
          </Inline>
          <Inline>
            <Button
              isDisabled
              appearance="link"
              size="sm"
              iconBeforeElement={<MdStar />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Link
            </Button>
            <Button
              isDisabled
              appearance="link"
              iconBeforeElement={<MdStar />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Link
            </Button>
            <Button
              isDisabled
              appearance="link"
              iconBeforeElement={<MdStar />}
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Link
            </Button>
          </Inline>
          <Inline>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="primary"
              size="sm"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              appearance="primary"
              iconBeforeElement={<MdDelete />}
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="primary"
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
          </Inline>
          <Inline>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="subtle"
              size="sm"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="subtle"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="subtle"
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
          </Inline>
          <Inline>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="danger"
              size="sm"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="danger"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="danger"
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
          </Inline>
          <Inline>
            <Button
              isDisabled
              size="sm"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              isDisabled
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              iconBeforeElement={<MdStar />}
              isDisabled
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
          </Inline>
          <Inline>
            <Button
              iconBeforeElement={<MdStar />}
              appearance="subtle"
              isDisabled
              size="sm"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              appearance="subtle"
              isDisabled
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
            <Button
              appearance="subtle"
              isDisabled
              size="lg"
              isLoading={isSpinning}
              onPress={() => setSpinning((prev) => !prev)}
            >
              Change spinning
            </Button>
          </Inline>
        </Router>
        <div>
          <Spinner size="xxs" isSpinning={isSpinning} />
          <Spinner size="xs" isSpinning={isSpinning} />
          <Spinner size="sm" isSpinning={isSpinning} />
          <Spinner size="md" isSpinning={isSpinning} />
          <Spinner size="lg" isSpinning={isSpinning} />
          <Spinner size="xl" isSpinning={isSpinning} />
          <Spinner size="xxl" isSpinning={isSpinning} />
        </div>

        {/* <div style={{ maxWidth: "100%" }}>
          <Badge tone="neutral">28</Badge>
          <Badge tone="info">28</Badge>
          <Badge tone="success">28</Badge>
          <Badge tone="error">28</Badge>
          <Spacer />
          <div>
            <Badge size="lg" tone="neutral" max={99}>
              {2238}
            </Badge>
            <Badge size="lg" tone="info">
              1
            </Badge>
            <Badge size="lg" tone="success">
              28
            </Badge>
            <Badge size="lg" tone="error">
              28
            </Badge>
          </div>
          <Spacer />
          <div>
            <Badge size="xl" tone="neutral" max={99}>
              {2238}
            </Badge>
            <Badge size="xl" tone="info">
              New
            </Badge>
            <Badge size="xl" tone="success">
              28
            </Badge>
            <Badge size="xl" tone="error">
              28
            </Badge>
          </div>
        </div> */}
      </div>

      <div style={{ maxWidth: "1200px", margin: "20px auto" }}>
        <Hidden above="desktop" below="desktop">
          <TextBlock width="md">
            <Card>
              <p>
                Machine learning (ML) is the study of computer algorithms that
                improve automatically through experience. It is seen as a subset
                of artificial intelligence. Machine learning algorithms build a
                mathematical model based on sample data, known as "training
                data", in order to make predictions or decisions without being
                explicitly programmed to do so.
              </p>
              <p>
                Machine learning (ML) is the study of computer algorithms that
                improve automatically through experience. It is seen as a subset
                of artificial intelligence. Machine learning algorithms build a
                mathematical model based on sample data, known as "training
                data", in order to make predictions or decisions without being
                explicitly programmed to do so.
              </p>
              <p>
                Machine learning (ML) is the study of computer algorithms that
                improve automatically through experience. It is seen as a subset
                of artificial intelligence. Machine learning algorithms build a
                mathematical model based on sample data, known as "training
                data", in order to make predictions or decisions without being
                explicitly programmed to do so.
              </p>
            </Card>
          </TextBlock>
        </Hidden>

        <Stack>
          <Text size="xs">
            Machine learning (ML) is the study of computer algorithms that
            improve automatically through experience. It is seen as a subset of
            artificial intelligence. Machine learning algorithms build a
            mathematical model based on sample data, known as "training data",
            in order to make predictions or decisions without being explicitly
            programmed to do so. Machine learning algorithms are used in a wide
            variety of applications, such as email filtering and computer
            vision, where it is difficult or infeasible to develop conventional
            algorithms to perform the needed tasks.
          </Text>
          <Text size="sm">
            Machine learning (ML) is the study of computer algorithms that
            improve automatically through experience. It is seen as a subset of
            artificial intelligence. Machine learning algorithms build a
            mathematical model based on sample data, known as "training data",
            in order to make predictions or decisions without being explicitly
            programmed to do so. Machine learning algorithms are used in a wide
            variety of applications, such as email filtering and computer
            vision, where it is difficult or infeasible to develop conventional
            algorithms to perform the needed tasks.
          </Text>
          <Text>
            Machine learning (ML) is the study of computer algorithms that
            improve automatically through experience. It is seen as a subset of
            artificial intelligence. Machine learning algorithms build a
            mathematical model based on sample data, known as "training data",
            in order to make predictions or decisions without being explicitly
            programmed to do so. Machine learning algorithms are used in a wide
            variety of applications, such as email filtering and computer
            vision, where it is difficult or infeasible to develop conventional
            algorithms to perform the needed tasks.
          </Text>
          <Text size="lg" fontWeight="semibold">
            Machine learning (ML) is the study of computer algorithms that
            improve automatically through experience. It is seen as a subset of
            artificial intelligence. Machine learning algorithms build a
            mathematical model based on sample data, known as "training data",
            in order to make predictions or decisions without being explicitly
            programmed to do so. Machine learning algorithms are used in a wide
            variety of applications, such as email filtering and computer
            vision, where it is difficult or infeasible to develop conventional
            algorithms to perform the needed tasks.
          </Text>
          <Text size="xl" color="gray">
            Machine learning (ML) is the study of computer algorithms that
            improve automatically through experience. It is seen as a subset of
            artificial intelligence. Machine learning algorithms build a
            mathematical model based on sample data, known as "training data",
            in order to make predictions or decisions without being explicitly
            programmed to do so. Machine learning algorithms are used in a wide
            variety of applications, such as email filtering and computer
            vision, where it is difficult or infeasible to develop conventional
            algorithms to perform the needed tasks.
          </Text>
          <div style={{ width: "100px" }}>
            <Text isTruncated>
              Machine learning (ML) is the study of computer algorithms that
              improve automatically through experience. It is seen as a subset
              of
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
              And what is this heading level? What is the heading level here?
              What is the heading level here? What is the heading level here?
            </Heading>
          </HeadingSection>
        </HeadingSection>

        <Stack align={["left", "center"]} hasDividers>
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
    </div>
  );
}

export default App;
