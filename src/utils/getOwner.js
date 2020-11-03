import { canUseDOM } from "./index";

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */
export function getOwnerDocument(element) {
  return element && element.ownerDocument
    ? element.ownerDocument
    : canUseDOM()
    ? document
    : null;
}
