import React, { useCallback, useState } from "react";
import { ButtonProps } from "./Button.types";
import { ButtonContainer } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  children,
  onClickHandler,
  shape,
  size = 24,
  value,
  type = "button",
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const onBtnClickHandler = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      setDisabled(true);
      if (onClickHandler) {
        await onClickHandler(e);
      }
      setDisabled(false);
    },
    []
  );

  return (
    <ButtonContainer
      type={type}
      value={value}
      shape={shape}
      size={size}
      onClick={onBtnClickHandler}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
