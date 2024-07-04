import { atomFamily, selectorFamily } from "recoil";

export interface PortalState {
  /** portal 열림 여부 */
  isOpen: boolean;
  /** portal 상대적 위치 여부 */
  isRelative: boolean;
  /** portal 이 아닌 곳 클릭시, 닫힘 여부(true==안닫힘, false==닫힘) */
  isBackDrop: boolean;
  /** isRelative==true && portal 위치를 설정할 ref */
  ref: React.RefObject<HTMLElement> | null;
  /** isRelative==true && portal 생성될 위치 */
  position: { top: number; left: number };
}

export const portalState = atomFamily<PortalState, string>({
  key: "portalState",
  default: {
    isOpen: false,
    isRelative: false,
    isBackDrop: false,
    ref: null,
    position: { top: 0, left: 0 },
  },
});

export const portalOpenState = selectorFamily({
  key: "portalOpenState",
  get:
    (portalStateId: string) =>
    ({ get }) => {
      return get(portalState(portalStateId)).isOpen;
    },
  set:
    (portalStateId: string) =>
    ({ set }, newValue) => {
      set(portalState(portalStateId), (prevPortal) => ({
        ...prevPortal,
        isOpen: newValue as boolean,
      }));
    },
});
