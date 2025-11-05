type InputWrapperProps = {
  id: string;
  label: string;
  type?: string;
};

export default function InputWrapper({ id, label, type = "text" }: InputWrapperProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </p>
  );
}
