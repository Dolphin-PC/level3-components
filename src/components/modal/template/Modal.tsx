import React, { useState } from "react";
import styled from "styled-components";
import CreateGreenModal from "../molcules/CreateGreenPortal";
import CreateRedModal from "../molcules/CreateRedPortal";

const ModalComponent: React.FC = () => {
  const [isGreenModalOpen, setIsGreenModalOpen] = useState(false);
  const [isRedModalOpen, setIsRedModalOpen] = useState(false);

  return (
    <div>
      <h1>Modal</h1>
      <StGreenButton onClick={() => setIsGreenModalOpen(true)}>
        open green modal
      </StGreenButton>
      <StRedButton onClick={() => setIsRedModalOpen(true)}>
        open red modal
      </StRedButton>

      <CreateGreenModal
        isOpen={isGreenModalOpen}
        onClose={() => setIsGreenModalOpen(false)}
      >
        <p>
          There are two close and confirm buttons, and the modal does not close
          when you click the outside area. When pressed the confirm button, the
          log will be shown on console.
        </p>
      </CreateGreenModal>

      <CreateRedModal
        isOpen={isRedModalOpen}
        onClose={() => setIsRedModalOpen(false)}
      >
        <p>
          There is one close button, and the modal close when you click the
          outside area.
        </p>
      </CreateRedModal>
    </div>
  );
};

export default ModalComponent;

const StGreenButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 150px;
  margin-right: 10px;
  &:active {
    background: rgb(26, 109, 85);
    color: white;
  }
`;

const StRedButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(214, 48, 49);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  &:active {
    background: #be9494;
    color: white;
  }
`;
