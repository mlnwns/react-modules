import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "./PromptModal";

const meta: Meta<typeof PromptModal> = {
  title: "Components/Modals/PromptModal",
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  position: "center",
  size: "medium",
  hasCloseButton: true,
  onClose: () => alert("취소 버튼 클릭됨"),
  onConfirm: () => alert("확인 버튼 클릭됨"),
};

export const Default: Story = {
  args: {
    ...baseArgs,
    title: "이름 입력",
    inputAttributes: {
      placeholder: "이름을 입력하세요",
    },
  },
};

export const EmailPrompt: Story = {
  args: {
    ...baseArgs,
    title: "이메일 입력",
    inputAttributes: {
      type: "email",
      placeholder: "이메일을 입력하세요",
    },
  },
};

export const PasswordPrompt: Story = {
  args: {
    ...baseArgs,
    title: "비밀번호 입력",
    inputAttributes: {
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
  },
};

export const NumberPrompt: Story = {
  args: {
    ...baseArgs,
    title: "수량 입력",
    inputAttributes: {
      type: "number",
      defaultValue: 1,
    },
  },
};

export const SearchPrompt: Story = {
  args: {
    ...baseArgs,
    size: "large",
    title: "검색",
    inputAttributes: {
      type: "search",
      placeholder: "검색어를 입력하세요",
    },
  },
};
