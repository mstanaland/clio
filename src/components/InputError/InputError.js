import React from "react";

import "./InputError.scss";

export default function InputError({ children, inputId }) {
  return (
    <div
      data-input-error
      id={`${inputId}-error`}
      className="text-sm text-600"
      aria-live="assertive"
    >
      {children}
    </div>
  );
}
