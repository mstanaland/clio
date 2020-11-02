import React from "react";

import Stack from "./components/Stack";

import PageWithSidebar, {
  Sidebar,
  SidebarLinkGroup,
  SidebarLink,
} from "./components/PageWithSidebar";

import SampleContent from "./SampleContent";

const sidebarElement = (
  <Sidebar>
    <Stack space="lg">
      <SidebarLinkGroup title="AI Operations">
        <SidebarLink to="/">API Keys</SidebarLink>
        <SidebarLink to="/models">Models</SidebarLink>
        <SidebarLink to="/history">Job History</SidebarLink>
        <SidebarLink to="/operations">Model Operations</SidebarLink>
      </SidebarLinkGroup>
      <SidebarLinkGroup title="Account">
        <SidebarLink to="/foo">API Keys</SidebarLink>
        <SidebarLink to="/bar">Models</SidebarLink>
        <SidebarLink to="/baz">Job History</SidebarLink>
        <SidebarLink to="/biz">Model Operations</SidebarLink>
      </SidebarLinkGroup>
    </Stack>
  </Sidebar>
);

export default function SampleLayout() {
  return (
    <PageWithSidebar sidebarElement={sidebarElement}>
      <SampleContent />
    </PageWithSidebar>
  );
}
