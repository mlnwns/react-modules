import styled from "@emotion/styled";

type ConfirmButtonProps = {
  onClick: () => void;
};

const ConfirmButton = ({ onClick }: ConfirmButtonProps) => {
  return <StyledButton onClick={onClick}>확인</StyledButton>;
};

export default ConfirmButton;

const StyledButton = styled.button`
  width: 80px;
  height: 36px;
  border-radius: 5px;
  background: #333;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;
