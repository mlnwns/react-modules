type CloseButtonProps = {
  onClose: () => void;
};

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <svg
      onClick={onClose}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      role="button"
      aria-label="Close"
    >
      <path
        d="M14.4854 1.41L13.0754 0L7.48535 5.59L1.89535 0L0.485352 1.41L6.07535 7L0.485352 12.59L1.89535 14L7.48535 8.41L13.0754 14L14.4854 12.59L8.89535 7L14.4854 1.41Z"
        fill="black"
      />
    </svg>
  );
};

export default CloseButton;
