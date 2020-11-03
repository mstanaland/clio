import React, { Children } from "react";

import "./SidebarLinkGroup.scss";

export default function SidebarLinkGroup({ children, title }) {
  const menuItems = Children.toArray(children);

  return (
    <div data-sidebar-link-group>
      {Boolean(title) && <h2 className="text-xs pl-sm mb-xs">{title}</h2>}
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
