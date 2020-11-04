import React, { useState } from "react";
// import { MdStar } from "react-icons/md";

// import Divider from "./components/Divider";
import Box from "./components/Box";
// import Card from "./components/Card";
// import LayoutPlaceholder from "./components/LayoutPlaceholder";
import Stack from "./components/Stack";
import Heading from "./components/Heading";
// import Heading, { HeadingSection } from "./components/Heading";
import Text from "./components/Text";
// import TextBlock from "./components/TextBlock";
// import Hidden from "./components/Hidden";
import Inline from "./components/Inline";
import Badge from "./components/Badge";
import Spacer from "./components/Spacer";
// import Spinner, { SpinnerWithStatus } from "./components/Spinner";
// import Button, { IconButton } from "./components/Button";
// import { Row, Column } from "./components/Grid";
// import Checkbox from "./components/Checkbox";
// import Toast, { useToast } from "./components/Toast";
// import Label, { VisualOnlyLabel } from "./components/Label";
// import Switch from "./components/Switch";
import Pagination from "./components/Pagination";
// import { PlaceholderText } from "./components/Placeholder";
// import InputError from "./components/InputError";
import Select from "./components/Select";
// import TextField from "./components/TextField";
import { Tabs, TabPanel } from "./components/Tabs";
// import Link from "./components/Link";
import TableExperiment from "./components/Table/TableExperiment";

export default function SampleContent() {
  const [pageNumber, setPageNumber] = useState(0);

  const PendingTabLabel = (
    <Inline space="xs">
      <span>Pending System Account Keys</span>
      <Badge tone="critical">{23}</Badge>
    </Inline>
  );

  return (
    <Stack space="xl">
      <Heading headingLevel={1}>API Keys</Heading>
      <Stack>
        <Tabs>
          <TabPanel label="User Keys">
            <TableExperiment />
          </TabPanel>
          <TabPanel label="System Account Keys">
            System Account Keys tab
          </TabPanel>
          <TabPanel label={PendingTabLabel}>
            Pending System Account Keys tab panel contents
          </TabPanel>
        </Tabs>
        <Box display="flex" justifyContent="spaceBetween">
          <Inline>
            <Text color="gray">48 rows</Text>
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
          <Pagination
            pages={102}
            activePage={pageNumber}
            onChange={(index) => setPageNumber(index)}
          />
        </Box>
      </Stack>

      <Spacer size="lg" />
    </Stack>
  );
}
