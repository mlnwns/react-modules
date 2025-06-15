import BaseModal from "../BaseModal/BaseModal";
import type { ReactNode } from "react";
import ConfirmButton from "../components/ConfirmButton/ConfirmButton";

type AlertModalProps = {
  title: string;
  content: ReactNode;
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const AlertModal = ({
  title,
  content,
  position = "center",
  size = "medium",
  hasCloseButton = true,
  onClose,
  onConfirm,
}: AlertModalProps) => {
  const buttonElements = <ConfirmButton onClick={onConfirm} />;

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

export default AlertModal;
