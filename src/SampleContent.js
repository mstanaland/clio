import React, { useState, useRef } from "react";
import { MdStar } from "react-icons/md";

import Divider from "./components/Divider";
import Box from "./components/Box";
import Card from "./components/Card";
import Placeholder from "./components/Placeholder";
import Stack from "./components/Stack";
import Heading from "./components/Heading";
// import Heading, { HeadingSection } from "./components/Heading";
import Text from "./components/Text";
import TextBlock from "./components/TextBlock";
// import Hidden from "./components/Hidden";
import Inline from "./components/Inline";
import Badge from "./components/Badge";
import Spacer from "./components/Spacer";
import Spinner, { SpinnerWithStatus } from "./components/Spinner";
import Button, { IconButton } from "./components/Button";
import { Row, Column } from "./components/Grid";
import Checkbox from "./components/Checkbox";
import Toast, { useToast } from "./components/Toast";

export default function SampleContent() {
  const [isSpinning, setSpinning] = useState(false);
  const [spinningStatus, setSpinningStatus] = useState("idle");
  const showToast = useToast();
  const timer = useRef();

  function onSuccessToastClick() {
    showToast({
      type: "success",
      message: "I did a thing!",
      description: "Aren’t you so proud of me?!",
    });
  }

  function onErrorToastClick() {
    showToast({
      type: "error",
      message: "Ummm ... that didn‘t work",
    });
  }

  const simulateLoadingSuccess = () => {
    if (spinningStatus !== "spinning") {
      clearTimeout(timer.current);
      setSpinningStatus("spinning");

      timer.current = setTimeout(() => {
        setSpinningStatus("success");
        showToast({
          type: "success",
          message: "Loading spinner with status is done",
        });
      }, 2000);
    }
    if (spinningStatus === "spinning") {
      console.log("clearTimeout");
      clearTimeout(timer.current);
      setSpinningStatus("idle");
    }
  };

  const simulateLoadingError = () => {
    if (spinningStatus !== "spinning") {
      clearTimeout(timer.current);
      setSpinningStatus("spinning");

      timer.current = setTimeout(() => {
        setSpinningStatus("error");
        showToast({
          type: "error",
          message: "Loading spinner with status is done",
        });
      }, 2000);
    }
    if (spinningStatus === "spinning") {
      console.log("clearTimeout");
      clearTimeout(timer.current);
      setSpinningStatus("idle");
    }
  };

  return (
    <Stack>
      <Inline>
        <Box height={50} width={50} shadow="xs" />
        <Box height={50} width={50} shadow="sm" />
        <Box height={50} width={50} shadow="md" />
        <Box height={50} width={50} shadow="lg" />
        <Box height={50} width={50} shadow="xl" />
        <Box height={50} width={50} shadow="xxl" />
      </Inline>

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
            Text xs: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.
          </Text>
          <Text size="sm">
            Text sm: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.
          </Text>
          <Text>
            Text md: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.
          </Text>
          <Text size="lg">
            Text lg: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.
          </Text>
          <Text size="xl">
            Text xl: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.
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
              Text truncated: Machine learning (ML) is the study of computer
              algorithms that improve automatically through experience. It is
              seen as a subset of
            </Text>
          </div>
        </Stack>
      </TextBlock>

      <TextBlock>
        <Card>
          <Stack space="xs">
            <Heading size="sm">This is a Card</Heading>
            <Text>
              Machine learning (ML) is the study of computer algorithms that
              improve automatically through experience. It is seen as a subset
              of artificial intelligence.
            </Text>
            <Stack space="sm">
              <Inline>
                <IconButton
                  size="xs"
                  iconElement={<MdStar />}
                  onPress={onSuccessToastClick}
                />
                <IconButton
                  size="sm"
                  iconElement={<MdStar />}
                  onPress={onErrorToastClick}
                />
                <IconButton
                  size="md"
                  iconElement={<MdStar />}
                  onPress={onSuccessToastClick}
                />
                <IconButton
                  size="lg"
                  iconElement={<MdStar />}
                  onPress={onErrorToastClick}
                />
              </Inline>
              <Inline>
                <IconButton
                  appearance="subtle"
                  size="xs"
                  iconElement={<MdStar />}
                />
                <IconButton
                  appearance="subtle"
                  size="sm"
                  iconElement={<MdStar />}
                />
                <IconButton
                  appearance="subtle"
                  size="md"
                  iconElement={<MdStar />}
                />
                <IconButton
                  appearance="subtle"
                  size="lg"
                  iconElement={<MdStar />}
                />
              </Inline>
              <Inline>
                <IconButton
                  appearance="link"
                  size="xs"
                  iconElement={<MdStar />}
                />
                <IconButton
                  appearance="link"
                  size="sm"
                  iconElement={<MdStar />}
                />
                <IconButton
                  appearance="link"
                  size="md"
                  iconElement={<MdStar />}
                />
                <IconButton
                  appearance="link"
                  size="lg"
                  iconElement={<MdStar />}
                />
              </Inline>
              <Inline>
                <Button
                  appearance="primary"
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Primary Button
                </Button>
                <Button
                  appearance="primary"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Primary Button
                </Button>
                <Button
                  appearance="primary"
                  size="lg"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Primary Button
                </Button>
              </Inline>
              <Inline>
                <Button
                  appearance="secondary"
                  size="sm"
                  iconBeforeElement={<MdStar />}
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Secondary Button
                </Button>
                <Button
                  appearance="secondary"
                  iconBeforeElement={<MdStar />}
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Secondary Button
                </Button>
                <Button
                  appearance="secondary"
                  size="lg"
                  iconBeforeElement={<MdStar />}
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Secondary Button
                </Button>
              </Inline>
              <Inline>
                <Button
                  iconBeforeElement={<MdStar />}
                  appearance="primary"
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  With Icon
                </Button>
                <Button
                  iconBeforeElement={<MdStar />}
                  appearance="primary"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  With Icon
                </Button>
                <Button
                  iconBeforeElement={<MdStar />}
                  appearance="primary"
                  size="lg"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  With Icon
                </Button>
              </Inline>
              <Inline>
                <Button
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Default Button
                </Button>
                <Button
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Default Button
                </Button>
                <Button
                  size="lg"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Default Button
                </Button>
              </Inline>

              <Inline>
                <Button
                  appearance="subtle"
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Subtle Button
                </Button>
                <Button
                  appearance="subtle"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Subtle Button
                </Button>
                <Button
                  appearance="subtle"
                  size="lg"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Subtle Button
                </Button>
              </Inline>
              <Inline>
                <Button
                  appearance="critical"
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Critical Button
                </Button>
                <Button
                  appearance="critical"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Critical Button
                </Button>
                <Button
                  appearance="critical"
                  size="lg"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Critical Button
                </Button>
              </Inline>
              <Inline>
                <Button
                  appearance="link"
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Link Button
                </Button>
                <Button
                  appearance="link"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Link Button
                </Button>
                <Button
                  appearance="link"
                  size="lg"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Link Button
                </Button>
              </Inline>
              <Inline>
                <Button
                  appearance="link"
                  iconBeforeElement={<MdStar />}
                  size="sm"
                  // isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Link Button
                </Button>
                <Button
                  appearance="link"
                  iconBeforeElement={<MdStar />}
                  isLoading={isSpinning}
                  onPress={() => setSpinning((prev) => !prev)}
                >
                  Link Button
                </Button>
                <Button
                  appearance="link"
                  iconBeforeElement={<MdStar />}
                  size="lg"
                  // isLoading={isSpinning}
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
        {/* <Spinner size="xxs" isSpinning={isSpinning} />
        <Spinner size="xs" isSpinning={isSpinning} />
        <Spinner size="sm" isSpinning={isSpinning} />
        <Spinner size="md" isSpinning={isSpinning} />
        <Spinner size="lg" isSpinning={isSpinning} />
        <Spinner size="xl" isSpinning={isSpinning} /> */}
      </div>

      <div>
        <Inline>
          <Button onPress={simulateLoadingSuccess}>Spinner then success</Button>
          <Button onPress={simulateLoadingError}>Spinner then error</Button>
        </Inline>
        <div>
          <SpinnerWithStatus size="md" status={spinningStatus} />
        </div>
      </div>
      <Divider />

      <Row gutter="md" alignY={["top", "bottom", "center"]}>
        <Column>
          <Placeholder height={50} />
        </Column>
        <Column>
          <Placeholder height={30} />
        </Column>
        <Column>
          <Placeholder height={100} />
        </Column>
        <Column>
          <Placeholder height={30} />
        </Column>
      </Row>

      <Stack space="xxs">
        <Checkbox label="Apples" />
        <Checkbox label="Oranges" />
        <Checkbox label="Bananas" />
        <Checkbox isLabelVisible={false} label="Hidden label" />
        <Checkbox label="Strawberries (indeterminate)" isIndeterminate />
        <Checkbox
          label="Plums (indeterminate + Disabled)"
          isDisabled
          isIndeterminate
        />
        <Checkbox label="Peaches (Disabled)" isDisabled />
        <Checkbox
          id="watching-tv"
          label="Kiwis (Disabled + Checked)"
          value="watching-tv"
          isDisabled
          isChecked
        />
      </Stack>

      <div style={{ maxWidth: "100%" }}>
        <Badge tone="neutral">28</Badge>
        <Badge tone="critical">28</Badge>
        <Spacer />
        <div>
          <Badge size="lg" tone="neutral" max={99}>
            {2238}
          </Badge>
          <Badge size="lg" tone="critical">
            {2238}
          </Badge>
        </div>
        <Spacer />

        <div>
          <Badge size="xl" tone="neutral" max={99}>
            {2238}
          </Badge>
          <Badge size="xl" tone="critical">
            28
          </Badge>
        </div>
      </div>

      <Toast message="I did the thing" />
      <Toast
        message="I really did it, I swear"
        description="If you don’t believe me, just go look for yourself"
      />
    </Stack>
  );
}
