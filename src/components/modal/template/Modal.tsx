import React, { useState } from "react";
import CreateGreenModal from "../molcules/CreateGreenPortal";
import CreateRedModal from "../molcules/CreateRedPortal";
import * as S from "../styles/styles";

const ModalComponent: React.FC = () => {
  const [isGreenModalOpen, setIsGreenModalOpen] = useState(false);
  const [isRedModalOpen, setIsRedModalOpen] = useState(false);

  return (
    <div>
      <h1>Modal</h1>
      <S.StGreenButton onClick={() => setIsGreenModalOpen(true)}>
        open green modal
      </S.StGreenButton>
      <S.StRedButton onClick={() => setIsRedModalOpen(true)}>
        open red modal
      </S.StRedButton>

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

