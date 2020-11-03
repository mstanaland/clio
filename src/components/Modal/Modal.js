import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import cx from "classnames";

import { IconButton } from "../Button";
import { IconX } from "../Icons";
import Heading from "../Heading";
import Spacer from "../Spacer";

import { ModalOverlay, ModalContent } from "./ModalParts";
import "./Modal.scss";

const noop = () => {};

/**
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 */
export const Modal = forwardRef(function Modal(
  {
    allowPinchZoom = false,
    initialFocusRef,
    isOpen,
    onDismiss = noop,
    children,
    title,
    size = "md",
    className,
    ...rest
  },
  forwardedRef
) {
  return (
    <ModalOverlay
      allowPinchZoom={allowPinchZoom}
      initialFocusRef={initialFocusRef}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <ModalContent ref={forwardedRef} {...rest}>
        <div data-modal-content-cell>
          <div data-modal-content-cell-sizer>
            <div
              data-modal-content-sizer
              className={cx({
                [`size-${size}`]: size,
              })}
            >
              <motion.div
                data-modal-content-inner
                initial={{ scale: 0.5, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className={cx(className, "p-md shadow-xxl radius-md")}
              >
                <IconButton
                  className="modal-close-btn"
                  aria-label="Close modal"
                  appearance="subtle"
                  iconElement={<IconX />}
                  onPress={onDismiss}
                />
                {title && (
                  <>
                    <div className="title-wrap">
                      <Heading headingLevel={1} size="sm">
                        {title}
                      </Heading>
                      <Spacer size="xs" />
                    </div>
                  </>
                )}
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
});

export default Modal;

Modal.propTypes = {
  /** Handle zoom/pinch gestures on iOS devices when scroll locking is enabled */
  allowPinchZoom: PropTypes.bool,

  /** By default, the first interactive element in the modal gets focus (usually the
   * close button). Pass a ref of another element in the modal to override this behavior */
  initialFocusRef: PropTypes.object,

  /** If modal is open */
  isOpen: PropTypes.bool,

  /** Function called to close the modal */
  onDismiss: PropTypes.func,

  /** Contents of the modal */
  children: PropTypes.node,

  /** Adds a title/heading */
  title: PropTypes.node,

  /** Width of the modal */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),

  /** Additional class added to content */
  className: PropTypes.string,
};
