import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";

import Button from "../Button";

const propTypes = {
  index: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  index: 0,
  active: false,
};

export default function NumberButton({ index: pageIndex, active, onClick }) {
  const oneIndexedPage = pageIndex + 1;
  return (
    <li key={`page-${oneIndexedPage}-button`}>
      <Button
        appearance={active ? "primary" : "subtle"}
        aria-label={
          active
            ? `Current Page, Page ${oneIndexedPage}`
            : `Page ${oneIndexedPage}`
        }
        data-page={oneIndexedPage}
        onClick={active ? null : () => onClick(pageIndex)}
      >
        {oneIndexedPage}
      </Button>
    </li>
  );
}

NumberButton.propTypes = propTypes;
NumberButton.defaultProps = defaultProps;
