import React from "react";

import LayoutWithSidebar from "./components/LayoutWithSidebar";
import SampleContent from "./SampleContent";

export default function SampleLayout() {
  return (
    <LayoutWithSidebar>
      <div>Sidebar here</div>
      <SampleContent />
    </LayoutWithSidebar>
  );
}
