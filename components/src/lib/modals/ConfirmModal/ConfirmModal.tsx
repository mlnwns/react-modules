import BaseModal from "../BaseModal/BaseModal";
import type { ReactNode } from "react";
import CancelButton from "../components/CancelButton/CancelButton";
import ConfirmButton from "../components/ConfirmButton/ConfirmButton";

type ConfirmModalProps = {
  title: string;
  content: ReactNode;
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal = ({
  title,
  content,
  position = "center",
  size = "medium",
  hasCloseButton = true,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  const buttonElements = (
    <>
      <CancelButton onClick={onClose} />
      <ConfirmButton onClick={onConfirm ?? onClose} />
    </>
  );

  return (
    <BaseModal
      title={title}
      content={content}
      position={position}
      size={size}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      buttonElements={buttonElements}
    />
  );
};

export default ConfirmModal;
