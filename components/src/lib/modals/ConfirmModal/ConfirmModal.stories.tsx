import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./ConfirmModal";

const meta = {
  title: "Components/Modals/ConfirmModal",
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: "확인",
    content: "정말로 이 작업을 수행하시겠습니까?",
    hasCloseButton: true,
    onClose: () => alert("취소 버튼 클릭됨"),
    onConfirm: () => alert("확인 버튼 클릭됨"),
  },
};
