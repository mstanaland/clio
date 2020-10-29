import React from "react";
import PropTypes from "prop-types";

import Button, { IconButton } from "../Button";

import { IconChevronRight, IconChevronLeft } from "../Icons";

const propTypes = {
  pages: PropTypes.number,
  activePage: PropTypes.number,
  margin: PropTypes.number,
  wings: PropTypes.number,
  onChange: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default function Pagination({
  margin = 1,
  activePage = 0,
  wings = 1,
  pages = 1,
  onChange,
  ariaLabel = "Page navigation",
}) {
  function buttonRange(high, low) {
    return [...Array(high - low).keys()]
      .map((v) => v + low)
      .map((pageIndex) => {
        const pageNumber = pageIndex + 1;
        const isActive = pageIndex === activePage;

        return (
          <li key={pageNumber}>
            <Button
              appearance={isActive ? "primary" : "subtle"}
              aria-label={
                isActive
                  ? `Current Page, Page ${pageNumber}`
                  : `Page ${pageNumber}`
              }
              onPress={isActive ? null : () => onChange(pageIndex)}
            >
              {pageNumber}
            </Button>
          </li>
        );
      });
  }

  function generateButtons() {
    const buttons = [];

    if (pages < 8) {
      buttons.push(buttonRange(pages, 0));
      return buttons;
    }

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

    if (activePage >= 4 && midRange.low > lowRange.low) {
      buttons.push(buttonRange(lowRange.high, lowRange.low));
      buttons.push(
        <li key="dots1" className="text-lg px-xs">
          ...
        </li>
      );
    }

    if (activePage < 4) {
      buttons.push(buttonRange(5, 0));
    } else if (activePage < pages - 3) {
      buttons.push(buttonRange(midRange.high, midRange.low));
    }

    if (activePage >= pages - 3) {
      buttons.push(buttonRange(pages, pages - 5));
    } else if (midRange.high < highRange.high) {
      buttons.push(
        <li key="dots2" className="text-lg px-xs">
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
            iconElement={<IconChevronLeft />}
            appearance="subtle"
            isDisabled={activePage === 0}
            aria-label="Previous Page"
            onPress={() => onChange && onChange(previousPage)}
          />
        </li>
        {generateButtons()}
        <li>
          <IconButton
            iconElement={<IconChevronRight />}
            appearance="subtle"
            isDisabled={activePage === pages - 1}
            aria-label="Next Page"
            onPress={() => onChange && onChange(nextPage)}
          />
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = propTypes;
