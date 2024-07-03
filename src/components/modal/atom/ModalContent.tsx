import * as S from "../styles/styles";
interface ModalProps {
  children: React.ReactNode;
}
const StopProp = (evnet: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  evnet.stopPropagation();
};
const ModalContent: React.FC<ModalProps> = ({ children }) => {
  return <S.Modalcontent onClick={StopProp}>{children}</S.Modalcontent>;
};

export default ModalContent;