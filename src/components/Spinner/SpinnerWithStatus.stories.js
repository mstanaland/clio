import React, { useState, useRef } from "react";

import { SpinnerWithStatus } from "./index";
import Button from "../Button";

export default {
  component: SpinnerWithStatus,
  title: "SpinnerWithStatus",
};

export const Default = (args) => <SpinnerWithStatus {...args} />;

export const SuccessExample = () => {
  const [spinningStatus, setSpinningStatus] = useState("idle");
  const timer = useRef();

  const simulateLoadingSuccess = () => {
    clearTimeout(timer.current);
    setSpinningStatus("spinning");

    timer.current = setTimeout(() => {
      setSpinningStatus("success");
    }, 1500);
  };

  return (
    <div>
      <Button onPress={simulateLoadingSuccess}>Spinning then success</Button>
      <SpinnerWithStatus size="md" status={spinningStatus} />
    </div>
  );
};

export const ErrorExample = () => {
  const [spinningStatus, setSpinningStatus] = useState("idle");
  const timer = useRef();

  const simulateLoadingError = () => {
    clearTimeout(timer.current);
    setSpinningStatus("spinning");

    timer.current = setTimeout(() => {
      setSpinningStatus("error");
    }, 1500);
  };

  return (
    <div>
      <Button onPress={simulateLoadingError}>Spinning then error</Button>
      <SpinnerWithStatus size="md" status={spinningStatus} />
    </div>
  );
};
