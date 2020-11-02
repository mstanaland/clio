import React from "react";

import "./PageWithSidebar.scss";

export default function PageWithSidebar({ children, sidebarElement }) {
  return (
    <div data-page-with-sidebar>
      <div className="main-container">
        <div className="main-container-inner">{children}</div>
      </div>
      <div className="sidebar-container">{sidebarElement}</div>
    </div>
  );
}
