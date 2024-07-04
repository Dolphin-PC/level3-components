import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { portalOpenState, portalState } from "./atom";

interface Option {
  /** portal 이 아닌 곳 클릭시, 닫힘 여부 */
  isBackDrop?: boolean;
  /** portal 상대적 위치 여부 */
  isRelative?: boolean;
  /** isRelative==true && portal 위치를 설정할 ref */
  ref?: React.RefObject<HTMLElement> | null;
}
const usePortal = (portalStateId: string, option: Option) => {
  //* re-render방지 :: recoil state를 받게 되면, re-render가 발생됨
  const setPortal = useSetRecoilState(portalState(portalStateId));
  const setIsPortalOpen = useSetRecoilState(portalOpenState(portalStateId));

  useEffect(() => {
    //* state 초기값 설정 :: render이후 ref가 설정되기 때문에 useEffect 사용 (componentDidMount)
    setPortal((prev) => {
      return {
        ...prev,
        isBackDrop: option?.isBackDrop || false,
        ref: option?.ref || null,
      };
    });

    // isRelative==true : 해당 ref의 위치를 기준으로 portal 위치를 설정
    if (option.isRelative && option.ref) {
      const rect = option.ref.current?.getBoundingClientRect();
      const top = 10 + (rect?.top || 0) + (rect?.height || 0) + window.scrollY;
      const left = (rect?.left || 0) + window.scrollX;

      //* setter가 2번 실행(배치)될 수 있기에, prev를 사용하여 변경된 값을 설정
      setPortal((prev) => {
        return {
          ...prev,
          isRelative: option.isRelative || false,
          position: {
            top,
            left,
          },
        };
      });
    }
  }, []);

  const openModal = () => {
    setIsPortalOpen(true);
  };

  const closeModal = () => {
    setIsPortalOpen(false);
  };

  return {
    openModal,
    closeModal,
  };
};

export default usePortal;
