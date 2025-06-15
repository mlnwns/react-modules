# @mlnwns/modal

## 설치 방법

```bash
# npm
npm install @mlnwns/modal

# yarn
yarn add @mlnwns/modal

# pnpm
pnpm add @mlnwns/modal
```

---

### BaseModal (기본 모달)

- **`position`** (`"center"` | `"bottom"`, 기본값: `"center"`)

  - 모달이 화면에 표시될 위치를 설정합니다. `"center"`는 중앙에, `"bottom"`은 하
    단에 모달을 표시합니다.

- **`size`** (`"small"` | `"medium"` | `"large"`)

  - 모달의 너비 크기를 설정합니다. `"small"`은 작은 모달, `"medium"`은 중간 크기
    , `"large"`는 큰 모달을 나타냅니다.

- **`title`** (`string`, 필수)

  - 모달의 제목을 설정합니다.

- **`content`** (`React.ReactNode`, 필수)

  - 모달에 표시할 내용을 설정합니다. 텍스트, 이미지, 컴포넌트 등 React 요소가 될
    수 있습니다.

- **`hasCloseButton`** (`boolean`, 기본값: `true`)

  - 닫기 버튼의 표시 여부를 설정합니다. `true`일 경우 닫기 버튼이 나타나며,
    `false`일 경우 버튼이 숨겨집니다.

- **`onClose`** (`() => void`, 필수)

  - 닫기 버튼을 클릭하거나, 모달 외부를 클릭했을 때 호출되는 함수입니다. 모달을
    닫는 역할을 합니다.

- **`buttonElements`** (`React.ReactNode`)

  - 모달 하단에 표시할 버튼 요소입니다. 버튼은 React 컴포넌트 형태로 전달할 수있
    습니다. 이 요소가 전달되면 모달 하단에 버튼이 추가됩니다.

---

## 구성 모달

### AlertModal

- 확인 버튼 하나만 있는 단순 알림 모달입니다.

```tsx
<AlertModal
  title="알림"
  content={<p>변경 사항이 저장되었습니다.</p>}
  onClose={() => console.log("닫기")}
  onConfirm={() => console.log("확인")}
  position="bottom"
  size="small"
  hasCloseButton={false}
/>
```

---

### ConfirmModal

- 취소 / 확인 버튼이 함께 있는 확인 모달입니다.

```tsx
<ConfirmModal
  title="삭제하시겠습니까?"
  content={<p>이 작업은 되돌릴 수 없습니다.</p>}
  onClose={() => console.log("취소")}
  onConfirm={() => console.log("확인")}
  position="center"
  size="large"
  hasCloseButton={true}
/>
```

---

### PromptModal

- 입력창이 포함된 모달입니다. `inputAttributes`로 placeholder 등 input 속성을 전
  달 할 수 있습니다.

```tsx
<PromptModal
  title="닉네임 변경"
  onClose={() => console.log("닫기")}
  onConfirm={() => console.log("확인")}
  position="bottom"
  size="medium"
  hasCloseButton={true}
  inputAttributes={{
    placeholder: "새 닉네임 입력",
  }}
/>
```
