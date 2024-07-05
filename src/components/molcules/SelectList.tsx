import React from "react"; // 필요한 컴포넌트들을 import 해주세요.
import * as S from "@/styles/index.style";

interface SelectListProps {
  list: string[];
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectList: React.FC<SelectListProps> = ({
  list,
  setSelected,
  setIsOpen,
}) => {
  return (
    <S.select.SelectList>
      {list.map((item, index) => {
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
  );
};

export default SelectList;
