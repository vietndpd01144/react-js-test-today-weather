export interface TextFieldProps {
  label?: string;
  value?: string | number;
  name: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
