import React, { useState } from "react";

import Modal from "./index";
import Button from "../Button";
import Text from "../Text";

export default {
  component: Modal,
  title: "Modal",
};

export function Example() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onPress={() => setShowModal(true)}>Open Dialog</Button>
      <Modal
        title="This is a modal"
        isOpen={showModal}
        onDismiss={() => setShowModal(false)}
      >
        <Text>Hello there. I am a modal dialog.</Text>
      </Modal>
    </div>
  );
}
