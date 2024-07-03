import * as S from "@/styles/index.style";
import { transStrToNumber } from "@/util/util";
import { FormEvent, useState } from "react";

const InputTemplate = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(transStrToNumber(value));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name && !price) {
      alert("Please fill out the form");
    } else {
      alert(`name : ${name}, price : ${price}`);
    }
  };

  return (
    <>
      <h1>Input</h1>

      <form onSubmit={onSubmit}>
        <S.row.Row>
          <div>
            <label>Name</label>
            <S.input.Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Price</label>
            <S.input.Input
              type="text"
              value={price?.toLocaleString()}
              onChange={onChangePrice}
            />
          </div>

          <S.button.Button $size="medium" $color="primary">
            Save
          </S.button.Button>
        </S.row.Row>
      </form>
    </>
  );
};

export default InputTemplate;
