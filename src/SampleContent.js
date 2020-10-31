import React, { useState, useRef } from "react";
import { MdStar } from "react-icons/md";

import Divider from "./components/Divider";
import Box from "./components/Box";
import Card from "./components/Card";
import LayoutPlaceholder from "./components/LayoutPlaceholder";
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
import Label, { VisualOnlyLabel } from "./components/Label";
import Switch from "./components/Switch";
import Pagination from "./components/Pagination";
import { PlaceholderText } from "./components/Placeholder";
import InputError from "./components/InputError";
import Select from "./components/Select";
import TextField from "./components/TextField";
import { IconSearchSmall } from "./components/Icons";
import { Tabs, TabPanel } from "./components/Tabs";
import Link from "./components/Link";

export default function SampleContent() {
  const [isSpinning, setSpinning] = useState(false);
  const [spinningStatus, setSpinningStatus] = useState("idle");
  const [textFieldValue, setTextFieldValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
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
    clearTimeout(timer.current);
    setSpinningStatus("spinning");

    timer.current = setTimeout(() => {
      setSpinningStatus("success");
      showToast({
        type: "success",
        message: "Loading spinner with status is done",
      });
    }, 1500);
  };

  const simulateLoadingError = () => {
    clearTimeout(timer.current);
    setSpinningStatus("spinning");

    timer.current = setTimeout(() => {
      setSpinningStatus("error");
      showToast({
        type: "error",
        message: "Loading spinner with status is done",
      });
    }, 1500);
  };

  const PendingTabLabel = (
    <Inline space="xs">
      <span>Pending System Account Keys</span>
      <Badge tone="critical">{23}</Badge>
    </Inline>
  );

  return (
    <Stack>
      <Tabs>
        <TabPanel label="User Keys">User Keys tab</TabPanel>
        <TabPanel label="System Account Keys">System Account Keys tab</TabPanel>
        <TabPanel label={PendingTabLabel}>
          Pending System Account Keys tab panel contents
        </TabPanel>
        <TabPanel label="User Keys">User Keys tab</TabPanel>
      </Tabs>

      <Inline>
        <Pagination
          pages={102}
          activePage={pageNumber}
          onChange={(index) => setPageNumber(index)}
        />
        <Select
          label="Rows per page"
          isLabelVisible={false}
          options={[
            { label: "10 per page", value: "10" },
            { label: "25 per page", value: "25" },
            { label: "50 per page", value: "50" },
          ]}
        />
      </Inline>

      <Stack space="xs">
        <Heading size="xxl">Heading xxl</Heading>
        <Heading size="xl">Heading xl</Heading>
        <Heading size="lg">Heading lg</Heading>
        <Heading size="md">Heading md</Heading>
        <Heading size="sm">Heading sm</Heading>
        <Heading size="xs">Heading xs</Heading>
      </Stack>

      <Row>
        <Column>
          <Text size="xs">
            Text xs: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.{" "}
            <Link href="/">Testing 1,2,3</Link>
          </Text>
        </Column>
        <Column>
          <Text size="sm">
            Text sm: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence. <Link to="/">Testing 1,2,3</Link>
          </Text>
        </Column>
        <Column>
          <Text>
            Text md: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.{" "}
            <Link href="/">Testing 1,2,3</Link>
          </Text>
        </Column>
        <Column>
          <PlaceholderText lines={6} />
        </Column>
        <Column>
          <Text size="lg">
            Text lg: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.{" "}
            <Link href="/">Testing 1,2,3 and stuff and junk </Link>
          </Text>
        </Column>
        <Column>
          <Text size="xl">
            Text xl: Machine learning (ML) is the study of computer algorithms
            that improve automatically through experience. It is seen as a
            subset of artificial intelligence.{" "}
            <Link href="/">Testing 1,2,3</Link>
          </Text>
        </Column>
      </Row>
      <TextBlock>
        <Stack>
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
          </Stack>
        </Card>
      </TextBlock>

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
          <IconButton appearance="subtle" size="xs" iconElement={<MdStar />} />
          <IconButton appearance="subtle" size="sm" iconElement={<MdStar />} />
          <IconButton appearance="subtle" size="md" iconElement={<MdStar />} />
          <IconButton appearance="subtle" size="lg" iconElement={<MdStar />} />
        </Inline>
        <Inline>
          <IconButton appearance="link" size="xs" iconElement={<MdStar />} />
          <IconButton appearance="link" size="sm" iconElement={<MdStar />} />
          <IconButton appearance="link" size="md" iconElement={<MdStar />} />
          <IconButton appearance="link" size="lg" iconElement={<MdStar />} />
        </Inline>
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
            appearance="secondary"
            size="sm"
            iconBeforeElement={<MdStar />}
            isLoading={isSpinning}
            onPress={() => setSpinning((prev) => !prev)}
          >
            Secondary Button
          </Button>
          <Button
            appearance="secondary"
            iconBeforeElement={<MdStar />}
            isLoading={isSpinning}
            onPress={() => setSpinning((prev) => !prev)}
          >
            Secondary Button
          </Button>
          <Button
            appearance="secondary"
            size="lg"
            iconBeforeElement={<MdStar />}
            isLoading={isSpinning}
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
            appearance="critical"
            size="sm"
            isLoading={isSpinning}
            onPress={() => setSpinning((prev) => !prev)}
          >
            Critical Button
          </Button>
          <Button
            appearance="critical"
            isLoading={isSpinning}
            onPress={() => setSpinning((prev) => !prev)}
          >
            Critical Button
          </Button>
          <Button
            appearance="critical"
            size="lg"
            isLoading={isSpinning}
            onPress={() => setSpinning((prev) => !prev)}
          >
            Critical Button
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
          <Button
            appearance="link"
            iconBeforeElement={<MdStar />}
            size="sm"
            isLoading={isSpinning}
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

      <Divider />
      <div>
        <Heading size="sm">Spinner sizes (click buttons above)</Heading>
        <Spinner size="xxs" isSpinning={isSpinning} />
        <Spinner size="xs" isSpinning={isSpinning} />
        <Spinner size="sm" isSpinning={isSpinning} />
        <Spinner size="md" isSpinning={isSpinning} />
        <Spinner size="lg" isSpinning={isSpinning} />
        <Spinner size="xl" isSpinning={isSpinning} />
      </div>

      <Divider />

      <Stack>
        <Inline>
          <Button onPress={simulateLoadingSuccess}>Spinner then success</Button>
          <Button onPress={simulateLoadingError}>Spinner then error</Button>
        </Inline>
        <SpinnerWithStatus size="md" status={spinningStatus} />
      </Stack>
      <Divider />

      <Row gutter="md" alignY={["top", "bottom", "center"]}>
        <Column>
          <LayoutPlaceholder height={50} />
        </Column>
        <Column>
          <LayoutPlaceholder height={30} />
        </Column>
        <Column>
          <LayoutPlaceholder height={100} />
        </Column>
        <Column>
          <LayoutPlaceholder height={30} />
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

      <Row>
        <Column width="4">
          <Select
            placeholder="Choose an option..."
            isInline
            label="This is a select"
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Option 3", value: "3" },
            ]}
          />
        </Column>
        <Column width="4">
          <Select
            label="This is a select"
            placeholder="Choose an option..."
            isRequired
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Option 3", value: "3" },
            ]}
          />
        </Column>
      </Row>

      <Row>
        <Column width="4">
          <TextField label="This is a text field" />
        </Column>
        <Column width="4">
          <TextField
            value={textFieldValue}
            onChange={(event) => setTextFieldValue(event.target.value)}
            hasClearButton
            onClearButtonClick={() => setTextFieldValue("")}
            label="This is a text field"
            iconElement={<IconSearchSmall />}
          />
        </Column>
        <Column width="4">
          <TextField label="This is a text field" unitAfter="$" />
        </Column>
      </Row>

      <Label isRequired htmlFor="foo">
        This is a label
      </Label>
      <InputError>This is an error</InputError>
      <Inline space="sm">
        <Switch aria-labelledby="testing-label-id" />
        <VisualOnlyLabel id="testing-label-id">
          Example visual-only label
        </VisualOnlyLabel>
      </Inline>
      <Inline space="sm">
        <Switch isDisabled aria-labelledby="testing-label-id" />
        <VisualOnlyLabel id="testing-label-id">Disabled</VisualOnlyLabel>
      </Inline>
      <Switch size="sm" />
      <Inline>
        <Box height={50} width={50} shadow="xs" />
        <Box height={50} width={50} shadow="sm" />
        <Box height={50} width={50} shadow="md" />
        <Box height={50} width={50} shadow="lg" />
        <Box height={50} width={50} shadow="xl" />
        <Box height={50} width={50} shadow="xxl" />
      </Inline>

      <div style={{ maxWidth: "100%" }}>
        <Badge tone="darken">28</Badge>
        <Badge tone="critical">28</Badge>
        <Spacer />
        <div>
          <Badge size="lg" tone="darken" max={99}>
            {2238}
          </Badge>
          <Badge size="lg" tone="critical">
            {2238}
          </Badge>
        </div>
        <Spacer />

        <div>
          <Badge size="xl" tone="darken" max={99}>
            {2238}
          </Badge>
          <Badge size="xl" tone="critical">
            28
          </Badge>
        </div>
      </div>

      <Toast type="success" message="I did the thing" />
      <Toast
        type="error"
        message="I really thought did it, I swear"
        description="OK fine, it failed"
      />

      <Spacer size="lg" />
    </Stack>
  );
}
