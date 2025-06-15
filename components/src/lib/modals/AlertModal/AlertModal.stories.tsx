import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "Components/Modals/AlertModal",
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    content: "작업이 성공적으로 완료되었습니다.",
    hasCloseButton: true,
    title: "알림",
    onClose: () => alert("닫기"),
    onConfirm: () => alert("확인"),
  },
};
