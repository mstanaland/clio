import React from "react";
import PropTypes from "prop-types";

import Button, { IconButton } from "../Button";

// import EllipseButton from "./EllipseButton";
import NumberButton from "./NumberButton";
import { ChevronRight, ChevronLeft, HorizontalDots } from "./Icons";

const propTypes = {
  pages: PropTypes.number,
  activePage: PropTypes.number,
  margin: PropTypes.number,
  wings: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

const defaultProps = {
  pages: 1,
  activePage: 0,
  margin: 1,
  wings: 1,
  ariaLabel: "Page navigation",
};

export default function Pagination({
  margin,
  activePage,
  wings,
  pages,
  onChange,
  ariaLabel,
}) {
  function buttonRange(high, low) {
    return [...Array(high - low).keys()]
      .map((v) => v + low)
      .map((i) => (
        <NumberButton
          key={i}
          index={i}
          active={i === activePage}
          onClick={onChange}
        />
      ));
  }

  function generateButtons() {
    const lowRange = {
      low: 0,
      high: 0 + margin,
    };

    const activeRange = {
      low: activePage - wings,
      high: activePage + wings + 1,
    };

    const highRange = {
      low: pages - margin,
      high: pages,
    };

    const midRange = {
      low: activeRange.low > lowRange.high ? activeRange.low : lowRange.low,
      high:
        activeRange.high < highRange.low ? activeRange.high : highRange.high,
    };

    const buttons = [];
    if (midRange.low > lowRange.low) {
      buttons.push(buttonRange(lowRange.high, lowRange.low));
      buttons.push(
        <li key="dots1" className="text-lg">
          ...
        </li>
      );
    }

    buttons.push(buttonRange(midRange.high, midRange.low));

    if (midRange.high < highRange.high) {
      buttons.push(
        <li key="dots2" className="text-lg">
          ...
        </li>
      );
      buttons.push(buttonRange(highRange.high, highRange.low));
    }

    return buttons;
  }

  const nextPage = activePage < pages - 1 ? activePage + 1 : activePage;
  const previousPage = activePage > 0 ? activePage - 1 : activePage;

  return (
    <nav
      data-pagination
      aria-label={ariaLabel}
      className="inline-flex-centered"
    >
      <ul className="inline-flex-centered">
        <li>
          <IconButton
            iconElement={<ChevronLeft />}
            appearance="subtle"
            isDisabled={activePage === 0}
            aria-label="Previous Page"
            onClick={() => onChange(previousPage)}
          />
        </li>
        {generateButtons()}
        <li>
          <IconButton
            iconElement={<ChevronRight />}
            appearance="subtle"
            isDisabled={activePage === pages - 1}
            aria-label="Next Page"
            onClick={() => onChange(nextPage)}
          />
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
