import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MdStar, MdDelete } from "react-icons/md";

import { ThemeProvider, DarkToggle } from "./theme";

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
    <Router>
      <ThemeProvider>
        <div className="p-xl">
          <Stack>
            <DarkToggle />
            <Divider />
            <Stack space="xs">
              <Heading size="xxl">Heading xxl</Heading>
              <Heading size="xl">Heading xl</Heading>
              <Heading size="lg">Heading lg</Heading>
              <Heading size="md">Heading md</Heading>
              <Heading size="sm">Heading sm</Heading>
              <Heading size="xs">Heading xs</Heading>
            </Stack>
            <TextBlock>
              <Stack>
                <Text size="xs">
                  Text xs: Machine learning (ML) is the study of computer
                  algorithms that improve automatically through experience. It
                  is seen as a subset of artificial intelligence.
                </Text>
                <Text size="sm">
                  Text sm: Machine learning (ML) is the study of computer
                  algorithms that improve automatically through experience. It
                  is seen as a subset of artificial intelligence.
                </Text>
                <Text>
                  Text md: Machine learning (ML) is the study of computer
                  algorithms that improve automatically through experience. It
                  is seen as a subset of artificial intelligence.
                </Text>
                <Text size="lg">
                  Text lg: Machine learning (ML) is the study of computer
                  algorithms that improve automatically through experience. It
                  is seen as a subset of artificial intelligence.
                </Text>
                <Text size="xl">
                  Text xl: Machine learning (ML) is the study of computer
                  algorithms that improve automatically through experience. It
                  is seen as a subset of artificial intelligence.
                </Text>
                <Inline>
                  <Text fontWeight="light">FontWeight: light</Text>
                  <Text fontWeight="thin">FontWeight: thin</Text>
                  <Text fontWeight="regular">FontWeight: regular</Text>
                  <Text fontWeight="medium">FontWeight: medium</Text>
                  <Text fontWeight="semibold">FontWeight: semibold</Text>
                  <Text fontWeight="bold">FontWeight: bold</Text>
                  <Text fontWeight="heavy">FontWeight: heavy</Text>
                  <Text fontWeight="black">FontWeight: black</Text>
                  <Text fontStyle="italic">FontStyle: italic</Text>
                </Inline>

                <div style={{ width: "300px" }}>
                  <Text isTruncated>
                    Text truncated: Machine learning (ML) is the study of
                    computer algorithms that improve automatically through
                    experience. It is seen as a subset of
                  </Text>
                </div>
              </Stack>
            </TextBlock>

            <TextBlock>
              <Card>
                <Stack space="xs">
                  <Heading size="sm">This is a Card</Heading>
                  <Text>
                    Machine learning (ML) is the study of computer algorithms
                    that improve automatically through experience. It is seen as
                    a subset of artificial intelligence.
                  </Text>
                  <Stack space="sm">
                    <Inline>
                      <Button
                        appearance="primary"
                        size="sm"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Primary Button
                      </Button>
                      <Button
                        appearance="primary"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Primary Button
                      </Button>
                      <Button
                        appearance="primary"
                        size="lg"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Primary Button
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
                        With Icon
                      </Button>
                      <Button
                        iconBeforeElement={<MdStar />}
                        appearance="primary"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        With Icon
                      </Button>
                      <Button
                        iconBeforeElement={<MdStar />}
                        appearance="primary"
                        size="lg"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        With Icon
                      </Button>
                    </Inline>
                    <Inline>
                      <Button
                        size="sm"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Default Button
                      </Button>
                      <Button
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Default Button
                      </Button>
                      <Button
                        size="lg"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Default Button
                      </Button>
                    </Inline>

                    <Inline>
                      <Button
                        appearance="subtle"
                        size="sm"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Subtle Button
                      </Button>
                      <Button
                        appearance="subtle"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Subtle Button
                      </Button>
                      <Button
                        appearance="subtle"
                        size="lg"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Subtle Button
                      </Button>
                    </Inline>
                    <Inline>
                      <Button
                        appearance="danger"
                        size="sm"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Danger Button
                      </Button>
                      <Button
                        appearance="danger"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Danger Button
                      </Button>
                      <Button
                        appearance="danger"
                        size="lg"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Danger Button
                      </Button>
                    </Inline>
                    <Inline>
                      <Button
                        appearance="link"
                        size="sm"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Link Button
                      </Button>
                      <Button
                        appearance="link"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Link Button
                      </Button>
                      <Button
                        appearance="link"
                        size="lg"
                        isLoading={isSpinning}
                        onPress={() => setSpinning((prev) => !prev)}
                      >
                        Link Button
                      </Button>
                    </Inline>
                    <Inline>
                      <Button isDisabled size="sm">
                        Disabled Button
                      </Button>
                      <Button isDisabled>Disabled Button</Button>
                      <Button isDisabled size="lg">
                        Disabled Button
                      </Button>
                    </Inline>
                  </Stack>
                </Stack>
              </Card>
            </TextBlock>

            <Divider />
            <div>
              <Heading size="sm">Spinner sizes (click buttons above)</Heading>
              <Spinner size="xxs" isSpinning={isSpinning} />
              <Spinner size="xs" isSpinning={isSpinning} />
              <Spinner size="sm" isSpinning={isSpinning} />
              <Spinner size="md" isSpinning={isSpinning} />
              <Spinner size="lg" isSpinning={isSpinning} />
              <Spinner size="xl" isSpinning={isSpinning} />
              <Spinner size="xxl" isSpinning={isSpinning} />
            </div>
            <Divider />

            <div style={{ maxWidth: "100%" }}>
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
            </div>
          </Stack>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
