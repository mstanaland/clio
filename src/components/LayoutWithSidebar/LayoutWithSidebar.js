import React from "react";

import "./LayoutWithSidebar.scss";

export default function LayoutWithSidebar({ children }) {
  return (
    <div data-layout-with-sidebar>
      <div className="sidebar-container">{children[0]}</div>
      <div className="main-container">
        <div className="main-container-inner">{children[1]}</div>
      </div>
    </div>
  );
}
