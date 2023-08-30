import React, { useState } from "react";
import Modal from "react-modal";
import Form from "../components/Form";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="case-buttons" onClick={openModal}>
        <text className="text-case">Tell Us About Your Case</text>
      </button>
      <div></div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "lightslategray", 
          },
        }}
      >

        <Form />
        <button onClick={closeModal}>Close Modal</button>
      </Modal>{" "}
    </div>
  );
}

export default MyComponent;
