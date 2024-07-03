import styled from "styled-components";


export const StGreenButton = styled.button`
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

export const StRedButton = styled.button`
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
export const CloseButton = styled.button`
position: absolute;
right: 10px;
top: 10px;
border: none;
cursor: pointer;
border-radius: 50%;
background-color: rgb(158, 156, 156);
padding: 8px 10px;
`;


export const Buttonbox = styled.div`
display: flex;
align-items: center;
justify-content: end;
gap: 10px;
`;

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

export const Modalcontent = styled.div`
background-color: white;
padding: 20px;
border-radius: 8px;
width: 500px;
height: 300px;
display: flex;
justify-content: space-between;
flex-direction: column;
position: relative;
`;

interface ButtonEl {
  color: [number, number, number];
  backColor: [number, number, number];
}

const rgbToString = (rgb: [number, number, number]) =>
  `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

export const Button = styled.button<ButtonEl>`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(re) => rgbToString(re.backColor)};
  color: ${(re) => rgbToString(re.color)};
  height: 40px;
  width: 100px;
`;
