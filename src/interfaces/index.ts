export interface ReusableInputProps {
  label:string;
  value: string | number;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;


}
export interface SubmitButtonProps {
  text:string;
  // onSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
}