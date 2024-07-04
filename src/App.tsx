import { RecoilRoot } from "recoil";
import {
  ButtonTemplate,
  InputTemplate,
  ModalTemplate,
  SelectTemplate,
} from "./components/template";

function App() {
  return (
    <>
      <ButtonTemplate />
      <InputTemplate />
      <RecoilRoot>
        <ModalTemplate />
        <SelectTemplate />
      </RecoilRoot>
    </>
  );
}

export default App;
