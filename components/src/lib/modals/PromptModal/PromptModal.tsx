import { ComponentProps } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import styled from "@emotion/styled";

type PromptModalProps = {
  title: string;
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  inputAttributes?: ComponentProps<"input">;
};

const PromptModal = ({
  title,
  position = "center",
  hasCloseButton = true,
  size = "medium",
  onClose,
  onConfirm,
  inputAttributes,
}: PromptModalProps) => {
  return (
    <ConfirmModal
      title={title}
      content={<StyledInput {...inputAttributes} />}
      position={position}
      size={size}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};

export default PromptModal;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 2px;
  border: 1.015px solid #000;
  padding: 8px 0 8px 8px;
`;
