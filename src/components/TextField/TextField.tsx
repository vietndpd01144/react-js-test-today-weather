import React, { useCallback } from "react";
import { TextFieldProps } from "./TextField.types";
import { Container, Input } from "./TextField.styled";
import { set } from "../../utils/sessionStorage";

const TextField: React.FC<TextFieldProps> = ({
  label,
  onChangeHandler,
  value,
  name,
  required,
}) => {
  const onBlurHandler = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    set(name, e.target.value);
  }, []);

  return (
    <Container>
      {label && <p>{label}:</p>}
      <Input
        value={value}
        onChange={onChangeHandler}
        name={name}
        onBlur={onBlurHandler}
        required={required}
      />
    </Container>
  );
};

export default TextField;
