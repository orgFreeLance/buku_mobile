import { Modal } from "native-base";
import React from "react";
export default function ModalContainer({
  children,
  modal = false,
  closeModal = () => {},
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isOpen={modal}
        onClose={closeModal}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content style={{ backgroundColor: "white" }}>
          <Modal.Body style={{ width: "100%", justifyContent: "center" }}>
            {children}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
