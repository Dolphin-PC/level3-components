import * as S from "@/styles/index.style";
// import Button from "../atom/Button";
import { useState, useRef, useEffect } from "react";
import Portal from "../atom/Portal";
const list: string[] = ["React", "Java", "Spring", "React Native"];
const SelectTemplate = () => {
  // state => 조건부 렌더링 => div 열고 닫히는 => isOpen
  const [selected, setSelected] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selected2, setSelected2] = useState<number>(0);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  const ref = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // event.target => 화면의 누른 곳
      setIsOpen(false); // 상태 초기화
    }
    if (ref2.current && !ref2.current.contains(event.target)) {
      // event.target => 화면의 누른 곳
      setIsOpen2(false); // 상태 초기화
    }
  };

  useEffect(() => {
    // 마운트 시 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   console.log({ selected });
  // }, [selected]);

  // react 라이프사이클 -> render -> componentDidMount (useEffect(), [])
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
          <Portal isOpen={isOpen} btnRef={ref}>
            <S.select.SelectList>
              {list.map((item, index) => {
                // console.log({ item, index });
                return (
                  <S.select.ListButton
                    key={item}
                    onMouseDown={() => {
                      setSelected(+index);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </S.select.ListButton>
                );
              })}
            </S.select.SelectList>
          </Portal>
          <div>
            <S.select.SelectButton
              ref={ref2}
              onClick={() => setIsOpen2((prev) => !prev)}
            >
              <p>{list[selected2]}</p>
              <p>▼</p>
            </S.select.SelectButton>
            {isOpen2 && (
              <S.select.SelectList>
                {list.map((item, index) => {
                  console.log({ item, index });
                  return (
                    <S.select.ListButton
                      key={item}
                      onMouseDown={() => {
                        setSelected2(+index);
                        setIsOpen2(false);
                      }}
                    >
                      {item}
                    </S.select.ListButton>
                  );
                })}
              </S.select.SelectList>
            )}
          </div>
        </S.select.SelectButtonBox>
      </S.select.SelectBox>
    </>
  );
};

export default SelectTemplate;

{
  /*   
<div class="sc-csuSiG lekfQG"><div class="sc-eDWCr iJhQUA">React</div><div class="sc-eDWCr iJhQUA">Java</div><div class="sc-eDWCr iJhQUA">Spring</div><div class="sc-eDWCr iJhQUA">React Native</div></div>
  
  
  
  
 */
}
