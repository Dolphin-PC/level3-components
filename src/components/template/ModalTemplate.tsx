import * as S from "@/styles/index.style";
import { useRef } from "react";
import Portal from "../atom/Portal";
import usePortal from "../../hooks/usePortal";

const ModalTemplate = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const modal1 = usePortal("modal1", {
    isRelative: true,
    ref: ref,
  });

  const modal2 = usePortal("modal2", {});

  const ref2 = useRef<HTMLButtonElement>(null);
  const modal3 = usePortal("modal3", {
    isRelative: true,
    ref: ref2,
    isBackDrop: true,
  });

  const modal4 = usePortal("modal4", { isBackDrop: true });

  return (
    <>
      <h1>Modal</h1>

      <S.row.Row>
        <section>
          <S.button.Button ref={ref} onClick={modal1.openModal}>
            상대 위치
          </S.button.Button>
          <Portal portalStateId="modal1">
            <h2>Modal Title2222222222</h2>
            <p>This is a modal content.</p>
          </Portal>
        </section>

        <section>
          <S.button.Button
            $size="large"
            $outline
            $color="negative"
            onClick={modal2.openModal}
          >
            절대 위치
          </S.button.Button>
          <Portal portalStateId="modal2">
            <h2>Modal Title2222222222</h2>
            <p>This is a modal content.</p>
          </Portal>
        </section>

        <section>
          <S.button.Button ref={ref2} onClick={modal3.openModal}>
            상대 위치 + 백드롭
          </S.button.Button>
          <Portal portalStateId="modal3">
            <h2>Modal Title2222222222</h2>
            <p>This is a modal content.</p>
            <S.button.Button
              $size="small"
              $color="negative"
              onClick={modal3.closeModal}
            >
              Close
            </S.button.Button>
          </Portal>
        </section>

        <section>
          <S.button.Button
            $size="large"
            $outline
            $color="negative"
            onClick={modal4.openModal}
          >
            절대 위치 + 백드롭
          </S.button.Button>
          <Portal portalStateId="modal4">
            <h2>Modal Title2222222222</h2>
            <p>This is a modal content.</p>
            <S.button.Button
              $size="small"
              $color="negative"
              onClick={modal4.closeModal}
            >
              Close
            </S.button.Button>
          </Portal>
        </section>
      </S.row.Row>
    </>
  );
};

export default ModalTemplate;
