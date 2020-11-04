import React from "react";
import { Switch, Route } from "react-router-dom";
import Stack from "./components/Stack";

import PageWithSidebar, {
  Sidebar,
  SidebarLinkGroup,
  SidebarLink,
} from "./components/PageWithSidebar";

import SampleContent from "./SampleContent";
import Hodgepodge from "./Hodgepodge";

const sidebarElement = (
  <Sidebar>
    <Stack space="lg">
      <SidebarLink to="/">Hodgepodge</SidebarLink>

      <SidebarLinkGroup title="AI Operations">
        <SidebarLink to="/api-keys">API Keys</SidebarLink>
        <SidebarLink to="/models">Models</SidebarLink>
        <SidebarLink to="/history">Job History</SidebarLink>
        <SidebarLink to="/operations">Model Operations</SidebarLink>
      </SidebarLinkGroup>
      <SidebarLinkGroup title="Account Management">
        <SidebarLink to="/foo">License Information</SidebarLink>
        <SidebarLink to="/bar">Users & Roles</SidebarLink>
      </SidebarLinkGroup>
    </Stack>
  </Sidebar>
);

export default function SampleLayout() {
  return (
    <PageWithSidebar sidebarElement={sidebarElement}>
      <Switch>
        <Route path="/api-keys">
          <SampleContent />
        </Route>
        <Route exact path="/">
          <Hodgepodge />
        </Route>
      </Switch>
    </PageWithSidebar>
  );
}
