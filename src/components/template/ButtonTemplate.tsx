import * as S from "@/styles/index.style";

const ButtonTemplate = () => {
  return (
    <div>
      <h1>Button</h1>

      <S.Row>
        <S.Button $size="large" $color="primary" $outline>
          Large Primary Button
        </S.Button>
        <S.Button $size="medium" $color="primary">
          Medium
        </S.Button>
        <S.Button $size="small" $color="primary">
          Small
        </S.Button>
      </S.Row>

      <S.Row>
        <S.Button $size="large" $color="negative" $outline>
          Large Primary Button
        </S.Button>
        <S.Button $size="medium" $color="negative">
          Medium
        </S.Button>
        <S.Button $size="small" $color="negative">
          Small
        </S.Button>
      </S.Row>
    </div>
  );
};

export default ButtonTemplate;
