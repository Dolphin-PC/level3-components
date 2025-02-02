import * as S from "@/styles/index.style";
import { useState, useRef, useEffect } from "react";
import SelectList from "../molcules/SelectList";
import SelectListPortal from "../atom/SelectListPortal";
const list: string[] = ["React", "Java", "Spring", "React Native"];
const SelectTemplate = () => {
  // state => 조건부 렌더링 => div 열고 닫히는 => isOpen
  const [selected, setSelected] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selected2, setSelected2] = useState<number>(0);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  const ref = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Element)) {
      // event.target => 화면의 누른 곳
      setIsOpen(false); // 상태 초기화
    }
    if (ref2.current && !ref2.current.contains(event.target as Element)) {
      // event.target => 화면의 누른 곳
      setIsOpen2(false); // 상태 초기화
    }
  };

  useEffect(() => {
    // 마운트 시 이벤트 리스너 추가
    document.addEventListener("mousedown", (e) => handleClickOutside(e));
    return () => {
      // 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", (e) => handleClickOutside(e));
    };
  }, []);
  return (
    <>
      <S.select.SelectBox>
        <h1>Select</h1>
        <S.select.SelectButtonBox>
          <S.select.SelectButton
            ref={ref}
            id="Sef"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p>{list[selected]}</p>
            <p>▼</p>
          </S.select.SelectButton>
          <SelectListPortal isOpen={isOpen} btnRef={ref}>
            <SelectList
              list={list}
              setSelected={setSelected}
              setIsOpen={setIsOpen}
            />
          </SelectListPortal>
          <div>
            <S.select.SelectButton
              value={list[selected2]}
              ref={ref2}
              onClick={() => setIsOpen2((prev) => !prev)}
            >
              <p>{list[selected2]}</p>
              <p>▼</p>
            </S.select.SelectButton>
            {isOpen2 && (
              <SelectList
                list={list}
                setSelected={setSelected2}
                setIsOpen={setIsOpen2}
              />
            )}
          </div>
        </S.select.SelectButtonBox>
      </S.select.SelectBox>
    </>
  );
};

export default SelectTemplate;
