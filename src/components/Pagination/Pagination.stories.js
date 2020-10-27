import React, { useState } from "react";

import Pagination from "./index";

export default {
  component: Pagination,
  title: "Pagination",
};

export const Default = () => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <Pagination
      pages={10}
      activePage={pageNumber}
      onChange={(index) => setPageNumber(index)}
    />
  );
};
