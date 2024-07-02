# 2024 이노베이션 캠프 | React 주특기 과제 Level 3

> Goal : 모달, 버튼을 포함한 웹페이지 연습하기

- 예시 사이트 : https://hh99-react-lv3.vercel.app/

## ✅ features : 구현해야 할 기능이에요.

<details>
<summary>Modal</summary>

- 모달 2개를 구현합니다.
  - `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
  - `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
  - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 합니다. (위에서 만든 버튼을 재사용하는 것도 좋아요.)
  </details>

<details>
<summary>Button</summary>

- 총 6개 형태의 버튼을 구현합니다. (예시 페이지에서 확인)
  - `styled-components` 를 이용하여 구현하며, props를 적절하게 잘 활용하여 구현하세요.
  - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현하세요.
  </details>

<details>
<summary>Input</summary>

- 총 2개의 input을 구현합니다.
  - 일반형식의 input
  - 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input
  - form을 구현하고 각 input에 값을 입력하고 `저장` 버튼을 눌렀을 때 `{name: '아무 텍스트', price: "콤마가 없는 금액"}` 을 `alert`에 표시해보세요.
  </details>

<details>
<summary>Select</summary>

- select를 구현합니다.
  - select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경됩니다.
  - select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 `overflow: hidden`을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 `hidden` 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.
  </details>

## ❓ Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.

### 1. 모달을 구현할 때 `react-portal`을 사용 하셨나요? `react-portal`이 무엇이고 어떻게 작동하는지 설명해 주세요.

### 2. 다양한 형태의 버튼을 만들 때, 공통된 스타일 요소와 각각의 특별한 스타일 요소를 어떤 방법으로 styled-component에 적용하셨나요?

### 3. 숫자 입력 필드에서 사용자가 입력한 콤마가 포함된 금액과 콤마가 제거된 실제 금액 값을 각각 어떻게 관리하셨나요? 이를 위해 여러 상태를 사용하셨나요, 아니면 단일 상태를 통해 처리하셨나요?

### 4. `overflow: hidden`이 적용된 부모 요소에도 영향을 받지 않고 옵션이 제대로 표시되게 하는 방법은 무엇인가요?
