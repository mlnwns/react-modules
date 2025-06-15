import type { Meta, StoryObj } from "@storybook/react";
import BaseModal from "./BaseModal";

const meta = {
  title: "Components/Modals/BaseModal",
  component: BaseModal,
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "기본 모달",
    content: "이것은 기본 모달입니다.",
    hasCloseButton: true,
    onClose: () => alert("닫기 버튼 클릭됨"),
  },
};

export const WithCustomButton: Story = {
  args: {
    position: "bottom",
    size: "large",
    title: "커스텀 버튼 모달",
    content: "하단에 커스텀 버튼이 있는 모달입니다.",
    hasCloseButton: false,
    onClose: () => alert("닫기 버튼 클릭됨"),
    buttonElements: (
      <button onClick={() => alert("커스텀 버튼 클릭됨")}>커스텀 버튼</button>
    ),
  },
};
